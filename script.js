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

// ─── Config: Hero portrait ───
// Укажите путь к фото или AI-портрету, чтобы заменить инициалы «НЛ»
const HERO_CONFIG = {
  portraitSrc: null,
  portraitAlt: 'Наталья Лапкина'
};

// ─── Config: Contacts ───
const CONTACTS = [
  {
    label: 'Telegram',
    value: '@Nat1777',
    url: 'https://t.me/Nat1777',
    icon: '✈️'
  },
  {
    label: 'WhatsApp',
    value: 'Написать в WhatsApp',
    url: `https://wa.me/?text=${encodeURIComponent('Здравствуйте! Хочу обсудить проект.')}`,
    icon: '💬'
  },
  {
    label: 'Email',
    value: 'lapkinanatala819@gmail.com',
    url: 'mailto:lapkinanatala819@gmail.com',
    icon: '✉️'
  }
];

// ─── Data: Services ───
const services = [
  {
    icon: '🤖',
    title: 'AI-ассистенты и чат-боты',
    desc: 'Умные помощники для поддержки клиентов, обработки заявок и автоматизации диалогов 24/7.'
  },
  {
    icon: '🚀',
    title: 'Автоматизация бизнес-процессов',
    desc: 'Связка инструментов, которая убирает ручную работу и ускоряет операционные процессы.'
  },
  {
    icon: '🌐',
    title: 'Сайты и веб-приложения',
    desc: 'Современные цифровые витрины и веб-продукты, заточенные под привлечение и конверсию.'
  },
  {
    icon: '📈',
    title: 'CRM и системы сопровождения клиентов',
    desc: 'Инструменты для ведения базы, контроля коммуникаций и аналитики взаимодействий.'
  },
  {
    icon: '⚡',
    title: 'AI-инструменты для экспертов и малого бизнеса',
    desc: 'Практичные решения на базе нейросетей — от контента до MVP без лишней сложности.'
  }
];

// ─── Data: Portfolio ───
const portfolio = [
  {
    title: 'Автоматизация поиска клиентов',
    desc: 'Система автоматического поиска потенциальных клиентов, email-рассылок и контроля коммуникаций.',
    features: [
      'CRM для клиентской базы',
      'автоматическая email-рассылка',
      'шаблоны сообщений',
      'система статусов',
      'контроль последующих касаний',
      'аналитика взаимодействий'
    ],
    tech: ['Google Sheets', 'Gmail', 'Google Apps Script', 'AI'],
    status: 'Реализованный проект',
    statusType: 'done',
    visual: 'crm',
    url: null
  },
  {
    title: 'AI-репетитор по русскому языку',
    desc: 'Интерактивная образовательная платформа с AI-помощником и голосовым сопровождением.',
    tech: ['JavaScript', 'AI', 'Web Speech API'],
    status: 'Рабочий MVP',
    statusType: 'mvp',
    visual: 'aitutor',
    url: null
  },
  {
    title: 'Платформа для нутрициолога',
    desc: 'Личный кабинет специалиста и клиента для сопровождения и контроля результатов.',
    tech: ['Web App', 'CRM', 'AI'],
    status: 'В разработке',
    statusType: 'wip',
    visual: 'nutritionist',
    url: null
  },
  {
    title: 'Сайт логопеда',
    desc: 'Современный сайт специалиста с SEO-оптимизацией и системой заявок.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    status: 'Реализованный проект',
    statusType: 'done',
    visual: 'logoped',
    url: 'https://natalialapkina.github.io/site-logoped-final/'
  },
  {
    title: 'Интернет-магазин сладостей',
    desc: 'Концепция магазина ручной работы с уютным, но современным интерфейсом, каталогом и путём к заказу.',
    tech: ['Lovable', 'UI/UX', 'E-commerce', 'Адаптив'],
    status: 'Реализованный проект',
    statusType: 'done',
    visual: 'shop',
    url: 'https://airy-sweet-shop.lovable.app/'
  },
  {
    title: 'AI-боты и автоматизация',
    desc: 'Разработка сценариев, архитектуры и логики AI-ассистентов для бизнеса.',
    tech: ['GPT', 'Telegram', 'AI Automation'],
    status: 'Реализованные проекты',
    statusType: 'done',
    visual: 'bots',
    url: null
  }
];

