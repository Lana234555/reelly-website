
(function() {
  var iframe = document.getElementById('lovable-frame');
  var baseUrl = 'https://uae.reelly.ai/';
  
  function loadIframe() {
    iframe.src = baseUrl + '?v=' + Date.now();
  }
  
  // Перше завантаження
  loadIframe();
  
  // Оновлення коли юзер повертається на вкладку
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      loadIframe();
    }
  });
  
  // Оновлення коли вікно знову у фокусі (для Safari iOS)
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      loadIframe();
    }
  });
})();
