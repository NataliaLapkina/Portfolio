# Badge — NL Design System

**Статус:** draft  
**Версия спецификации:** 0.1.0  
**Категория:** labels  
**ID:** IC-003  
**Путь реализации (будущее):** `patterns/labels/` · `css/components.css`  
**Зависимости:** `variables.css`, `reset.css`, `typography.css`, `layout.css`

---

## 1. Purpose

Badge — **компактный визуальный маркер** для метаданных, категорий, технологий, статусов и коротких labels в NL Design System. Компонент не несёт основного действия и не заменяет кнопку или ссылку.

### Когда использовать

- **Technology badge** — стек и интеграции: AI, CRM, API, Gmail, Sheets.
- **Status badge** — жизненный цикл: Stable, Beta, New, Planned, Deprecated.
- **Product badge** — зрелость продукта: MVP, Production, Preview.
- **Category badge** — домен или вертикаль: EdTech, SaaS, Automation, Digital Platform.
- **Case tags** — набор тегов в карточках кейсов и портфолио.
- **Dashboard labels** — статусы сущностей в таблицах и виджетах (Hot, New, Active).

### Когда не использовать

- Для главного CTA — компонент Button (IC-001).
- Для длинного текста (> ~24 символов) — typography utilities или caption.
- Для интерактивной фильтрации без полной спецификации chip — будущий Filter Chip (IC-010+).
- Для счётчиков уведомлений на иконках — будущий Indicator / Notification Badge (IC-011+).

### Роль в экосистеме NL

Badge — **универсальный атом метаданных**: спокойный premium, читаемый на light UI, предсказуемый в `landing`, `portfolio`, `saas`, `dashboard`, `docs`. Не привязан к конкретному проекту; семантика задаётся контентом и variant, не доменным CSS-классом.

---

## 2. Design Principles

Соответствие глобальным [Design Principles](../Design-Principles.md):

| Принцип | Применение к Badge |
|---------|-------------------|
| **Product thinking** | Один badge — одна короткая мысль; текст сканируется за доли секунды |
| **Calm premium** | Мягкие fills, тонкие borders; без кричащих градиентов |
| **Editorial clarity** | Uppercase только через модификатор; default — sentence case или Title Case по контенту |
| **Motion with purpose** | Без постоянной анимации; dot-pulse только для live status (опционально) |
| **Consistency** | Все цвета — semantic tokens; единый BEM-префикс `nl-badge` |
| **Accessibility** | Контраст AA; статус дублируется текстом, не только цветом |

### Визуальный характер

- Форма: скруглённый прямоугольник (`--nl-radius-xs` / `--nl-radius-sm`); pill через модификатор.
- Плотность: inline-flex, одна строка, без переноса по умолчанию.
- Типографика: caption scale (`type-caption` или component font-size token).
- Цвет: только через `--nl-color-*` и будущие `--nl-badge-*` aliases.

---

## 3. Anatomy

Блок BEM: **`nl-badge`**. Элементы — **`nl-badge__{part}`**.

```text
┌─ nl-badge ──────────────────────────────┐
│  nl-badge__dot (optional)               │
│  nl-badge__icon (optional)              │
│  nl-badge__label                        │
│  nl-badge__remove (optional, future)    │
└─────────────────────────────────────────┘
```

### Части

| Часть | Класс | Обязательность | Назначение |
|-------|-------|----------------|------------|
| Root | `nl-badge` | Да | Контейнер, variant, size |
| Label | `nl-badge__label` | Да* | Текст метки |
| Icon | `nl-badge__icon` | Нет | Leading icon (16px cap) |
| Dot | `nl-badge__dot` | Нет | Status indicator (live / active) |
| Remove | `nl-badge__remove` | Нет | Dismiss control (filter chips, future) |

\* Если label визуально скрыт, обязателен `aria-label` на root.

### Правила структуры

- Минимально жизнеспособный badge: `nl-badge` + текст или `nl-badge__label`.
- Порядок: `__dot` → `__icon` → `__label` → `__remove`.
- Badge **не** содержит интерактивные потомки, кроме явного `__remove` (future).
- Группы badges — `layout-cluster` или `layout-cluster--gap-2`; не вложенный `nl-badge` в `nl-badge`.
- Typography: на `__label` допускается `type-caption`, `type-caption--xs`; не накладывать `type-h*` на root.

### HTML-элементы root