// ─── Data: Timeline (Мой путь) ───
const timelineSteps = [
  {
    label: 'База',
    title: 'Медицина',
    desc: 'Внимание к деталям и забота о людях'
  },
  {
    label: 'Рост',
    title: 'Нейросети и SMM',
    desc: 'Погружение в digital и AI-инструменты'
  },
  {
    label: 'Старт',
    title: 'Первые цифровые проекты',
    desc: 'Создание первых сайтов, презентаций и AI-проектов.'
  },
  {
    label: 'Сейчас',
    title: 'AI-разработка',
    desc: 'Создание продуктов с помощью нейросетей'
  },
  {
    label: 'Фокус',
    title: 'Digital-продукты',
    desc: 'Сайты, боты и MVP для экспертов',
    active: true
  }
];

// ─── Data: Why Me ───
const whyMe = [
  { title: 'Понимаю бизнес-задачу, а не только код' },
  { title: 'Использую современные AI-инструменты' },
  { title: 'Создаю понятные и удобные интерфейсы' },
  { title: 'Помогаю автоматизировать рутину' },
  { title: 'Довожу проекты до рабочего результата' }
];

// ─── Data: Process ───
const processSteps = [
  'Обсуждаем задачу',
  'Формируем решение',
  'Создаю прототип',
  'Вносим правки',
  'Запускаем проект'
];

// ─── Data: Testimonials ───
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
  initHeroPortrait();
  renderTimeline();
  renderServices();
  renderPortfolio();
  renderWhyMe();
  renderProcess();
  renderContacts();
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

// ─── Hero portrait ───
function initHeroPortrait() {
  const { portraitSrc, portraitAlt } = HERO_CONFIG;
  if (!portraitSrc) return;

  const core = document.getElementById('heroCore');
  const img = document.getElementById('heroPortrait');
  const initials = document.getElementById('heroInitials');
  if (!core || !img) return;

  img.src = portraitSrc;
  img.alt = portraitAlt;
  img.removeAttribute('hidden');
  core.classList.add('has-portrait');
  if (initials) initials.setAttribute('aria-hidden', 'true');
}

// ─── Render: Timeline ───
function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = timelineSteps.map(step => `
    <div class="timeline__item${step.active ? ' timeline__item--active' : ''}">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <span class="timeline__year">${step.label}</span>
        <h3 class="timeline__title">${step.title}</h3>
        <p class="timeline__desc">${step.desc}</p>
      </div>
    </div>
  `).join('');
}

// ─── Render: Services ───
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map((s, i) => `
    <article class="service-card tilt-card reveal${i === 0 ? ' service-card--featured' : ''}" style="transition-delay: ${i * 0.08}s">
      <div class="service-card__icon service-card__icon--emoji" aria-hidden="true">${s.icon}</div>
      <h3 class="service-card__title">${s.title}</h3>
      <p class="service-card__desc">${s.desc}</p>
    </article>
  `).join('');

  initReveal();
  initTiltCards();
}

// ─── Unified case cover wrapper ───
function caseCoverInner(content) {
  return `
    <div class="case-preview case-preview--zoom">
      <div class="case-cover">
        <div class="case-cover__frame">${content}</div>
      </div>
    </div>`;
}

// ─── Case study visuals ───
function renderCaseVisual(project) {
  switch (project.visual) {
    case 'crm': return renderCaseCrmMockup();
    case 'aitutor': return renderCaseAiTutorMockup();
    case 'nutritionist': return renderCaseNutritionistMockup();
    case 'logoped': return renderCaseLogopedMockup();
    case 'shop': return renderCaseShopMockup();
    case 'bots': return renderCaseBotsMockup();
    default: return '';
  }
}

