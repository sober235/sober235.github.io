(function () {
  var root = document.documentElement;
  var modes = ['system', 'light', 'dark'];
  var setting = 'system';
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  try {
    var saved = localStorage.getItem('siteTheme');
    if (modes.indexOf(saved) !== -1) setting = saved;
  } catch (err) {}

  function updateButton() {
    var button = document.getElementById('theme-toggle');
    if (!button) return;
    var chinese = root.lang === 'zh-CN';
    var labels = chinese
      ? { system: '跟随系统', light: '浅色', dark: '深色' }
      : { system: 'System', light: 'Light', dark: 'Dark' };
    var next = modes[(modes.indexOf(setting) + 1) % modes.length];
    var label = chinese
      ? '切换主题：当前为' + labels[setting] + '；点击切换为' + labels[next]
      : 'Change theme: ' + labels[setting] + '. Switch to ' + labels[next];
    button.title = label;
    button.setAttribute('aria-label', label);
  }

  function applyTheme() {
    var theme = setting === 'system' ? (systemTheme.matches ? 'dark' : 'light') : setting;
    root.setAttribute('data-theme-setting', setting);
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1b1c1f' : '#ffffff';
    updateButton();
  }

  // Run in the head so the saved theme is applied before the first paint.
  applyTheme();
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme();
    var button = document.getElementById('theme-toggle');
    if (button) button.addEventListener('click', function () {
      setting = modes[(modes.indexOf(setting) + 1) % modes.length];
      try { localStorage.setItem('siteTheme', setting); } catch (err) {}
      applyTheme();
    });
  });
  document.addEventListener('site:language-change', updateButton);
  systemTheme.addEventListener('change', function () {
    if (setting === 'system') applyTheme();
  });
})();
