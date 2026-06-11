/* ============================================
   Portfolio Script — Наталья Лапкина
   ============================================ */

'use strict';

// ─── Config: Form submission ───
// Выберите один из методов и раскомментируйте нужный блок:

const FORM_CONFIG = {
  // Formspree: https://formspree.io/
  // method: 'formspree',
  // endpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  // Google Apps Script Web App URL
  // method: 'gas',
  // endpoint: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',

  // Telegram Bot API (через свой backend или serverless function)
  // method: 'telegram',
  // endpoint: 'https://your-backend.com/api/send-telegram',

  // По умолчанию — mailto fallback
  method: 'mailto',
  endpoint: 'lapkinanatala819@gmail.com'
};

// ─── Data: Services ───
const services = [
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    title: 'Создание сайтов',
    desc: 'Сайт, который помогает получать обращения и клиентов — современный, понятный и заточенный под вашу аудиторию.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    title: 'Telegram-боты',
    desc: 'Автоматизация общения с клиентами и приёма заявок — бот работает 24/7, пока вы занимаетесь делом.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 22"/><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92"/><circle cx="12" cy="6" r="1"/></svg>',
    title: 'AI-ассистенты',
    desc: 'Умные помощники, которые экономят время и снимают рутину — ответы на вопросы, обработка заявок, контент.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: 'Автоматизация процессов',
    desc: 'Связка инструментов, которая убирает ручную работу и ускоряет ваши бизнес-процессы.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
    title: 'MVP-приложения',
    desc: 'Быстрый запуск минимального продукта для проверки идеи — без месяцев разработки и огромных бюджетов.'
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    title: 'AI-контент и презентации',
    desc: 'Презентации, тексты и визуалы с помощью AI — профессионально и быстро, для вашего бренда.'
  }
];

// ─── Data: Portfolio (кейсы Behance-формата) ───
const portfolio = [
  {
    title: 'Сайт логопеда',
    task: 'Специалисту нужен современный сайт, который вызывает доверие у родителей и принимает записи онлайн.',
    solution: 'Лендинг с услугами, дипломами, блоком доверия и формой записи — спокойная визуальная среда без перегруза.',
    result: 'Готовый сайт для публикации: родители видят экспертизу и могут записаться в один клик.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Адаптив', 'SEO'],
    url: 'https://natalialapkina.github.io/site-logoped-final/',
    previewUrl: 'https://natalialapkina.github.io/site-logoped-final/',
    visual: 'iframe',
    status: null
  },
  {
    title: 'Digital-стратегия для эксперта',
    task: 'Нутрициологу нужен понятный план выхода в онлайн и система привлечения клиентов.',
    solution: 'Интерактивная презентация: ЦА, воронка продаж, контент-план, тексты и визуальная стратегия.',
    result: 'Готовая дорожная карта запуска — от первого поста до первых заявок.',
    tech: ['Gamma', 'Контент-стратегия', 'Воронка', 'SMM'],
    url: 'https://elaborate-dog-ed5o2px.gamma.site/',
    visual: 'strategy',
    status: null
  },
  {
    title: 'Интернет-магазин сладостей',
    task: 'Показать концепцию магазина ручной работы с уютным, но современным интерфейсом.',
    solution: 'Витрина с каталогом, акцентами на продукт и лёгким путём к заказу.',
    result: 'Концепт магазина, который передаёт атмосферу бренда и готов к развитию в полноценный магазин.',
    tech: ['Lovable', 'UI/UX', 'E-commerce', 'Адаптив'],
    url: 'https://airy-sweet-shop.lovable.app/',
    visual: 'shop',
    status: null
  },
  {
    title: 'Медленное озеро',
    task: 'Создать релакс-игру для отдыха — без установки и сложных правил.',
    solution: 'Интерактивный холст с анимацией воды, огоньками и атмосферой ночного озера.',
    result: 'Игра в браузере, которая помогает расслабиться за пару минут.',
    tech: ['HTML5 Canvas', 'JavaScript', 'CSS-анимации'],
    url: 'https://natalialapkina.github.io/Medlennoe_ozero/',
    previewUrl: 'https://natalialapkina.github.io/Medlennoe_ozero/',
    visual: 'iframe',
    status: null
  },
  {
    title: 'Планировщик',
    task: 'Нужно мобильное приложение для задач, заметок и личных целей на каждый день.',
    solution: 'Android-приложение с задачами, дневником, копилками, виджетом и напоминаниями.',
    result: 'Рабочий MVP для личного использования — основа для публикации в магазине приложений.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Android Widget'],
    url: null,
    linkText: 'Мобильное приложение для Android',
    visual: 'planner',
    status: null
  },
  {
    title: 'AI-репетитор',
    task: 'Помочь ученикам получать персонализированную поддержку в обучении через AI.',
    solution: 'Умный помощник с адаптацией под уровень ученика и интерактивным форматом занятий.',
    result: 'MVP в разработке — прототип логики и интерфейса диалога.',
    tech: ['AI', 'JavaScript', 'MVP', 'Chat UI'],
    url: null,
    visual: 'aitutor',
    status: 'В разработке'
  },
  {
    title: 'Личный кабинет нутрициолога',
    task: 'Нутрициологу нужен инструмент для ведения клиентов без сложных таблиц и CRM.',
    solution: 'Два связанных интерфейса: спокойный дневник для клиента и кабинет специалиста с карточками и приглашениями.',
    result: 'MVP с раздельными кабинетами — клиент ведёт записи, специалист видит прогресс и оставляет рекомендации.',
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage', 'MVP'],
    url: null,
    visual: 'nutritionist',
    status: 'В разработке'
  }
];

