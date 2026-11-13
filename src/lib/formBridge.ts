// Takes over Webflow form submissions (which only work on Webflow hosting) and sends
// them to /api/forms, which forwards to Zapier. Keeps Webflow's success/error blocks
// (.w-form-done / .w-form-fail) and the form's redirect setting.
// Memberstack login/sign-up forms (data-ms-form) are left alone.

export function installFormBridge() {
  const w = window as unknown as { __formBridge?: boolean };
  if (w.__formBridge) return;
  w.__formBridge = true;

  window.addEventListener(
    "submit",
    async (e) => {
      const form = e.target as HTMLFormElement;
      if (!(form instanceof HTMLFormElement) || form.hasAttribute("data-ms-form")) return;
      const wrapper = form.closest(".w-form");
      if (!wrapper) return;
      e.preventDefault();
      e.stopImmediatePropagation();

      const done = wrapper.querySelector<HTMLElement>(".w-form-done");
      const fail = wrapper.querySelector<HTMLElement>(".w-form-fail");
      const button = form.querySelector<HTMLInputElement>('input[type="submit"], button[type="submit"]');
      const label = button?.value;
      if (button) {
        button.disabled = true;
        const wait = button.getAttribute("data-wait");
        if (wait) button.value = wait;
      }
      if (fail) fail.style.display = "none";

      const fields: Record<string, string> = {};
      new FormData(form).forEach((v, k) => {
        if (typeof v !== "string" || k === "cf-turnstile-response" || k === "_hp") return;
        fields[k] = fields[k] ? `${fields[k]}, ${v}` : v;
      });
      for (const [k, v] of new URLSearchParams(location.search)) if (k.startsWith("utm_")) fields[k] = v;

      let ok = false;
      try {
        const res = await fetch("/api/forms", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            form: form.getAttribute("data-name") || form.name || form.id,
            page: location.href,
            fields,
            hp: (form.querySelector<HTMLInputElement>('input[name="_hp"]') || {}).value,
          }),
        });
        ok = res.ok;
      } catch {}

      if (button) {
        button.disabled = false;
        if (label !== undefined) button.value = label;
      }
      if (!ok) {
        if (fail) fail.style.display = "block";
        return;
      }
      const redirect = form.getAttribute("data-redirect") || form.getAttribute("redirect");
      if (redirect) {
        location.href = redirect;
        return;
      }
      form.reset();
      form.style.display = "none";
      if (done) done.style.display = "block";
    },
    true,
  );

  // Hidden honeypot field for spam bots (replaces Webflow's Turnstile, which is tied to Webflow hosting).
  document.querySelectorAll<HTMLFormElement>(".w-form form:not([data-ms-form])").forEach((f) => {
    if (f.querySelector('input[name="_hp"]')) return;
    const hp = document.createElement("input");
    hp.type = "text";
    hp.name = "_hp";
    hp.tabIndex = -1;
    hp.autocomplete = "off";
    hp.setAttribute("aria-hidden", "true");
    hp.style.cssText = "position:absolute;left:-10000px;width:1px;height:1px;opacity:0";
    f.appendChild(hp);
  });
}