| Сценарий | Элемент | Условие |
|----------|---------|---------|
| Статичная метка | `<span class="nl-badge">` | Default — metadata, tags |
| Статус в live region | `<span class="nl-badge" role="status">` | Динамическое обновление статуса |
| Ссылка-метка (редко) | `<a class="nl-badge nl-badge--interactive" href="…">` | Фильтр / tag navigation; один уровень |
| Список тегов | `<ul class="layout-cluster"><li><span class="nl-badge">` | Семантический список тегов |

---

## 4. Variants

Модификатор варианта: **`nl-badge--{variant}`**. Default: **`neutral`**.

Все варианты маппятся на **Semantic Tokens** — прямые hex и `--brand-*` в реализации запрещены.

| Variant | Модификатор | Сценарии | Фон | Текст | Border |
|---------|-------------|----------|-----|-------|--------|
| **Neutral** | *(none)* / `nl-badge--neutral` | Technology, category, case tags | `--nl-color-surface-alt` | `--nl-color-text-secondary` | `--nl-color-border` (optional) |
| **Primary** | `nl-badge--primary` | New, featured, key tech | `--nl-color-primary` @ low opacity* | `--nl-color-primary` | transparent |
| **Secondary** | `nl-badge--secondary` | General labels, docs | `--nl-color-surface` | `--nl-color-text` | `--nl-color-border` |
| **Success** | `nl-badge--success` | Stable, Production, Active | success tint* | `--nl-color-success` | transparent |
| **Warning** | `nl-badge--warning` | Beta, Preview, Attention | warning tint* | `--nl-color-warning` | transparent |
| **Danger** | `nl-badge--danger` | Deprecated, Error, Critical | danger tint* | `--nl-color-danger` | transparent |
| **Outline** | `nl-badge--outline` | Category, filter chips | transparent | `--nl-color-text` | `--nl-color-border` |
| **Ghost** | `nl-badge--ghost` | Inline meta на busy surface | transparent | `--nl-color-text-secondary` | transparent |

\* Tint backgrounds реализуются через component tokens `--nl-badge-{variant}-bg` → semantic + opacity layer в `variables.css` (Phase 6+), не raw rgba в `components.css`.

### Сценарии → рекомендуемый variant

| Сценарий | Пример текста | Variant |
|----------|---------------|---------|
| Technology | AI, CRM, API | `neutral` или `outline` |
| Status | Stable, Beta, New | `success`, `warning`, `primary` |
| Product | MVP, Production | `warning`, `success` |
| Category | EdTech, SaaS, Automation | `neutral` или `secondary` |
| Case tags | UX/UI, Landing, SEO | `neutral` |
| Dashboard | Hot, New, Done | `danger` tint / `success` / `neutral` |

### Правила комбинирования

- Один color-variant на элемент.
- `outline` + `ghost` не комбинировать.
- Семантика статуса **в тексте** обязательна (`Stable`, не только зелёный фон).

---

## 5. Sizes

Модификатор размера: **`nl-badge--{size}`**. Default: **`md`**.

| Size | Модификатор | Block size (target) | Font | Padding (inline × block) | Контекст |
|------|-------------|---------------------|------|--------------------------|----------|
| **sm** | `nl-badge--sm` | ~20px | `--nl-font-size-xs` | `--nl-space-2` × `--nl-space-1` | Dashboard tables, dense tags |
| **md** | *(default)* | ~24px | `--nl-font-size-sm` | `--nl-space-3` × `--nl-space-1` | Cards, docs, default |
| **lg** | `nl-badge--lg` | ~28px | `--nl-font-size-sm` | `--nl-space-4` × `--nl-space-2` | Hero meta, section labels |

### Иконка и размер

- `__icon` масштабируется с size token; не крупнее cap height label.
- `__dot` — 6px (sm), 8px (md/lg).

---

## 6. States

| State | Триггер | Поведение | Визуал |
|-------|---------|-----------|--------|
| **Default** | — | Базовый вид variant | См. Variants |
| **Disabled** | `aria-disabled="true"` | Не участвует в фильтрации | Reduced opacity; `--nl-color-text-secondary` |
| **Selected** | `aria-pressed="true"` или `nl-badge--selected` | Активный фильтр (chip mode) | Border / fill `--nl-color-primary` |
| **Interactive hover** | `:hover` на `nl-badge--interactive` | Лёгкое усиление fill/border | `--nl-color-surface-alt` |

Состояния **не** дублируются классами `.is-active` — только ARIA и BEM modifiers.

---

## 7. Modifiers