function renderCaseCrmMockup() {
  return caseCoverInner(`
    <div class="pui pui--crm">
      <div class="pui-crm">
        <aside class="pui-crm__sidebar" aria-hidden="true">
          <span class="pui-crm__logo">CRM</span>
          <nav class="pui-crm__nav">
            <span class="is-active">Клиенты</span>
            <span>Рассылки</span>
            <span>Шаблоны</span>
            <span>Аналитика</span>
          </nav>
        </aside>
        <main class="pui-crm__main">
          <header class="pui-crm__header">
            <div>
              <h4>База клиентов</h4>
              <p>Автоматизация поиска и касаний</p>
            </div>
            <span class="pui-crm__pill">AI · Gmail · Sheets</span>
          </header>
          <div class="pui-crm__stats">
            <div><b>128</b><small>лидов</small></div>
            <div><b>34</b><small>в работе</small></div>
            <div><b>89%</b><small>доставка</small></div>
          </div>
          <div class="pui-crm__table" aria-hidden="true">
            <div class="pui-crm__row pui-crm__row--head"><span>Клиент</span><span>Статус</span><span>Касание</span></div>
            <div class="pui-crm__row"><span>ООО «Старт»</span><span class="status status--hot">Горячий</span><span>Сегодня</span></div>
            <div class="pui-crm__row"><span>ИП Козлова</span><span class="status status--warm">Прогрев</span><span>Завтра</span></div>
            <div class="pui-crm__row"><span>Агентство X</span><span class="status status--new">Новый</span><span>Через 3 дня</span></div>
            <div class="pui-crm__row"><span>Студия Y</span><span class="status status--done">Ответил</span><span>Вчера</span></div>
          </div>
          <div class="pui-crm__flow" aria-hidden="true">
            <span>Поиск</span><i>→</i><span>Email</span><i>→</i><span>Статус</span><i>→</i><span>Аналитика</span>
          </div>
        </main>
      </div>
    </div>`);
}

function renderCaseLogopedMockup() {
  return caseCoverInner(`
    <div class="pui pui--logoped">
      <div class="pui-logoped">
        <header class="pui-logoped__nav">
          <span class="pui-logoped__brand">Логопед</span>
          <nav aria-hidden="true"><span>Услуги</span><span>О специалисте</span><span>Отзывы</span></nav>
          <span class="pui-logoped__cta">Записаться</span>
        </header>
        <div class="pui-logoped__hero">
          <div>
            <span class="pui-logoped__tag">Дефектолог · Логопед</span>
            <h4>Помогаю детям<br>говорить уверенно</h4>
            <p>Индивидуальные занятия, онлайн-запись и спокойная атмосфера для родителей.</p>
          </div>
          <div class="pui-logoped__card" aria-hidden="true">
            <b>Ближайшая запись</b>
            <span>Вт, 14:00</span>
            <small>SEO · заявки онлайн</small>
          </div>
        </div>
        <div class="pui-logoped__features">
          <span>✓ Дипломы</span><span>✓ Опыт 10+ лет</span><span>✓ Онлайн-запись</span>
        </div>
      </div>
    </div>`);
}

function renderCaseBotsMockup() {
  return caseCoverInner(`
    <div class="pui pui--bots">
      <div class="pui-bots">
        <div class="pui-bots__chat">
          <header aria-hidden="true"><span>Telegram Bot</span><small>онлайн</small></header>
          <div class="pui-bots__messages">
            <div class="pui-bots__msg pui-bots__msg--user">Хочу записаться на консультацию</div>
            <div class="pui-bots__msg pui-bots__msg--bot">Отлично! Уточните удобное время — я подберу слот и отправлю подтверждение.</div>
            <div class="pui-bots__msg pui-bots__msg--user">Завтра после 15:00</div>
          </div>
          <div class="pui-bots__input" aria-hidden="true"><span>Сообщение…</span></div>
        </div>
        <div class="pui-bots__engine" aria-hidden="true">
          <div class="pui-bots__node pui-bots__node--tg">Telegram</div>
          <div class="pui-bots__line"></div>
          <div class="pui-bots__node pui-bots__node--ai">GPT · AI</div>
          <div class="pui-bots__line"></div>
          <div class="pui-bots__node pui-bots__node--auto">Automation</div>
          <ul class="pui-bots__list">
            <li>Сценарии диалогов</li>
            <li>Обработка заявок</li>
            <li>Интеграции</li>
          </ul>
        </div>
      </div>
    </div>`);
}

