
(function () {
  const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];

  // КУДИ дозволяємо “переносити” UTM:
  // додай свої домени/піддомени. Можна як exact host, так і суфікс.
  const allowedHosts = [
    'soft.reelly.io',
    'find.reelly.io',
    'app.reelly.ai',
	'reelly.ai',
	'reelly.io'
  ];

  function getUtmFromStorageOrUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utm = {};

    utmKeys.forEach(k => {
      const vFromUrl = urlParams.get(k);
      if (vFromUrl) localStorage.setItem(k, vFromUrl);
      const v = vFromUrl || localStorage.getItem(k);
      if (v) utm[k] = v;
    });

    return utm;
  }

  function isAllowedHost(hostname) {
    return allowedHosts.some(h =>
      hostname === h || hostname.endsWith('.' + h)
    );
  }

  function appendUtmToUrl(rawHref, utmObj) {
    const url = new URL(rawHref, window.location.href);

    Object.entries(utmObj).forEach(([k, v]) => {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });

    return url.toString();
  }

  // 1) зберегли/дістали utm
  const utm = getUtmFromStorageOrUrl();

  // 2) перехоплюємо кліки по всіх <a>
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (!a || !a.href) return;

    // Не чіпаємо: mailto/tel/anchors
    if (a.href.startsWith('mailto:') || a.href.startsWith('tel:') || a.getAttribute('href')?.startsWith('#')) return;

    // якщо UTM нема — нічого додавати
    if (Object.keys(utm).length === 0) return;

    const targetUrl = new URL(a.href, window.location.href);

    // Додаємо UTM для:
    // - внутрішніх лінків
    // - зовнішніх, але тільки на allowlist доменів/піддоменів
    const isInternal = targetUrl.origin === window.location.origin;
    const isAllowedExternal = isAllowedHost(targetUrl.hostname);

    if (!isInternal && !isAllowedExternal) return;

    a.href = appendUtmToUrl(a.href, utm);
  }, true);

})();
