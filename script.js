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

// ─── Data: Portfolio ───
const portfolio = [
  {
    title: 'Логопед',
    desc: 'Современный сайт специалиста с услугами, дипломами и онлайн-записью.',
    url: 'https://natalialapkina.github.io/site-logoped-final/',
    preview: 'https://natalialapkina.github.io/site-logoped-final/',
    emoji: '🗣️',
    status: null
  },
  {
    title: 'Digital-стратегия для эксперта',
    desc: 'Комплексный план онлайн-продвижения: аудитория, воронка, контент и готовые материалы для запуска.',
    url: 'https://elaborate-dog-ed5o2px.gamma.site/',
    preview: null,
    emoji: '✨',
    status: null
  },
  {
    title: 'Интернет-магазин сладостей',
    desc: 'Концепция магазина ручной работы с современным интерфейсом.',
    url: 'https://airy-sweet-shop.lovable.app/',
    preview: null,
    emoji: '🍰',
    status: null
  },
  {
    title: 'Медленное озеро',
    desc: 'Релакс-игра с мягкой анимацией ночного озера и огоньками — для спокойствия и отдыха прямо в браузере.',
    url: 'https://natalialapkina.github.io/Medlennoe_ozero/',
    preview: null,
    emoji: '🌙',
    status: null
  },
  {
    title: 'Планировщик',
    desc: 'Мобильное приложение для Android: задачи, дневник, копилки, виджет на главный экран и напоминания.',
    url: null,
    linkText: 'Мобильное приложение для Android',
    preview: null,
    emoji: '📱',
    status: null
  },
  {
    title: 'AI-репетитор',
    desc: 'Умный помощник для обучения с персонализированным подходом к каждому ученику.',
    url: null,
    preview: null,
    emoji: '🎓',
    status: 'В разработке'
  },
  {
    title: 'Приложение для нутрициолога',
    desc: 'Digital-инструмент для ведения клиентов, планов питания и автоматизации консультаций.',
    url: null,
    preview: null,
    emoji: '🥗',
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
    name: 'Анна К.',
    role: 'Логопед-дефектолог',
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

  document.querySelectorAll('.tilt-card:not([data-tilt-init])').forEach(card => {
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
    <article class="service-card tilt-card reveal" style="transition-delay: ${i * 0.08}s">
      <div class="service-card__icon">${s.icon}</div>
      <h3 class="service-card__title">${s.title}</h3>
      <p class="service-card__desc">${s.desc}</p>
    </article>
  `).join('');

  initReveal();
  initTiltCards();
}
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

  grid.innerHTML = portfolio.map((p, i) => {
    const bentoClass = i === 0 ? 'portfolio-card--featured' : i === 6 ? 'portfolio-card--wide' : i % 2 === 1 ? 'portfolio-card--compact' : '';
    const previewContent = p.preview
      ? `<img src="${p.preview}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'portfolio-card__preview-inner\\'>${p.emoji}</div>'">`
      : `<div class="portfolio-card__preview-inner">${p.emoji}</div>`;

    const statusBadge = p.status
      ? `<span class="portfolio-card__status">${p.status}</span>`
      : '';

    const link = p.url
      ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link">Смотреть проект ${arrow}</a>`
      : `<span class="portfolio-card__link" style="opacity:${p.linkText ? '0.85' : '0.5'};cursor:default">${p.linkText || 'Скоро будет доступен'}</span>`;

    return `
      <article class="portfolio-card tilt-card reveal ${bentoClass}" style="transition-delay: ${i * 0.1}s">
        <div class="portfolio-card__preview">
          ${previewContent}
          <div class="portfolio-card__overlay"></div>
          ${statusBadge}
        </div>
        <div class="portfolio-card__body">
          <h3 class="portfolio-card__title">${p.title}</h3>
          <p class="portfolio-card__desc">${p.desc}</p>
          ${link}
        </div>
      </article>
    `;
  }).join('');

  initReveal();
  initTiltCards();
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
