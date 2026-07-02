# Component Registry — NL Design System v1.0 Beta

Официальный реестр компонентов, foundation-модулей и паттернов.

**Статусы:** `planned` · `draft` · `beta` · `stable` · `deprecated`

---

## Foundation Layer

| Модуль | Файл | Версия | Статус | Описание |
|--------|------|--------|--------|----------|
| Design Tokens | `css/variables.css` | v0.9.1 | **Stable** | Foundation, Semantic, Component tokens (`--nl-*`) |
| Reset | `css/reset.css` | v0.3.0 | **Stable** | Modern CSS reset |
| Typography | `css/typography.css` | v0.4.0 | **Stable** | Type scale, `.type-*` utilities |
| Layout | `css/layout.css` | v0.5.0 | **Stable** | `.layout-*` primitives |
| Animations | `css/animations.css` | — | planned | Keyframes, motion |
| Responsive | `css/responsive.css` | — | planned | Breakpoint utilities |

---

## UI Components

| ID | Компонент | BEM Block | Spec | CSS | Playground | Version | Статус |
|----|-----------|-----------|------|-----|------------|---------|--------|
| **IC-001** | Button | `.nl-btn` | [Button.md](../components/Button.md) | ✅ | [button.html](../../patterns/buttons/button.html) | 1.0 | **Stable** |
| **IC-002** | Card | `.nl-card` | [Card.md](../components/Card.md) | ✅ | [card.html](../../patterns/cards/card.html) | 1.0 | **Stable** |
| **IC-003** | Badge | `.nl-badge` | [Badge.md](../components/Badge.md) | ✅ | [badge.html](../../patterns/badges/badge.html) | 1.0 | **Stable** |
| IC-004 | Input | `.nl-input` | — | — | — | — | planned |
| IC-005 | Form | `.nl-form` | — | — | — | — | planned |
| IC-006 | Hero | `.nl-hero` | — | — | — | — | planned |
| IC-007 | Navbar | `.nl-navbar` | — | — | — | — | planned |
| IC-008 | Footer | `.nl-footer` | — | — | — | — | planned |

---

## IC-001 — Button

| Категория | Детали |
|-----------|--------|
| **Variants** | primary, secondary, ghost, outline, danger, link |
| **Sizes** | sm, md, lg, xl |
| **Modifiers** | block, fit, loading |
| **Elements** | `__label`, `__icon`, `__loader` |
| **Tokens** | `--nl-btn-*` |

---

## IC-002 — Card

| Категория | Детали |
|-----------|--------|
| **Variants** | default, elevated, outlined, filled, ghost, interactive |
| **Sizes** | sm, md, lg |
| **Modifiers** | compact, horizontal, flush-media, selected, disabled, loading |
| **Elements** | `__media`, `__header`, `__body`, `__footer`, `__title`, `__description`, `__actions`, `__meta` |
| **Tokens** | `--nl-card-*` |

---

## IC-003 — Badge

| Категория | Детали |
|-----------|--------|
| **Variants** | neutral, primary, success, warning, danger, outline, ghost |
| **Sizes** | sm, md, lg |
| **Elements** | `__dot`, `__icon`, `__label` |
| **Tokens** | `--nl-badge-*` |

---

## Layout Primitives

| Primitive | Класс | Статус |
|-----------|-------|--------|
| Page | `.layout-page` | **Stable** |
| Container | `.layout-container` | **Stable** |
| Section | `.layout-section` | **Stable** |
| Stack | `.layout-stack` | **Stable** |
| Cluster | `.layout-cluster` | **Stable** |
| Sidebar | `.layout-sidebar` | **Stable** |
| Auto Grid | `.layout-auto-grid` | **Stable** |
| Grid | `.layout-grid` | **Stable** |

---

## Pattern Playgrounds

| Паттерн | Путь | Компонент |
|---------|------|-----------|
| Button | `patterns/buttons/button.html` | IC-001 |
| Card | `patterns/cards/card.html` | IC-002 |
| Badge | `patterns/badges/badge.html` | IC-003 |

---

## JavaScript Modules

| Модуль | Файл | Статус |
|--------|------|--------|
| Navigation | `js/navigation.js` | planned |
| Animations | `js/animations.js` | planned |

---

## Templates

| Тип | Папка | Статус |
|-----|-------|--------|
| Landing | `templates/landing/` | planned |
| Portfolio | `templates/portfolio/` | planned |
| Dashboard | `templates/dashboard/` | planned |
| SaaS | `templates/saas/` | planned |

---

## Token Namespace (v0.9.0+)

| Слой | Префикс | Пример |
|------|---------|--------|
| Foundation | `--nl-space-*`, `--nl-font-*`, … | `--nl-space-4` |
| Semantic | `--nl-color-*` | `--nl-color-primary` |
| Component | `--nl-btn-*`, `--nl-card-*`, `--nl-badge-*` | `--nl-btn-radius` |
| Raw palette | `--neutral-*`, `--brand-*` | `--brand-600` |

---

*Реестр обновляется при каждом релизе. Beta: IC-001–IC-003 Stable; остальное — planned.*