// ─── Data: Why Me ───
const whyMe = [
  { title: 'Объясняю сложное простым языком' },
  { title: 'Быстро создаю MVP' },
  { title: 'Использую современные AI-инструменты' },
  { title: 'Сопровождаю проект до запуска' }
];

// ─── Data: Testimonials (легко редактируются) ───
const testimonials = [
  {
    name: 'Елена Ивановна',
    role: 'Логопед',
    text: 'Наталья создала для меня сайт, который сразу начал приносить записи. Всё понятно, красиво и работает — клиенты отмечают, что сайт вызывает доверие.'
  },
  {
    name: 'Мария С.',
    role: 'Нутрициолог',
    text: 'Обратилась за помощью с digital-презентацией. Результат превзошёл ожидания — современно, профессионально, и главное, отражает мой подход к работе.'
  },
  {
    name: 'Дмитрий В.',
    role: 'Предприниматель',
    text: 'Нужен был Telegram-бот для приёма заявок. Наталья быстро разобралась в задаче, предложила удобное решение и довела до запуска без лишней бюрократии.'
  }
];

// ─── DOM Ready ───
document.addEventListener('DOMContentLoaded', init);

function init() {
  initTheme();
  initHeader();
  initNav();
  initScrollSpy();
  initReveal();
  initParallax();
  initScrollProgress();
  initCursorGlow();
  initMagnetic();
  initTiltCards();
  renderServices();
  renderPortfolio();
  renderWhyMe();
  initTestimonials();
  initStats();
  initForm();

  document.body.classList.add('is-loaded');
}

// ─── Theme ───
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ─── Header scroll ───
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Mobile nav ───
function initNav() {
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Scroll spy navigation ───
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-nav]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
}

// ─── Intersection Observer: reveal ───
function initReveal() {
  const elements = document.querySelectorAll('.reveal:not(.is-visible):not([data-reveal-init])');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => {
    el.setAttribute('data-reveal-init', '');
    observer.observe(el);
  });
}

