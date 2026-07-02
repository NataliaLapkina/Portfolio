# Release Notes — NL Design System v1.0 Beta

**Дата релиза:** 2026-06-26  
**Кодовое имя:** Milestone 1  
**Автор:** Natalia Lapkina — AI & Digital Products  
**Статус:** Beta — готово к внутреннему использованию и пилотной интеграции

---

## Обзор

NL Design System v1.0 Beta — первая рабочая версия библиотеки: токены, foundation-слои, три UI-компонента, playground-паттерны и документация. Библиотека спроектирована как **независимый слой** с namespace `--nl-*` и может подключаться параллельно с проектными стилями без коллизий `:root`.

---

## Что входит в v1.0 Beta

### Foundation (Stable)

| Модуль | Файл | Версия |
|--------|------|--------|
| Design Tokens | `css/variables.css` | v0.9.1 |
| Reset | `css/reset.css` | v0.3.0 |
| Typography | `css/typography.css` | v0.4.0 |
| Layout | `css/layout.css` | v0.5.0 |

### Components (Stable)

| ID | Компонент | BEM | Спецификация | Playground |
|----|-----------|-----|--------------|------------|
| IC-001 | Button | `.nl-btn` | `docs/components/Button.md` | `patterns/buttons/button.html` |
| IC-002 | Card | `.nl-card` | `docs/components/Card.md` | `patterns/cards/card.html` |
| IC-003 | Badge | `.nl-badge` | `docs/components/Badge.md` | `patterns/badges/badge.html` |

### Token Architecture

- **Foundation:** `--neutral-*`, `--brand-*`, `--nl-space-*`, `--nl-font-*`, `--nl-radius-*`, `--nl-shadow-*`, motion, layout, z-index
- **Semantic:** `--nl-color-*`
- **Component:** `--nl-btn-*`, `--nl-card-*`, `--nl-badge-*`

### Documentation & Tooling

- Документация: `docs/index.html`, `docs/components/`, `docs/foundations/`
- Component Gallery: `playground/index.html`
- Cursor rules: `cursor/system-prompt.md`, `coding-rules.md`, `component-template.md`

---

## Ключевые изменения с v0.1.0

1. **Полная реализация foundation** — от заготовок до production-ready CSS.
2. **Namespace refactor (v0.9.0)** — все публичные токены с префиксом `--nl-`.
3. **Три компонента** — Button, Card, Badge с component tokens и playground.
4. **Спецификации** — архитектурные документы для IC-001–IC-003.
5. **Пилотная интеграция Portfolio** — dual-class migration (Button, Featured Cards) без удаления legacy-классов.

---

## Известные ограничения (Beta)

- `css/animations.css` и `css/responsive.css` — placeholders.
- `js/navigation.js`, `js/animations.js` — placeholders.
- Нет dark theme tokens.
- Нет npm/package distribution — подключение через CSS-файлы.
- Portfolio migration не завершена — legacy `.btn` / `.case-card` сохранены.
- Компоненты IC-004+ (Input, Form, Hero) — в roadmap.

---

## Требования

- Современные браузеры с поддержкой CSS Custom Properties
- Шрифты: **Syne** (headings), **Figtree** (body) — Google Fonts
- Порядок подключения CSS — см. [QUICK_START.md](./QUICK_START.md)

---

## Следующие шаги (post-Beta)

- IC-004 Input, IC-005 Form
- Завершение Portfolio migration
- Dark theme
- npm package / CDN distribution
- v1.0 Stable после QA и завершения migration

---

## Благодарности

Разработано в рамках продуктовой студии **Natalia Lapkina — AI & Digital Products**.  
Визуальные ориентиры: Apple · Stripe · Linear · Notion.
