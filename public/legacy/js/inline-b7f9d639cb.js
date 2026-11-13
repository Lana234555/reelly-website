
  // Перевіряємо, чи є збережений Session ID
  let sessionID = sessionStorage.getItem("mixpanel_session_id");

  if (!sessionID) {
    // Якщо Session ID ще немає, генеруємо новий
    sessionID = `session_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem("mixpanel_session_id", sessionID);
  }

  mixpanel.init("790f80aee96a9522c6b3616180b40e6e", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage"
  });

  // Встановлюємо унікальний ідентифікатор сесії як властивість користувача
  mixpanel.register({
    session_id: sessionID
  });

  // Відстежуємо перегляд сторінки з тим самим session_id
  mixpanel.track("Page View", {
    url: window.location.href,
    session_id: sessionID
  });