function renderCaseShopMockup() {
  const marshmallowSvg = (variant) => {
    const fills = {
      raspberry: ['#fce7f3', '#f9a8d4', '#be185d'],
      chocolate: ['#fef3c7', '#92400e', '#451a03'],
      lavender: ['#ede9fe', '#a78bfa', '#5b21b6']
    };
    const [a, b, c] = fills[variant];
    return `<svg class="pui-shop__sweet-svg" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="58" rx="28" ry="8" fill="${c}" opacity="0.12"/>
      <rect x="22" y="28" width="36" height="28" rx="10" fill="${a}" stroke="${b}" stroke-width="1.5"/>
      <rect x="26" y="20" width="28" height="14" rx="8" fill="#fff" stroke="${b}" stroke-width="1.2" opacity="0.95"/>
      <circle cx="32" cy="38" r="3" fill="${b}" opacity="0.35"/>
      <circle cx="48" cy="42" r="2.5" fill="${b}" opacity="0.25"/>
    </svg>`;
  };

  return caseCoverInner(`
    <div class="pui pui--shop">
      <div class="pui-shop">
        <header class="pui-shop__nav">
          <span class="pui-shop__logo">облакозефир</span>
          <nav class="pui-shop__links" aria-hidden="true">
            <span>Каталог</span><span>Доставка</span><span>О нас</span>
          </nav>
          <span class="pui-shop__cart">Корзина <em>2</em></span>
        </header>
        <div class="pui-shop__hero">
          <div class="pui-shop__hero-copy">
            <span class="pui-shop__badge">Партия дня</span>
            <h4 class="pui-shop__title">Зефир, который<br><em>тает медленно</em></h4>
            <p class="pui-shop__lead">Взбиваем вручную из фруктового пюре — без красителей и лишнего сахара.</p>
            <div class="pui-shop__cta-row">
              <span class="pui-shop__btn">В каталог</span>
              <span class="pui-shop__stats"><b>6</b> сортов · <b>100%</b> натурально</span>
            </div>
          </div>
          <div class="pui-shop__hero-art" aria-hidden="true">
            <svg viewBox="0 0 200 180" fill="none" class="pui-shop__hero-svg">
              <circle cx="100" cy="90" r="70" fill="url(#shopGlow)" opacity="0.5"/>
              <rect x="55" y="55" width="90" height="70" rx="22" fill="#fff5f5" stroke="#f9a8d4" stroke-width="2"/>
              <rect x="65" y="38" width="70" height="32" rx="16" fill="#fff" stroke="#fbcfe8" stroke-width="1.5"/>
              <ellipse cx="100" cy="130" rx="50" ry="12" fill="#be185d" opacity="0.1"/>
              <circle cx="78" cy="78" r="6" fill="#f472b6" opacity="0.4"/>
              <circle cx="122" cy="88" r="5" fill="#fb7185" opacity="0.35"/>
              <defs>
                <radialGradient id="shopGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 90) rotate(90) scale(70)">
                  <stop stop-color="#fce7f3"/><stop offset="1" stop-color="#fce7f3" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="pui-shop__section-head">
          <h5>Любимцы публики</h5>
          <span>весь каталог →</span>
        </div>
        <div class="pui-shop__grid">
          <article class="pui-shop__card">
            <div class="pui-shop__card-img pui-shop__card-img--pink">${marshmallowSvg('raspberry')}</div>
            <b>Малиновое облако</b>
            <small>620 ₽ · 200 г</small>
          </article>
          <article class="pui-shop__card">
            <div class="pui-shop__card-img pui-shop__card-img--choco">${marshmallowSvg('chocolate')}</div>
            <b>В тёмном шоколаде</b>
            <small>780 ₽ · 240 г</small>
          </article>
          <article class="pui-shop__card">
            <div class="pui-shop__card-img pui-shop__card-img--lav">${marshmallowSvg('lavender')}</div>
            <b>Лаванда и мёд</b>
            <small>690 ₽ · 200 г</small>
          </article>
        </div>
      </div>
    </div>`);
}