// ─── Light parallax ───
function initParallax() {
  const orbs = document.querySelectorAll('.gradient-orb');
  const orbit = document.getElementById('heroOrbit');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    orbs.forEach((orb, i) => {
      const speed = [0.15, 0.1, 0.08][i] || 0.1;
      orb.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });

  if (orbit) {
    window.addEventListener('mousemove', (e) => {
      const rect = orbit.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      orbit.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg)`;
    }, { passive: true });
  }
}

// ─── Scroll progress ───
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(scrollTop / docHeight) * 100}%`;
  }, { passive: true });
}

// ─── Cursor glow ───
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(hover: none)').matches) return;

  let raf;
  window.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  }, { passive: true });
}

// ─── Magnetic buttons ───
function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ─── 3D tilt on cards ───
function initTiltCards() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.service-card.tilt-card:not([data-tilt-init]), .why-card.tilt-card:not([data-tilt-init])').forEach(card => {
    card.setAttribute('data-tilt-init', '');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ─── Render: Services ───
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map((s, i) => `
    <article class="service-card tilt-card reveal${i === 0 ? ' service-card--featured' : ''}" style="transition-delay: ${i * 0.08}s">
      <div class="service-card__icon">${s.icon}</div>
      <h3 class="service-card__title">${s.title}</h3>
      <p class="service-card__desc">${s.desc}</p>
    </article>
  `).join('');

  initReveal();
  initTiltCards();
}
// ─── Case study visuals ───
function renderCaseVisual(project) {
  switch (project.visual) {
    case 'iframe': return renderCaseIframe(project);
    case 'strategy': return renderCaseStrategyMockup();
    case 'shop': return renderCaseShopMockup();
    case 'planner': return renderCasePlannerMockup();
    case 'aitutor': return renderCaseAiTutorMockup();
    case 'nutritionist': return renderCaseNutritionistMockup();
    default: return '';
  }
}

function renderCaseIframe(project) {
  const url = project.previewUrl || project.url;
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__frame case-preview__frame--wide">
        <iframe src="${url}" title="Превью: ${project.title}" loading="lazy" tabindex="-1"></iframe>
      </div>
    </div>`;
}

function renderCaseStrategyMockup() {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__frame case-preview__frame--wide pui pui--strategy">
        <div class="pui-strategy">
          <aside class="pui-strategy__sidebar" aria-hidden="true">
            <div class="pui-strategy__thumb is-active"><span>01</span><small>Обложка</small></div>
            <div class="pui-strategy__thumb"><span>02</span><small>Аудитория</small></div>
            <div class="pui-strategy__thumb"><span>03</span><small>Воронка</small></div>
            <div class="pui-strategy__thumb"><span>04</span><small>Контент</small></div>
            <div class="pui-strategy__thumb"><span>05</span><small>Визуалы</small></div>
          </aside>
          <main class="pui-strategy__slide">
            <div class="pui-strategy__slide-bg"></div>
            <div class="pui-strategy__slide-inner">
              <div class="pui-strategy__copy">
                <p class="pui-strategy__tag">Gamma · Digital-стратегия</p>
                <h4 class="pui-strategy__title">Стратегия выхода<br>нутрициолога в онлайн</h4>
                <p class="pui-strategy__lead">Комплексный план развития онлайн-присутствия для эксперта с 5-летним опытом</p>
                <div class="pui-strategy__pills">
                  <span>ЦА</span><span>Воронка VK</span><span>Контент-план</span>
                </div>
              </div>
              <div class="pui-strategy__illus" aria-hidden="true">
                <svg class="pui-strategy__svg" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="160" cy="140" r="110" fill="url(#sg1)" opacity="0.35"/>
                  <ellipse cx="160" cy="200" rx="90" ry="28" fill="#0d9488" opacity="0.12"/>
                  <rect x="72" y="48" width="176" height="112" rx="16" fill="#fff" fill-opacity="0.92" stroke="#0d9488" stroke-opacity="0.2"/>
                  <rect x="88" y="64" width="72" height="8" rx="4" fill="#0d9488" opacity="0.5"/>
                  <rect x="88" y="80" width="120" height="6" rx="3" fill="#134e4a" opacity="0.25"/>
                  <rect x="88" y="92" width="100" height="6" rx="3" fill="#134e4a" opacity="0.15"/>
                  <circle cx="220" cy="100" r="28" fill="url(#sg2)"/>
                  <path d="M120 168 L160 128 L200 148 L240 118" stroke="#f97316" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="120" cy="168" r="6" fill="#0d9488"/>
                  <circle cx="160" cy="128" r="6" fill="#14b8a6"/>
                  <circle cx="200" cy="148" r="6" fill="#f97316"/>
                  <circle cx="240" cy="118" r="6" fill="#fb7185"/>
                  <rect x="88" y="178" width="56" height="36" rx="8" fill="#ecfdf5" stroke="#0d9488" stroke-opacity="0.3"/>
                  <rect x="152" y="178" width="56" height="36" rx="8" fill="#fff7ed" stroke="#f97316" stroke-opacity="0.3"/>
                  <rect x="216" y="178" width="56" height="36" rx="8" fill="#fdf2f8" stroke="#fb7185" stroke-opacity="0.3"/>
                  <defs>
                    <linearGradient id="sg1" x1="50" y1="30" x2="270" y2="250"><stop stop-color="#0d9488"/><stop offset="1" stop-color="#f97316"/></linearGradient>
                    <linearGradient id="sg2" x1="192" y1="72" x2="248" y2="128"><stop stop-color="#5eead4"/><stop offset="1" stop-color="#fdba74"/></linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="pui-strategy__funnel">
              <div class="pui-strategy__funnel-step" style="--w:100%">Привлечение</div>
              <div class="pui-strategy__funnel-step" style="--w:82%">Вовлечение</div>
              <div class="pui-strategy__funnel-step" style="--w:64%">Прогрев</div>
              <div class="pui-strategy__funnel-step" style="--w:46%">Продажа</div>
            </div>
          </main>
        </div>
      </div>
    </div>`;
}

