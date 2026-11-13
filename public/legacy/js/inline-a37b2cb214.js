
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    var element = event.target.closest("[data-mixpanel]");
    
    if (element) {
      var actionName = element.getAttribute("data-mixpanel");

      mixpanel.track("Button Click", {
        "button_location": actionName,
        "button_text": element.innerText.trim() || "No text",
        "element_tag": element.tagName.toLowerCase(),
        "page_url": window.location.href,
        "page_title": document.title,
        "timestamp": new Date().toISOString()
      });
    }
  });
});
