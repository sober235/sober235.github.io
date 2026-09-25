(function () {
  var language = 'en';
  try {
    if (localStorage.getItem('siteLang') === 'cn') language = 'cn';
  } catch (err) {}

  function applyLanguage() {
    var chinese = language === 'cn';
    document.documentElement.classList.toggle('show-cn', chinese);
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';

    var title = document.querySelector('title[data-title-en]');
    if (title) document.title = title.getAttribute('data-title-' + language);

    document.querySelectorAll('img[data-alt-en]').forEach(function (image) {
      image.alt = image.getAttribute('data-alt-' + language);
    });

    ['en', 'cn'].forEach(function (code) {
      var button = document.getElementById('btn-' + code);
      if (button) {
        button.classList.toggle('active', code === language);
        button.setAttribute('aria-pressed', String(code === language));
      }
    });
    document.dispatchEvent(new CustomEvent('site:language-change'));
  }

  window.setLang = function (value) {
    language = value === 'cn' ? 'cn' : 'en';
    applyLanguage();
    try { localStorage.setItem('siteLang', language); } catch (err) {}
  };

  applyLanguage();
  document.addEventListener('DOMContentLoaded', applyLanguage);
})();
