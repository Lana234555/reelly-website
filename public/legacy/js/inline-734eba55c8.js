
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");
  
  images.forEach(function(img) {
    // Видаляємо параметри стиснення Webflow CDN
    let src = img.src;
    if (src.includes("uploads-ssl.webflow.com") || src.includes("assets-global.website-files.com")) {
      // Прибираємо параметри compress/resize
      src = src.replace(/\?.*$/, "");
      img.src = src;
    }
    
    // Також для srcset
    if (img.srcset) {
      img.srcset = "";
    }
  });
});