function renderCaseShopMockup() {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__frame case-preview__frame--wide pui pui--shop">
        <div class="pui__body">
          <div class="pui__shop-hero">
            <div>
              <p class="pui__eyebrow">Ручная работа</p>
              <h4 class="pui__h">Сладости с душой</h4>
            </div>
            <div class="pui__btn-fake pui__btn-fake--shop">В корзину</div>
          </div>
          <div class="pui__shop-grid">
            <div class="pui__product"><div class="pui__product-img"></div><b>Зефир</b><small>450 ₽</small></div>
            <div class="pui__product"><div class="pui__product-img pui__product-img--2"></div><b>Маршмеллоу</b><small>380 ₽</small></div>
            <div class="pui__product"><div class="pui__product-img pui__product-img--3"></div><b>Набор</b><small>890 ₽</small></div>
            <div class="pui__product"><div class="pui__product-img pui__product-img--4"></div><b>Подарок</b><small>1200 ₽</small></div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderCasePlannerMockup() {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__duo case-preview__duo--phone">
        <div class="case-device">
          <span class="case-device__label">Задачи</span>
          <div class="case-preview__frame case-preview__frame--phone pui pui--planner">
            <div class="pui__phone-notch"></div>
            <div class="pui__body">
              <h4 class="pui__h">Сегодня</h4>
              <div class="pui__task pui__task--done"><span></span> Записать идеи</div>
              <div class="pui__task"><span></span> Созвон с клиентом</div>
              <div class="pui__task"><span></span> Обновить портфолио</div>
              <div class="pui__nav"><i></i><i></i><i class="is-active"></i><i></i></div>
            </div>
          </div>
        </div>
        <div class="case-device">
          <span class="case-device__label">Копилки</span>
          <div class="case-preview__frame case-preview__frame--phone pui pui--planner">
            <div class="pui__phone-notch"></div>
            <div class="pui__body">
              <h4 class="pui__h">Цели</h4>
              <div class="pui__piggy"><div class="pui__piggy-fill" style="width:68%"></div></div>
              <p class="pui__caption">Отпуск · 68%</p>
              <div class="pui__piggy"><div class="pui__piggy-fill" style="width:34%"></div></div>
              <p class="pui__caption">Курсы · 34%</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderCaseAiTutorMockup() {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__frame pui pui--ai">
        <div class="pui__body">
          <div class="pui__chat">
            <div class="pui__bubble pui__bubble--bot">Привет! Что будем повторять сегодня?</div>
            <div class="pui__bubble pui__bubble--user">Правила согласования в русском языке</div>
            <div class="pui__bubble pui__bubble--bot">Отлично. Начнём с простого примера…</div>
          </div>
          <div class="pui__input"><span>Сообщение…</span><button type="button">→</button></div>
        </div>
      </div>
    </div>`;
}

function renderCaseNutritionistMockup() {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-preview__duo">
        <div class="case-device">
          <span class="case-device__label">Кабинет клиента</span>
          <div class="case-preview__frame case-preview__frame--tall pui pui--nutri pui--client">
            <div class="pui__body">
              <p class="pui__eyebrow">Спокойное наблюдение</p>
              <h4 class="pui__h">Ваш день</h4>
              <div class="pui__card pui__card--nutri">
                <b>Как вы себя чувствуете?</b>
                <div class="pui__chips">
                  <span class="is-on">Спокойно</span><span>Усталость</span><span>Энергия</span>
                </div>
              </div>
              <div class="pui__card pui__card--nutri pui__card--muted">
                <small>Запись за сегодня</small>
                <p>Завтрак · обед · вода</p>
              </div>
              <div class="pui__tabbar"><span class="is-on">Сегодня</span><span>Записи</span><span>Чат</span></div>
            </div>
          </div>
        </div>
        <div class="case-device">
          <span class="case-device__label">Кабинет специалиста</span>
          <div class="case-preview__frame case-preview__frame--tall pui pui--nutri pui--pro">
            <div class="pui__body">
              <p class="pui__eyebrow">Вход специалиста</p>
              <h4 class="pui__h">Кабинет нутрициолога</h4>
              <div class="pui__client-row"><span>Анна К.</span><small>запись сегодня</small></div>
              <div class="pui__client-row"><span>Мария С.</span><small>новый клиент</small></div>
              <div class="pui__card pui__card--nutri">
                <b>Приглашение клиенту</b>
                <div class="pui__field"></div>
                <div class="pui__btn-fake">Создать приглашение</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const arrow = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>';

  grid.innerHTML = portfolio.map((p, i) => {
    const statusBadge = p.status
      ? `<span class="case-study__status">${p.status}</span>`
      : '';

    const cta = p.url
      ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary case-study__cta">Открыть проект ${arrow}</a>`
      : `<span class="case-study__cta case-study__cta--muted">${p.linkText || 'Скоро будет доступен'}</span>`;

    const techTags = p.tech.map(t => `<li>${t}</li>`).join('');

    return `
      <article class="case-study reveal" style="transition-delay: ${i * 0.08}s">
        <div class="case-study__visual-wrap">
          ${renderCaseVisual(p)}
          ${statusBadge}
        </div>
        <div class="case-study__content">
          <h3 class="case-study__title">${p.title}</h3>
          <dl class="case-study__meta">
            <div class="case-study__meta-item">
              <dt>Задача клиента</dt>
              <dd>${p.task}</dd>
            </div>
            <div class="case-study__meta-item">
              <dt>Решение</dt>
              <dd>${p.solution}</dd>
            </div>
            <div class="case-study__meta-item">
              <dt>Результат</dt>
              <dd>${p.result}</dd>
            </div>
          </dl>
          <ul class="case-study__tech" aria-label="Технологии">${techTags}</ul>
          ${cta}
        </div>
      </article>
    `;
  }).join('');

  initReveal();
}