| Modifier | Назначение | Поведение |
|----------|------------|-----------|
| `nl-badge--pill` | Полностью скруглённая форма | `border-radius: --nl-radius-pill` |
| `nl-badge--dot` | Status с индикатором | Показывает `nl-badge__dot` |
| `nl-badge--uppercase` | Editorial eyebrow style | `text-transform: uppercase`; letter-spacing token |
| `nl-badge--interactive` | Кликабельный badge / chip | cursor pointer; focus ring |
| `nl-badge--selected` | Выбранный chip | См. States |
| `nl-badge--truncate` | Длинный label в узкой колонке | `max-inline-size` + ellipsis |

---

## 8. Accessibility

### Требования WCAG 2.2 (целевой уровень AA)

| Критерий | Реализация |
|----------|------------|
| Контраст | Текст badge на фоне ≥ 4.5:1 для md/lg; sm ≥ 4.5:1 рекомендуется |
| Не только цвет | Статус в тексте: «Beta», «Stable», не цвет alone |
| Focus | `nl-badge--interactive`: `:focus-visible` ring `--nl-color-primary` |
| Name | Visible label или `aria-label` |
| Live regions | Динамический статус: `role="status"` на root |

### Клавиатура

- Статичный `span` — не в tab order.
- `nl-badge--interactive` на `<a>` или `<button>` — нативная активация.
- Группы фильтров — roving tabindex (future `nl-badge-group`).

### Screen readers

- Не prefix «badge» в visible text.
- Для icon-only — `aria-label` на root.
- Список тегов — `<ul>` / `<li>` или `aria-label="Tags"` на cluster.

---

## 9. Design Tokens

Все значения Badge **обязаны** ссылаться на Semantic и Foundation tokens через component layer. Прямые hex запрещены.

### Color (semantic — использование в variants)

| Роль | Token |
|------|-------|
| Neutral fill | `--nl-color-surface-alt` |
| Neutral text | `--nl-color-text-secondary` |
| Strong text | `--nl-color-text` |
| Primary accent | `--nl-color-primary` |
| Success | `--nl-color-success` |
| Warning | `--nl-color-warning` |
| Danger | `--nl-color-danger` |
| Border | `--nl-color-border` |
| On-primary text | `--nl-color-surface` |

### Typography & spacing (foundation)

| Роль | Token |
|------|-------|
| Font sizes | `--nl-font-size-xs`, `--nl-font-size-sm` |
| Font weight | `--nl-font-weight-medium`, `--nl-font-weight-semibold` |
| Padding | `--nl-space-1` … `--nl-space-4` |
| Gap icon–label | `--nl-space-1`, `--nl-space-2` |
| Radius | `--nl-radius-xs`, `--nl-radius-sm`, `--nl-radius-pill` |

### Будущие component-level tokens (Phase 6+)

Резерв в `variables.css`:

| Token | Назначение |
|-------|------------|
| `--nl-badge-padding-sm` | Padding size sm |
| `--nl-badge-padding-md` | Padding size md |
| `--nl-badge-padding-lg` | Padding size lg |
| `--nl-badge-gap` | Icon / dot gap |
| `--nl-badge-radius` | Default corner radius |
| `--nl-badge-font-size-sm` | sm text |
| `--nl-badge-font-size-md` | md text |
| `--nl-badge-font-weight` | Label weight |
| `--nl-badge-neutral-bg` | `var(--nl-color-surface-alt)` |
| `--nl-badge-neutral-fg` | `var(--nl-color-text-secondary)` |
| `--nl-badge-primary-bg` | Primary tint |
| `--nl-badge-primary-fg` | `var(--nl-color-primary)` |
| `--nl-badge-success-bg` | Success tint |
| `--nl-badge-success-fg` | `var(--nl-color-success)` |
| `--nl-badge-warning-bg` | Warning tint |
| `--nl-badge-warning-fg` | `var(--nl-color-warning)` |
| `--nl-badge-danger-bg` | Danger tint |
| `--nl-badge-danger-fg` | `var(--nl-color-danger)` |
| `--nl-badge-outline-border` | `var(--nl-color-border)` |
| `--nl-badge-dot-size` | Status dot dimensions |

До их появления Badge использует semantic colors и spacing tokens напрямую в `components.css`.

---

## 10. Component API

### Class API

