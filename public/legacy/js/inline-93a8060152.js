
document.addEventListener("DOMContentLoaded", function() {
  var pageURL = encodeURIComponent(window.location.href);
  var pageTitle = encodeURIComponent(document.title);

  // Twitter/X
  var twitter = document.querySelector('.shere-twitter');
  if (twitter) {
    twitter.style.cursor = 'pointer';
    twitter.addEventListener('click', function() {
      window.open(
        'https://twitter.com/intent/tweet?url=' + pageURL + '&text=' + pageTitle,
        '_blank'
      );
    });
  }

  // LinkedIn
  var linkedin = document.querySelector('.shere-linkedin');
  if (linkedin) {
    linkedin.style.cursor = 'pointer';
    linkedin.addEventListener('click', function() {
      window.open(
        'https://www.linkedin.com/sharing/share-offsite/?url=' + pageURL,
        '_blank'
      );
    });
  }

  // Instagram — копіює посилання
  var instagram = document.querySelector('.shere-instagram');
  if (instagram) {
    instagram.style.cursor = 'pointer';
    instagram.addEventListener('click', function() {
      navigator.clipboard.writeText(window.location.href).then(function() {
        var original = instagram.innerHTML;
        instagram.style.opacity = '0.5';
        setTimeout(function() { instagram.style.opacity = '1'; }, 1500);
        alert('✓ Посилання скопійовано! Вставте в Instagram.');
      });
    });
  }
});
