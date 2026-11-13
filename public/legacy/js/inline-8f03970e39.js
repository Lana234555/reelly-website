
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'resize') {
      const iframe = document.getElementById('lovable-frame');
      if (iframe) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });
