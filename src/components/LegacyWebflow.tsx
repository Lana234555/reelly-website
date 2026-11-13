"use client";

import { useEffect } from "react";

// Runs the original Webflow runtime (interactions, sliders, dropdowns, forms),
// plus the custom code and integrations (GTM, Mixpanel, Wized, Finsweet...) that the
// Webflow site loaded. This is a migration bridge: as sections are rebuilt as React
// components, their scripts can be removed from the page's `scripts` list.

export type LegacyScript = {
  src: string;
  inline?: boolean;
  async?: boolean;
  type?: string;
  attrs?: Record<string, string>;
};

export type LegacyPage = {
  wfPage?: string;
  bodyClass?: string;
  styles?: string[];
  scripts?: LegacyScript[];
};

let started = false;

function patchReadyEvents() {
  // Scripts written for Webflow wait for DOMContentLoaded / load, which have already
  // fired by the time React mounts. Run such listeners right away instead.
  const w = window as unknown as { __legacyPatched?: boolean };
  if (w.__legacyPatched) return;
  w.__legacyPatched = true;
  const wrap = (target: Document | Window, events: string[]) => {
    const orig = target.addEventListener.bind(target);
    (target as Window).addEventListener = ((type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) => {
      if (events.includes(type)) {
        setTimeout(() => (typeof fn === "function" ? fn.call(target, new Event(type)) : fn.handleEvent(new Event(type))), 0);
        return;
      }
      orig(type, fn, opts);
    }) as typeof window.addEventListener;
  };
  wrap(document, ["DOMContentLoaded"]);
  wrap(window, ["load", "DOMContentLoaded"]);
}

function load(s: LegacyScript): Promise<void> {
  return new Promise((resolve) => {
    const el = document.createElement("script");
    if (s.type) el.type = s.type;
    for (const [k, v] of Object.entries(s.attrs ?? {})) el.setAttribute(k, v);
    el.src = s.src;
    el.async = !!s.async;
    el.onload = el.onerror = () => resolve();
    document.body.appendChild(el);
    if (s.async || s.type === "module") resolve();
  });
}

export default function LegacyWebflow({ wfPage, bodyClass, styles = [], scripts = [] }: LegacyPage) {
  useEffect(() => {
    if (started) return;
    started = true;
    const root = document.documentElement;
    root.setAttribute("data-wf-site", "6297c98631a984c162542adb");
    if (wfPage) root.setAttribute("data-wf-page", wfPage);
    root.classList.add("w-mod-js");
    if ("ontouchstart" in window) root.classList.add("w-mod-touch");
    if (bodyClass) document.body.className = bodyClass;
    // Autoplay background videos (React does not render the `muted` attribute on the server).
    document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });
    patchReadyEvents();
    (async () => {
      for (const s of scripts) await load(s);
    })();
  }, [wfPage, bodyClass, scripts]);

  return (
    <>
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
    </>
  );
}