function renderProcess() {
  const container = document.getElementById('processLinear');
  if (!container) return;

  const stepsHtml = processSteps.map((label, i) => `
    <div class="process-linear__step${i === processSteps.length - 1 ? ' process-linear__step--last' : ''}">
      <div class="process-linear__node">
        <span class="process-linear__num">${i + 1}</span>
      </div>
      <p class="process-linear__label">${label}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="process-linear__inner">
      <div class="process-linear__line" aria-hidden="true"></div>
      <div class="process-linear__steps">${stepsHtml}</div>
    </div>
  `;
}

function renderCaseAiTutorMockup() {
  return caseCoverInner(`
    <div class="pui pui--ai">
      <div class="pui-ai">
        <header class="pui-ai__header">
          <div>
            <span class="pui-ai__tag">AI-репетитор · Русский язык</span>
            <h4>Интерактивное занятие</h4>
          </div>
          <button type="button" class="pui-ai__voice" aria-hidden="true">🎙️ Голос</button>
        </header>
        <div class="pui-ai__lesson">
          <div class="pui-ai__bubble pui-ai__bubble--bot">Привет! Сегодня разберём правила согласования. Слушайте пример и повторите вслух.</div>
          <div class="pui-ai__bubble pui-ai__bubble--user">Красивая цветная картина</div>
          <div class="pui-ai__bubble pui-ai__bubble--bot">Верно! Прилагательное согласуется с существительным в роде, числе и падеже.</div>
        </div>
        <div class="pui-ai__toolbar" aria-hidden="true">
          <span>Web Speech API</span><span>AI-обратная связь</span><span>Адаптивный уровень</span>
        </div>
      </div>
    </div>`);
}

function renderCaseNutritionistMockup() {
  return caseCoverInner(`
    <div class="pui pui--nutri-cover">
      <div class="pui-nutri-cover">
        <div class="pui-nutri-cover__panel pui-nutri-cover__panel--client">
          <span class="pui-nutri-cover__label">Клиент</span>
          <h4>Дневник питания</h4>
          <div class="pui-nutri-cover__card"><b>Самочувствие</b><span>Спокойно · вода 1.5 л</span></div>
          <div class="pui-nutri-cover__card"><b>Записи за день</b><span>Завтрак · обед · перекус</span></div>
        </div>
        <div class="pui-nutri-cover__panel pui-nutri-cover__panel--pro">
          <span class="pui-nutri-cover__label">Специалист</span>
          <h4>Кабинет нутрициолога</h4>
          <div class="pui-nutri-cover__row"><span>Анна К.</span><small>активна</small></div>
          <div class="pui-nutri-cover__row"><span>Мария С.</span><small>новый клиент</small></div>
          <div class="pui-nutri-cover__card"><b>CRM · сопровождение</b><span>прогресс и рекомендации</span></div>
        </div>
      </div>
    </div>`);
}

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const arrow = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>';

  grid.innerHTML = portfolio.map((p, i) => {
    const statusType = p.statusType || 'done';
    const statusBadge = p.status
      ? `<span class="case-study__status case-study__status--${statusType}">${p.status}</span>`
      : '';

    const cta = p.url
      ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost case-study__cta">Открыть проект ${arrow}</a>`
      : '';

    const techTags = p.tech.map(t => `<li>${t}</li>`).join('');

    const featuresHtml = p.features ? `
      <div class="case-study__features">
        <h4 class="case-study__features-title">Что реализовано</h4>
        <ul class="case-study__features-list">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>` : '';

    return `
      <article class="case-study case-study--card reveal" style="transition-delay: ${i * 0.08}s">
        <div class="case-study__visual-wrap">
          ${renderCaseVisual(p)}
          ${statusBadge}
        </div>
        <div class="case-study__content">
          <h3 class="case-study__title">${p.title}</h3>
          <p class="case-study__desc">${p.desc}</p>
          ${featuresHtml}
          <ul class="case-study__tech" aria-label="Стек">${techTags}</ul>
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
    <article class="why-card why-card--pro tilt-card reveal" style="transition-delay: ${i * 0.08}s">
      <span class="why-card__number">0${i + 1}</span>
      <h3 class="why-card__title">${w.title}</h3>
    </article>
  `).join('');

  initReveal();
  initTiltCards();
}

function renderContacts() {
  const container = document.getElementById('contactChannels');
  if (!container) return;

  container.innerHTML = CONTACTS.map(c => `
    <a href="${c.url}" class="contact-channel" target="_blank" rel="noopener noreferrer">
      <span class="contact-channel__icon" aria-hidden="true">${c.icon}</span>
      <span class="contact-channel__body">
        <span class="contact-channel__label">${c.label}</span>
        <span class="contact-channel__value">${c.value}</span>
      </span>
      <svg class="contact-channel__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>
    </a>
  `).join('');
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