| API | Тип | Default | Описание |
|-----|-----|---------|----------|
| `nl-badge` | block | — | Корневой класс |
| `nl-badge--neutral` \| `primary` \| `secondary` \| `success` \| `warning` \| `danger` \| `outline` \| `ghost` | variant | `neutral` | Цветовая роль |
| `nl-badge--sm` \| `lg` | size | `md` | Размер |
| `nl-badge--pill` | modifier | off | Pill shape |
| `nl-badge--dot` | modifier | off | Status dot visible |
| `nl-badge--uppercase` | modifier | off | Uppercase label |
| `nl-badge--interactive` | modifier | off | Clickable chip |
| `nl-badge--selected` | state | off | Selected chip |
| `nl-badge--truncate` | modifier | off | Ellipsis overflow |
| `nl-badge__label` | element | — | Текст |
| `nl-badge__icon` | element | — | Icon |
| `nl-badge__dot` | element | — | Status dot |

### Attribute API

| Атрибут | Элемент | Значения | Описание |
|---------|---------|----------|----------|
| `aria-label` | root | string | Имя при icon-only |
| `aria-disabled` | root | `true` \| `false` | Неактивный chip |
| `aria-pressed` | interactive | `true` \| `false` | Toggle chip |
| `role` | root | `status` | Live status updates |

### Composition

Badge может находиться внутри:

- `nl-card__body` / `nl-card__footer` — case tags;
- `layout-cluster` — группы технологий;
- table cells — dashboard labels;
- docs hero — status Stable / Beta.

Не размещать badge внутри `nl-btn__label`.

---

## 11. Usage

### Technology tag (neutral)

```html
<span class="nl-badge">
  <span class="nl-badge__label">AI</span>
</span>
```

### Status badge (success)

```html
<span class="nl-badge nl-badge--success nl-badge--pill">
  <span class="nl-badge__label">Stable</span>
</span>
```

### Product badge with dot (warning)

```html
<span class="nl-badge nl-badge--warning nl-badge--dot">
  <span class="nl-badge__dot" aria-hidden="true"></span>
  <span class="nl-badge__label">Beta</span>
</span>
```

### Case tags cluster

```html
<ul class="layout-cluster layout-cluster--gap-2">
  <li><span class="nl-badge nl-badge--neutral nl-badge--sm"><span class="nl-badge__label">UX/UI</span></span></li>
  <li><span class="nl-badge nl-badge--neutral nl-badge--sm"><span class="nl-badge__label">Landing</span></span></li>
  <li><span class="nl-badge nl-badge--neutral nl-badge--sm"><span class="nl-badge__label">SEO</span></span></li>
</ul>
```

### Category badge (outline)

```html
<span class="nl-badge nl-badge--outline">
  <span class="nl-badge__label">SaaS</span>
</span>
```

### Dashboard label (sm)

```html
<span class="nl-badge nl-badge--success nl-badge--sm">
  <span class="nl-badge__label">Active</span>
</span>
```

---

## 12. Anti-patterns

| Anti-pattern | Почему нельзя | Правильно |
|--------------|---------------|-----------|
| `nl-badge--ai`, `nl-badge--crm` | Доменные классы | `neutral` + текст «AI» |
| Hex / `--brand-600` в CSS | Ломает темизацию | `--nl-color-primary` через component token |
| Badge как primary CTA | Неверная семантика | `nl-btn--primary` |
| Длинный paragraph в badge | Не читается | `type-body--sm` вне badge |
| Только цвет для статуса | a11y fail | Текст «Beta», «Stable» |
| Вложенные badges | Layout break | `layout-cluster` |
| `<div onclick>` вместо button/a | a11y | `nl-badge--interactive` + правильный элемент |
| 10+ цветовых variants на экране | Визуальный шум | 2–3 variants на контекст |

---

## 13. Future Extensions

| Расширение | Приоритет | Описание |
|------------|-----------|----------|
| **Badge group** | P1 | `nl-badge-group` — filter row, toggle set |
| **Removable chip** | P2 | `nl-badge__remove` + keyboard dismiss |
| **Notification count** | P2 | `nl-badge--count` на avatar/icon (отдельный паттерн) |
| **Animated dot** | P3 | Live pulse для real-time status |
| **Dark theme** | P1 | Переопределение `--nl-badge-*` в `[data-theme="dark"]` |
| **Component tokens** | P1 | Полный `--nl-badge-*` block в `variables.css` |
| **IC-003 playground** | P1 | `patterns/labels/badge.html` после CSS |

### Changelog (спецификация)

- **0.1.0** — Sprint 6: начальная архитектурная спецификация Badge (IC-003)

---

*Реализация CSS — следующая фаза (`components.css`). HTML-паттерны — `patterns/labels/` после утверждения спецификации.*