// ─── Render: Why Me ───
function renderWhyMe() {
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = whyMe.map((w, i) => `
    <article class="why-card tilt-card reveal" style="transition-delay: ${i * 0.08}s">
      <span class="why-card__number">0${i + 1}</span>
      <h3 class="why-card__title">${w.title}</h3>
    </article>
  `).join('');

  initReveal();
  initTiltCards();
}

// ─── Testimonials Slider ───
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialsDots');
  let current = 0;
  let autoplayTimer;

  track.innerHTML = testimonials.map((t, i) => {
    const initials = t.name.split(' ').map(w => w[0]).join('');
    return `
      <article class="testimonial-card ${i === 0 ? 'is-active' : ''}" data-index="${i}">
        <p class="testimonial-card__quote">${t.text}</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${initials}</div>
          <div>
            <div class="testimonial-card__name">${t.name}</div>
            <div class="testimonial-card__role">${t.role}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  dotsContainer.innerHTML = testimonials.map((_, i) =>
    `<button class="testimonials__dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="Отзыв ${i + 1}"></button>`
  ).join('');

  function goTo(index) {
    current = (index + testimonials.length) % testimonials.length;
    track.querySelectorAll('.testimonial-card').forEach((card, i) => {
      card.classList.toggle('is-active', i === current);
    });
    dotsContainer.querySelectorAll('.testimonials__dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
    });
  }

  document.getElementById('testimonialPrev').addEventListener('click', () => {
    goTo(current - 1);
    resetAutoplay();
  });

  document.getElementById('testimonialNext').addEventListener('click', () => {
    goTo(current + 1);
    resetAutoplay();
  });

  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.testimonials__dot');
    if (dot) {
      goTo(parseInt(dot.dataset.index, 10));
      resetAutoplay();
    }
  });

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goTo(current + 1), 6000);
  }

  resetAutoplay();
}

