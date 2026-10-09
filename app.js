/* ================================================================
   Python-курс — общие скрипты
   Включая единый header со всеми уроками курса.
   ================================================================ */
(function(){
  'use strict';

  /* ==================== 0. ЕДИНЫЙ HEADER ==================== */
    var COURSE = [
    { color:'a1', title:'Модуль 1. Первые шаги', items: [
      { n:'01', file:'lesson-01-intro.html',              title:'Введение в язык Python' },
      { n:'02', file:'lesson-02-variables.html',          title:'Переменные' },
      { n:'03', file:'lesson-03-strings.html',            title:'Строки' },
      { n:'04', file:'lesson-04-nested.html',             title:'Вложенные конструкции' }
    ]},
    { color:'a2', title:'Модуль 2. Логика программы', items: [
      { n:'05', file:'lesson-05-if.html',                 title:'Условный оператор' },
      { n:'06', file:'lesson-06-nested-if.html',          title:'Вложенный условный оператор' },
      { n:'07', file:'lesson-07-while.html',              title:'Циклы' },
      { n:'08', file:'lesson-08-for.html',                title:'Циклы. Продолжение. Ч. 1' },
      { n:'09', file:'lesson-09-range.html',              title:'Циклы. Продолжение. Ч. 2' },
      { n:'10', file:'lesson-10-nested-control.html',     title:'Вложенные управляющие конструкции' }
    ]},
    { color:'a3', title:'Модуль 3. Функции', items: [
      { n:'11', file:'lesson-11-functions-void.html',     title:'Функции (невозвращающие значения)' },
      { n:'12', file:'lesson-12-functions-return.html',   title:'Функции. Продолжение (возвращающие значения)' },
      { n:'13', file:'lesson-13-random-time.html',        title:'Модули random и time' },
      { n:'14', file:'lesson-14-modules.html',            title:'Создание модулей' }
    ]},
    { color:'a5', title:'Модуль 4. Графика и проект', items: [
      { n:'15', file:'lesson-15-turtle-linear.html',      title:'Turtle. Линейные алгоритмы' },
      { n:'16', file:'lesson-16-turtle-loops.html',       title:'Turtle. Циклы' },
      { n:'17', file:'lesson-17-turtle-if.html',          title:'Turtle. Условный оператор' },
      { n:'18', file:'lesson-18-city-project.html',       title:'Проект «Городская среда»' }
    ]},
    { color:'a4', title:'Модуль 5. ООП', items: [
      { n:'19', file:'lesson-19-oop-objects.html',        title:'ООП. Объекты и методы' },
      { n:'20', file:'lesson-20-oop-events.html',         title:'ООП. События' },
      { n:'21', file:'lesson-21-oop-editor.html',         title:'ООП. Проект «Простой редактор»' },
      { n:'22', file:'lesson-22-oop-classes.html',        title:'ООП. Классы' },
      { n:'23', file:'lesson-23-oop-inheritance.html',    title:'ООП. Наследование' },
      { n:'24', file:'lesson-24-oop-inheritance-2.html',  title:'ООП. Наследование. Продолжение' }
    ]},
    { color:'a6', title:'Модуль 6. Игры на Pygame', items: [
      { n:'25', file:'lesson-25-pygame-basics.html',      title:'Основы создания игр на Pygame' },
      { n:'26', file:'lesson-26-lists.html',              title:'Списки' },
      { n:'27', file:'lesson-27-clicker-1.html',          title:'Игра «Кликер». Ч. 1' },
      { n:'28', file:'lesson-28-clicker-2.html',          title:'Игра «Кликер». Ч. 2' },
      { n:'29', file:'lesson-29-clicker-3.html',          title:'Игра «Кликер». Ч. 3' },
      { n:'30', file:'lesson-30-arkanoid-1.html',         title:'Игра «Арканоид». Ч. 1' },
      { n:'31', file:'lesson-31-arkanoid-2.html',         title:'Игра «Арканоид». Ч. 2' },
      { n:'32', file:'lesson-32-arkanoid-3.html',         title:'Игра «Арканоид». Ч. 3' }
    ]},
    { color:'a1', title:'Модуль 7. Воркшоп и выпускной', items: [
      { n:'33', file:'lesson-33-workshop.html',           title:'Воркшоп: навыки разработчика' },
      { n:'34', file:'lesson-34-marathon-test.html',      title:'ИТ-марафон. Тест' },
      { n:'35', file:'lesson-35-marathon-editor.html',    title:'ИТ-марафон. Простой редактор' },
      { n:'36', file:'lesson-36-marathon-simulator.html', title:'ИТ-марафон. Симулятор' },
      { n:'37', file:'lesson-37-graduation.html',         title:'Выпускной. Python ИТ-марафон' }
    ]}
  ];

  var HOME = 'index.html';
  var PLAYGROUND = 'python-compiler.html';

  function currentFile(){
    var p = location.pathname.split('/').pop();
    try { p = decodeURIComponent(p); } catch(e){}
    return p || HOME;
  }

  function buildHeader(){
    var cur = currentFile();

    var header = document.createElement('header');
    header.className = 'site-header';
    header.setAttribute('role', 'banner');

    // --- верхняя полоса ---
    var inner = document.createElement('div');
    inner.className = 'sh-inner';

    var logo = document.createElement('a');
    logo.className = 'sh-logo';
    logo.href = HOME;
    logo.innerHTML = '<span class="mark">Py</span><span class="lbl">Python-курс</span>';

    var nav = document.createElement('nav');
    nav.className = 'sh-nav';

    var allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'sh-btn';
    allBtn.setAttribute('aria-expanded', 'false');
    allBtn.innerHTML = 'Программа курса <span class="chev">▾</span>';

    var playBtn = document.createElement('a');
    playBtn.className = 'sh-btn play';
    playBtn.href = PLAYGROUND;
    playBtn.innerHTML = '▶ Playground';
    if (cur === PLAYGROUND) playBtn.classList.add('is-active');

    var burger = document.createElement('button');
    burger.type = 'button';
    burger.className = 'sh-burger';
    burger.setAttribute('aria-label', 'Меню');
    burger.textContent = '☰';

    nav.appendChild(allBtn);
    nav.appendChild(playBtn);
    nav.appendChild(burger);

    inner.appendChild(logo);
    inner.appendChild(nav);

    // --- выпадающее меню ---
    var menu = document.createElement('div');
    menu.className = 'sh-menu';
    menu.setAttribute('role', 'menu');

    var grid = document.createElement('div');
    grid.className = 'sh-menu-grid';

    COURSE.forEach(function(group){
      var g = document.createElement('div');
      g.className = 'sh-group g-' + group.color;
      var h = document.createElement('h4');
      h.textContent = group.title;
      g.appendChild(h);

      var list = document.createElement('div');
      list.className = 'sh-list';
      group.items.forEach(function(item){
        var a = document.createElement('a');
        a.href = item.file;
        if (item.file === cur) a.classList.add('is-active');
        a.innerHTML =
          '<span class="n">' + item.n + '</span>' +
          '<span class="t">' + item.title + '</span>';
        list.appendChild(a);
      });
      g.appendChild(list);
      grid.appendChild(g);
    });

    menu.appendChild(grid);
    header.appendChild(inner);
    header.appendChild(menu);

    document.body.insertBefore(header, document.body.firstChild);
    document.body.classList.add('has-site-header');

    // --- логика открытия/закрытия ---
    var isMobile = window.matchMedia('(max-width:720px)').matches;

    function openMenu(){
      menu.classList.add('open');
      allBtn.setAttribute('aria-expanded', 'true');
    }
    function closeMenu(){
      menu.classList.remove('open');
      allBtn.setAttribute('aria-expanded', 'false');
    }
    function toggleMenu(){
      if (menu.classList.contains('open')) closeMenu();
      else openMenu();
    }

    allBtn.addEventListener('click', function(e){
      e.stopPropagation();
      toggleMenu();
    });
    burger.addEventListener('click', function(e){
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', function(e){
      if (!header.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeMenu();
    });

    menu.addEventListener('click', function(e){
      if (e.target.closest('a')) closeMenu();
    });

    window.addEventListener('resize', function(){
      isMobile = window.matchMedia('(max-width:720px)').matches;
    });
  }

  /* ==================== 1. ПОДСВЕТКА СИНТАКСИСА ==================== */
  var LANGS = {
    py: [
      /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"\n]*"|'[^'\n]*')|(#.*$)|\b(import|from|as|def|return|class|with|try|except|finally|if|elif|else|for|while|in|and|or|not|is|lambda|yield|global|nonlocal|pass|break|continue|raise|async|await|del|assert|True|False|None|self|cls|super|match|case)\b|\b(print|len|range|input|str|int|float|bool|list|dict|set|tuple|sum|min|max|sorted|reversed|enumerate|zip|map|filter|type|isinstance|abs|round|open|iter|next|dir|vars|hasattr|getattr|setattr)\b|(@[\w.]+)|\b(\d+(?:\.\d+)?)\b/gm,
      ['s','c','k','b','d','nu']
    ],
    sql: [
      /('[^'\n]*')|(--.*$)|\b(CREATE|TABLE|IF|NOT|EXISTS|PRIMARY|KEY|AUTOINCREMENT|NULL|UNIQUE|DEFAULT|FOREIGN|REFERENCES|INSERT|INTO|VALUES|SELECT|FROM|WHERE|ORDER|BY|DESC|ASC|LIMIT|UPDATE|SET|DELETE|DROP|JOIN|ON|GROUP|AND|OR|LIKE|COUNT|AVG|SUM|INTEGER|TEXT|REAL|CHECK|LEFT|RIGHT|INNER|IS|AS|CASCADE|CURRENT_TIMESTAMP|PRAGMA)\b|\b(\d+)\b/gim,
      ['s','c','k','nu']
    ],
    html: [
      /(<!--[\s\S]*?-->)|("[^"\n]*")|(<\/?[\w!-]+|\/?>)|(\{\{[^}]*\}\}|\{%[^%]*%\})/g,
      ['c','s','k','d']
    ],
    css: [
      /(\/\*[\s\S]*?\*\/)|("[^"\n]*"|'[^'\n]*')|([\w-]+)(?=\s*:\s)|(#[0-9a-fA-F]{3,6}\b|\b\d+(?:px|rem|em|%|fr|s|ms)?)/g,
      ['c','s','k','nu']
    ],
    sh: [
      /("[^"\n]*"|'[^'\n]*')|(#.*$)|\b(cd|ls|mkdir|rm|cp|mv|git|pip|python|npm|sudo|apt|brew|echo|export|source|cat|grep|find)\b|(\$[\w{}]+)/gm,
      ['s','c','k','nu']
    ],
    kv: [
      /("[^"\n]*"|'[^'\n]*')|(#.*$)|\b(True|False|None|if|else|for|in|and|or|not|is|root|self|app)\b|\b(\d+(?:\.\d+)?)\b/gm,
      ['s','c','k','nu']
    ],
    json: [
      /("[^"\n]*")(?=\s*:)|("[^"\n]*")|\b(true|false|null)\b|\b(-?\d+(?:\.\d+)?)\b/gm,
      ['k','s','k','nu']
    ]
  };

  function escapeHtml(s){
    return s.replace(/[&<>]/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];
    });
  }

  function detectLang(text){
    if (/^\s*(CREATE|SELECT|INSERT|UPDATE|DELETE)\b/im.test(text)) return 'sql';
    if (/<!DOCTYPE|<html|<div|<section|<p>/i.test(text)) return 'html';
    if (/^\s*[.#\w-]+\s*\{/.test(text)) return 'css';
    if (/^\s*#!|^\s*(git|pip|npm|sudo)\b/m.test(text)) return 'sh';
    if (/^\s*\w+:\s*$/m.test(text) && /:\s*\w+/.test(text)) return 'kv';
    return 'py';
  }

  function highlight(codeEl){
    var cls = (codeEl.className || '').trim().split(/\s+/)[0];
    var src = codeEl.textContent;
    if (!LANGS[cls]) cls = detectLang(src);
    var lang = LANGS[cls];
    if (!lang) return;

    var re = lang[0], classes = lang[1];
    var out = '', last = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(src))){
      out += escapeHtml(src.slice(last, m.index));
      var chunk = escapeHtml(m[0]);
      for (var i = 1; i < m.length; i++){
        if (m[i] !== undefined){
          chunk = '<i class="' + classes[i - 1] + '">' + chunk + '</i>';
          break;
        }
      }
      out += chunk;
      last = m.index + m[0].length;
      if (m[0] === '') re.lastIndex++;
    }
    out += escapeHtml(src.slice(last));
    codeEl.innerHTML = out;
  }

  function highlightAll(){
    var codes = document.querySelectorAll('pre > code');
    for (var i = 0; i < codes.length; i++) highlight(codes[i]);
  }

  /* ==================== 2. КНОПКА «НАВЕРХ» ==================== */
  function addToTop(){
    var btn = document.createElement('button');
    btn.className = 'to-top';
    btn.setAttribute('aria-label', 'Наверх');
    btn.textContent = '↑';
    document.body.appendChild(btn);

    function update(){
      btn.classList.toggle('show', window.scrollY > 400);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    btn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==================== 3. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ==================== */
  var LS_THEME = 'py_cheats_theme';

  function systemIsDark(){
    return window.matchMedia('(prefers-color-scheme:dark)').matches;
  }
  function isDark(){
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark') return true;
    if (attr === 'light') return false;
    return systemIsDark();
  }
  function applyTheme(t){
    if (t === 'dark' || t === 'light'){
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function initTheme(){
    var saved = null;
    try { saved = localStorage.getItem(LS_THEME); } catch(e){}
    if (saved) applyTheme(saved);

    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Переключить тему');

    function refresh(){
      btn.textContent = isDark() ? '☀' : '☾';
      btn.title = isDark() ? 'Светлая тема' : 'Тёмная тема';
    }
    refresh();

    btn.addEventListener('click', function(){
      var next = isDark() ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(LS_THEME, next); } catch(e){}
      refresh();
    });

    document.body.appendChild(btn);
  }

  /* ==================== 4. ПРОГРЕСС ЧТЕНИЯ ==================== */
  function addReadProgress(){
    var bar = document.createElement('div');
    bar.className = 'read-progress';
    document.body.appendChild(bar);

    function update(){
      var h = document.documentElement;
      var total = h.scrollHeight - h.clientHeight;
      var pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      bar.style.width = pct.toFixed(2) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ==================== 5. АКТИВНЫЙ ПУНКТ NAV ==================== */
  function initNavActive(){
    var nav = document.querySelector('nav.toc, nav:not(.sh-nav)');
    if (!nav) return;
    var links = nav.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    var targets = [];
    for (var i = 0; i < links.length; i++){
      var id = links[i].getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) targets.push({ el: el, link: links[i] });
    }
    if (!targets.length || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        for (var j = 0; j < targets.length; j++){
          targets[j].link.classList.toggle('active', targets[j].el === entry.target);
        }
      });
    }, { rootMargin: '-90px 0px -70% 0px', threshold: 0 });

    targets.forEach(function(t){ io.observe(t.el); });
  }

  /* ==================== 6. ID ДЛЯ H2 БЕЗ ID ==================== */
  function initAutoIds(){
    var h2s = document.querySelectorAll('main h2:not([id])');
    for (var i = 0; i < h2s.length; i++){
      var t = h2s[i].textContent
        .toLowerCase()
        .replace(/[^\wа-яё]+/gi, '-')
        .replace(/^-|-$/g, '');
      if (t) h2s[i].id = t;
    }
  }

  /* ==================== 7. ПЛАВНЫЙ СКРОЛЛ ЯКОРЕЙ ==================== */
  function initSmoothScroll(){
    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      if (a.closest('.sh-menu')) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  }

  /* ==================== ЗАПУСК ==================== */
  function boot(){
    buildHeader();
    initAutoIds();
    highlightAll();
    addToTop();
    initTheme();
    addReadProgress();
    initNavActive();
    initSmoothScroll();
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();