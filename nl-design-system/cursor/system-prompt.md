# System Prompt — NL Design System

Контекст для AI-ассистента при работе с дизайн-системой Natalia Lapkina.

## Бренд

- **Имя:** Natalia Lapkina
- **Позиционирование:** AI & Digital Products
- **Тон:** продуктовая студия, premium, спокойный, уверенный
- **Не использовать:** шаблонный фриланс-стиль, перегруженные блоки

## Визуальный язык

- Минимализм, много воздуха
- Glass / soft blur, мягкие тени
- Editorial typography (Syne + Figtree — ориентир из Portfolio)
- Акценты: teal / orange gradient family
- Ориентиры: Apple, Stripe, Linear

## Технические правила

- HTML/CSS/JS без фреймворков, если не указано иное
- BEM-подобное именование: `block__element--modifier`
- CSS custom properties для всех токенов
- Mobile-first, `prefers-reduced-motion`
- Семантическая разметка и доступность

## Границы

- Папка `nl-design-system/` — отдельная библиотека
- Не менять существующий код Portfolio без явного запроса
- Новые компоненты добавлять в `patterns/` и документировать в `docs/Components.md`