// ─── Stats counter ───
function initStats() {
  const numbers = document.querySelectorAll('.stats__number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        numbers.forEach(num => {
          const target = parseInt(num.dataset.target, 10);
          animateCounter(num, target);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

function animateCounter(el, target) {
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ─── Contact Form ───
function initForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form-status';

    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const message = form.message.value.trim();

    if (!name || !contact || !message) {
      status.textContent = 'Пожалуйста, заполните все поля.';
      status.classList.add('is-error');
      return;
    }

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    try {
      await submitForm({ name, contact, message });
      status.textContent = 'Заявка отправлена! Я свяжусь с вами в ближайшее время.';
      status.classList.add('is-success');
      form.reset();
    } catch (err) {
      status.textContent = 'Не удалось отправить. Напишите мне напрямую в Telegram.';
      status.classList.add('is-error');
    } finally {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
    }
  });
}

async function submitForm(data) {
  const { method, endpoint } = FORM_CONFIG;

  switch (method) {
    case 'formspree':
      return submitFormspree(endpoint, data);
    case 'gas':
      return submitGoogleAppsScript(endpoint, data);
    case 'telegram':
      return submitTelegram(endpoint, data);
    case 'mailto':
    default:
      return submitMailto(data);
  }
}

async function submitFormspree(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: data.name,
      contact: data.contact,
      message: data.message
    })
  });
  if (!res.ok) throw new Error('Formspree error');
}

async function submitGoogleAppsScript(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res;
}

async function submitTelegram(endpoint, data) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `📩 Новая заявка\n\n👤 ${data.name}\n📱 ${data.contact}\n\n💬 ${data.message}`
    })
  });
  if (!res.ok) throw new Error('Telegram error');
}

function submitMailto(data) {
  const subject = encodeURIComponent(`Заявка от ${data.name}`);
  const body = encodeURIComponent(
    `Имя: ${data.name}\nКонтакт: ${data.contact}\n\nОписание проекта:\n${data.message}`
  );
  window.location.href = `mailto:${FORM_CONFIG.endpoint}?subject=${subject}&body=${body}`;
  return Promise.resolve();
}
