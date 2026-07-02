# Card — NL Design System

**Статус:** draft  
**Версия спецификации:** 0.1.0  
**Категория:** cards  
**ID:** IC-002  
**Путь реализации (будущее):** `patterns/cards/` · `css/components.css`  
**Зависимости:** `variables.css`, `reset.css`, `typography.css`, `layout.css`

---

## 1. Purpose

Card — **универсальный контейнер для группировки связанного контента** в NL Design System. Компонент задаёт визуальную границу, поверхность и внутренний ритм, не навязывая конкретный домен (продукт, статья, метрика, профиль, настройка).

### Когда использовать

- Группировка заголовка, описания, медиа и действий в одном визуальном блоке.
- Сетки карточек: каталоги, feature lists, dashboards, docs indexes.
- Интерактивные плитки — навигация к деталям (при соблюдении семантики и a11y).
- Вложенные панели внутри секций (`layout-section`) без создания нового layout-примитива.

### Когда не использовать

- Для чисто декоративного фона секции — использовать `layout-section` и semantic surface tokens.
- Для модальных окон — будущий компонент Dialog (IC-006+).
- Для списков без визуальной оболочки — `layout-stack` + typography.
- Для единственной кнопки без контента — компонент Button (IC-001).

### Роль в экосистеме NL

Card — **базовый строительный блок** продуктовых интерфейсов: спокойный premium, editorial clarity, предсказуемая композиция на шаблонах `landing`, `portfolio`, `saas`, `dashboard`. Компонент не привязан к конкретному проекту и не содержит бизнес-логики.

---

## 2. Design Principles

Соответствие глобальным [Design Principles](../Design-Principles.md):

| Принцип | Применение к Card |
|---------|-------------------|
| **Product thinking** | Одна карточка — один смысловой объект; заголовок отвечает на вопрос «что это?» |
| **Calm premium** | Мягкая elevation, тёплые neutral surfaces, без тяжёлых рамок и градиентов |
| **Editorial clarity** | Чёткая иерархия: eyebrow → title → description → actions |
| **Motion with purpose** | Hover-lift только у interactive cards; без постоянной анимации |
| **Consistency** | Padding, radius, shadow — только токены; единый BEM-префикс `nl-card` |
| **Accessibility** | Семантическая разметка, focus-within для интерактивных карточек, контраст текста AA |

### Визуальный характер

- Форма: скруглённый прямоугольник (`--nl-radius-lg` по умолчанию).
- Поверхность: `--nl-color-surface` на `--nl-color-background`.
- Глубина: тень `--nl-shadow-sm` (default) или `--nl-shadow-md` (elevated); border опционален через variant `outline`.
- Внутренний ритм: padding через spacing tokens; gap между зонами — `layout-stack` внутри card body.

---

## 3. Anatomy

Блок BEM: **`nl-card`**. Элементы — **`nl-card__{part}`**.

```text
┌─ nl-card ─────────────────────────────────────┐
│  nl-card__media (optional)                    │
├───────────────────────────────────────────────┤
│  nl-card__header (optional)                   │
│    nl-card__eyebrow (optional)                │
│    nl-card__title                             │
│    nl-card__description (optional)            │
├───────────────────────────────────────────────┤
│  nl-card__body (optional)                     │
│    … произвольный контент / layout primitives  │
├───────────────────────────────────────────────┤
│  nl-card__footer (optional)                   │
│    nl-card__actions (optional)                │
└───────────────────────────────────────────────┘
```

### Части

| Часть | Класс | Обязательность | Назначение |
|-------|-------|----------------|------------|
| Root | `nl-card` | Да | Контейнер, variant, size, states |
| Media | `nl-card__media` | Нет | Изображение, иллюстрация, preview, icon slot |
| Header | `nl-card__header` | Нет | Зона заголовка и метаданных |
| Eyebrow | `nl-card__eyebrow` | Нет | Категория, статус, метка (использовать с `type-eyebrow`) |
| Title | `nl-card__title` | Рекомендуется | Главный заголовок (использовать с `type-h4`–`type-h6`) |
| Description | `nl-card__description` | Нет | Подзаголовок, summary (`type-body--sm`, `type-text-secondary`) |
| Body | `nl-card__body` | Нет | Основной контент: списки, метрики, формы |
| Footer | `nl-card__footer` | Нет | Вторичная зона: meta, timestamp, legal |
| Actions | `nl-card__actions` | Нет | Кнопки и ссылки; обычно `layout-cluster` |

### Правила структуры

- Минимально жизнеспособная карточка: `nl-card` + `nl-card__title` (или accessible name через `aria-label` на root).
- `nl-card__media` всегда **первый** визуальный ребёнок root (до header/body).
- `nl-card__actions` размещается в footer или в конце body — не между title и description.
- Typography utilities (`type-*`) применяются **на содержимое**, не на root `nl-card`.
- Layout primitives (`layout-stack`, `layout-cluster`) — внутри `__body`, `__footer`, `__actions`.

### HTML-элементы root

| Сценарий | Элемент | Условие |
|----------|---------|---------|
| Статичный контент | `<article class="nl-card">` | Самостоятельный смысловой блок |
| Группа без самостоятельного смысла | `<div class="nl-card">` | Часть большего article/section |
| Интерактивная карточка-ссылка | `<a class="nl-card nl-card--interactive" href="…">` | Вся карточка кликабельна; один `href` |
| Интерактивная с действием | `<button type="button" class="nl-card nl-card--interactive">` | Редко; не вкладывать другие кнопки |

---

## 4. Variants

Модификатор варианта: **`nl-card--{variant}`**. Default при отсутствии модификатора: **`default`** (визуально эквивалент `nl-card--default`).

| Variant | Модификатор | Назначение | Визуальная иерархия |
|---------|-------------|------------|---------------------|
| **Default** | *(none)* / `nl-card--default` | Стандартная карточка на странице | Surface `--nl-color-surface`, shadow `--nl-shadow-sm` |
| **Elevated** | `nl-card--elevated` | Акцентный блок, featured item | Shadow `--nl-shadow-md`, без border |
| **Outlined** | `nl-card--outlined` | Лёгкий контейнер на busy background | Border `--nl-color-border`, shadow none или `--nl-shadow-xs` |
| **Filled** | `nl-card--filled` | Inset-блок, вторичная поверхность | Background `--nl-color-surface-alt`, без сильной тени |
| **Ghost** | `nl-card--ghost` | Минимальная оболочка, контент на первом плане | Прозрачный фон, без shadow; border опционален |
| **Interactive** | `nl-card--interactive` | Кликабельная плитка (с `a` или `button`) | Hover: shadow lift, cursor pointer, focus-within ring |

### Правила комбинирования

- Один surface-variant (`default` | `elevated` | `outlined` | `filled` | `ghost`) на элемент.
- `nl-card--interactive` комбинируется с любым surface-variant, кроме случаев, когда карточка уже содержит вложенные ссылки (см. Anti-patterns).
- Не комбинировать `elevated` + `outlined` одновременно — выбрать один принцип глубины.

---

## 5. Sizes

Модификатор размера: **`nl-card--{size}`**. Default: **`md`**.

| Size | Модификатор | Padding (block × inline) | Radius | Типичный контекст |
|------|-------------|--------------------------|--------|-------------------|
| **sm** | `nl-card--sm` | `--nl-space-4` × `--nl-space-4` | `--nl-radius-md` | Compact lists, sidebar widgets, dense dashboards |
| **md** | *(default)* | `--nl-space-6` × `--nl-space-6` | `--nl-radius-lg` | Стандартные сетки, docs, catalog |
| **lg** | `nl-card--lg` | `--nl-space-8` × `--nl-space-8` | `--nl-radius-lg` | Feature cards, hero-adjacent blocks |

### Media и размер

- `nl-card--sm` + media: уменьшенный aspect ratio, опционально `nl-card--compact`.
- `nl-card--lg` допускает `type-h3` в title без нарушения иерархии страницы.

Размер влияет на **padding root** и опционально на **radius**; не задаёт фиксированную ширину — ширину контролирует родитель (`layout-auto-grid`, `layout-grid`).

---

## 6. States

Состояния задаются псевдоклассами, ARIA и модификаторами — **без** классов `.is-hover`.

| State | Триггер | Поведение | Визуал (токены) |
|-------|---------|-----------|-----------------|
| **Default** | — | Базовый вид variant | См. Variants |
| **Hover** | `:hover` на `nl-card--interactive` | Лёгкий lift, усиление shadow | `--nl-shadow-md` или `--nl-shadow-lg` |
| **Focus within** | `:focus-visible` на интерактивном потомке или root | Кольцо фокуса на карточке | `--nl-color-primary`, offset `--nl-space-1` |
| **Active** | `:active` на interactive card | Краткое «нажатие» | Shadow step down |
| **Disabled** | `aria-disabled="true"` на interactive root | Нет навигации/действия | Muted text, `opacity` / `--neutral-400` borders |
| **Selected** | `aria-selected="true"` или `nl-card--selected` | Выбранный элемент в списке | Border `--nl-color-primary`, subtle tint `--brand-50` |
| **Loading** | `aria-busy="true"` + `nl-card--loading` | Skeleton или spinner overlay | `nl-card__loader`; контент `aria-hidden` при полной замене |

### Loading

- Элемент `nl-card__loader` — опциональный overlay или замена body.
- При skeleton: предпочитать отдельный паттерн `nl-card--skeleton` (Future Extensions), не блокировать layout shift.
- `aria-busy="true"` снимается после загрузки контента; focus order не ломается.

---

## 7. Modifiers

Дополнительные модификаторы композиции и layout — **`nl-card--{modifier}`**.

| Modifier | Назначение | Поведение |
|----------|------------|-----------|
| `nl-card--horizontal` | Медиа слева, контент справа | `layout-sidebar` внутри или grid на root |
| `nl-card--compact` | Уменьшенные вертикальные отступы между зонами | Меньший gap в header/body |
| `nl-card--flush-media` | Media без внутреннего padding | Media примыкает к краям card radius |
| `nl-card--interactive` | Вся карточка — hit target | См. Variants; обязателен focus/hover |
| `nl-card--selectable` | Элемент выбора в группе | Работает с `aria-selected`; checkbox/radio внутри |
| `nl-card--highlighted` | Визуальный акцент (featured, recommended) | Border или tint primary; не дублировать elevated без причины |
| `nl-card--loading` | Состояние загрузки | См. States |
| `nl-card--selected` | Выбранное состояние | См. States |

### Ширина

| Modifier | Поведение |
|----------|-----------|
| `nl-card--block` | `inline-size: 100%` — колонка grid, mobile stacks |
| `nl-card--fit` | `inline-size: auto` — явный сброс block |

---

## 8. Accessibility

### Требования WCAG 2.2 (целевой уровень AA)

| Критерий | Реализация |
|----------|------------|
| Контраст текста | `--nl-color-text` / `--nl-color-text-secondary` на `--nl-color-surface` ≥ 4.5:1 |
| Focus visible | `:focus-visible` на interactive card и вложенных controls |
| Target size | Interactive card: min block size `--nl-space-12` рекомендуется для touch |
| Name | Visible title или `aria-label` / `aria-labelledby` на root |
| State | `aria-disabled`, `aria-selected`, `aria-busy` по сценарию |
| Motion | `prefers-reduced-motion` — без transform lift или с reduced shadow only |

### Семантика

- Статичная карточка с самостоятельным содержанием — `<article>`.
- Карточка-ссылка: один `<a>` на root, **без** вложенных `<a>`.
- Если внутри card есть кнопки — root **не** должен быть `<a>`; использовать `<article>` + actions.
- Заголовок: предпочитать heading (`h2`–`h4`) внутри `nl-card__title`, не полагаться только на визуальный `type-h*`.

### Клавиатура

- Interactive card (`<a>`, `<button>`): активация Enter / Space (button).
- Selectable group: roving tabindex или нативные radio/checkbox внутри card.
- Focus order: header → body → footer actions; не использовать `tabindex > 0`.

### Screen readers

- Не дублировать title в `aria-label`, если он видим.
- `aria-describedby` связывает description с interactive root при необходимости.
- Loading: `aria-busy="true"`; по завершении — обновление live region на уровне списка, не каждой карточки.

---

## 9. Design Tokens

Все визуальные значения Card **обязаны** ссылаться на токены из `variables.css`. Прямые hex/px в реализации запрещены.

### Color (semantic)

| Роль | Token |
|------|-------|
| Card background | `--nl-color-surface` |
| Filled variant | `--nl-color-surface-alt` |
| Page canvas (контраст) | `--nl-color-background` |
| Border | `--nl-color-border`, `--border-color` |
| Title | `--nl-color-heading` |
| Body / description | `--nl-color-text`, `--nl-color-text-secondary` |
| Selected / highlight tint | `--brand-50`, border `--nl-color-primary` |
| Focus ring | `--nl-color-primary` |

### Typography

| Роль | Token / класс |
|------|----------------|
| Title | `type-h4`–`type-h6`, `--nl-font-family-heading` |
| Description | `type-body--sm`, `--nl-color-text-secondary` |
| Eyebrow | `type-eyebrow` |
| Meta / footer | `type-caption` |

### Spacing & layout

| Роль | Token |
|------|-------|
| Padding sm / md / lg | `--nl-space-4`, `--nl-space-6`, `--nl-space-8` |
| Gap между зонами | `--nl-space-3` … `--nl-space-6` |
| Media inset | `--nl-space-0` (flush) или `--nl-space-4` |

### Shape & elevation

| Роль | Token |
|------|-------|
| Border radius | `--nl-radius-md` (sm), `--nl-radius-lg` (md/lg), `--nl-radius-xl` (опционально hero) |
| Border width | `--border-width` |
| Shadow default | `--nl-shadow-sm` |
| Shadow elevated / hover | `--nl-shadow-md`, `--nl-shadow-lg` |

### Motion

| Роль | Token |
|------|-------|
| Transition duration | `--nl-duration-fast` (border, shadow), `--nl-duration-normal` (transform) |
| Easing | `--nl-ease-standard` |

### Будущие component-level tokens (Phase 6+)

Резерв в `variables.css` (ещё не созданы):

| Token | Назначение |
|-------|------------|
| `--nl-card-padding-sm` | Padding size sm |
| `--nl-card-padding-md` | Padding size md |
| `--nl-card-padding-lg` | Padding size lg |
| `--nl-card-radius` | Default border radius |
| `--nl-card-shadow` | Default elevation |
| `--nl-card-shadow-hover` | Interactive hover |
| `--nl-card-border-color` | Outlined variant |
| `--nl-card-gap` | Internal vertical rhythm |

До их появления Card использует semantic, spacing, radius и shadow tokens напрямую.

---

## 10. Component API

Публичный контракт для разметки и будущей реализации в `components.css`.

### Class API

| API | Тип | Default | Описание |
|-----|-----|---------|----------|
| `nl-card` | block | — | Корневой класс |
| `nl-card--default` \| `elevated` \| `outlined` \| `filled` \| `ghost` | variant | `default` | Визуальный вариант поверхности |
| `nl-card--interactive` | variant | off | Кликабельная карточка |
| `nl-card--sm` \| `lg` | size | `md` | Размер padding/radius |
| `nl-card--horizontal` | modifier | off | Горизонтальная композиция |
| `nl-card--compact` | modifier | off | Плотный вертикальный ритм |
| `nl-card--flush-media` | modifier | off | Media edge-to-edge |
| `nl-card--selectable` | modifier | off | Режим выбора |
| `nl-card--highlighted` | modifier | off | Featured accent |
| `nl-card--selected` | state | off | Выбранное состояние |
| `nl-card--loading` | state | off | Загрузка |
| `nl-card--block` \| `nl-card--fit` | layout | `fit` | Ширина |
| `nl-card__media` | element | — | Медиа-зона |
| `nl-card__header` | element | — | Шапка |
| `nl-card__eyebrow` | element | — | Метка |
| `nl-card__title` | element | — | Заголовок |
| `nl-card__description` | element | — | Описание |
| `nl-card__body` | element | — | Основной контент |
| `nl-card__footer` | element | — | Подвал |
| `nl-card__actions` | element | — | Действия |
| `nl-card__loader` | element | — | Индикатор загрузки |

### Attribute API

| Атрибут | Элемент | Значения | Описание |
|---------|---------|----------|----------|
| `href` | `a.nl-card` | url | Навигация для interactive card-link |
| `aria-label` | root | string | Имя при отсутствии visible title |
| `aria-labelledby` | root | id ref | Связь с заголовком |
| `aria-describedby` | root | id ref | Связь с description |
| `aria-disabled` | interactive root | `true` \| `false` | Неактивная карточка |
| `aria-selected` | selectable root | `true` \| `false` | Выбор в группе |
| `aria-busy` | root | `true` \| `false` | Загрузка контента |
| `tabindex` | non-link interactive | `0` | Только при `role` + keyboard pattern |

### Data API (опционально, JS в будущем)

| Data attribute | Назначение |
|----------------|------------|
| `data-nl-card-loading` | Программное включение loading |
| `data-nl-card-selectable` | Инициализация selectable group |

JS не входит в текущую фазу; атрибуты зарезервированы для `patterns/cards/`.

### Composition

Card может содержать:

- `layout-stack` — вертикальный контент в `__body`;
- `layout-cluster` — actions, tags;
- `nl-btn` (IC-001) — в `__actions`;
- typography utilities — на текстовые элементы;
- будущий Input (IC-004) / Form (IC-005) — в `__body` для settings cards.

Card может находиться внутри:

- `layout-auto-grid` — каталоги и galleries;
- `layout-grid` — фиксированные колонки;
- `layout-sidebar` — карточка как aside panel.

---

## 11. Usage

### Базовая статичная карточка

```html
<article class="nl-card">
  <header class="nl-card__header">
    <p class="nl-card__eyebrow type-eyebrow">Category</p>
    <h3 class="nl-card__title type-h5">Card title</h3>
    <p class="nl-card__description type-body--sm type-text-secondary">
      Short summary of the content inside this card.
    </p>
  </header>
  <div class="nl-card__body layout-stack layout-stack--gap-4">
    <!-- content -->
  </div>
</article>
```

### Interactive card (navigation)

```html
<a href="/details" class="nl-card nl-card--elevated nl-card--interactive nl-card--block">
  <div class="nl-card__media">
    <img src="preview.jpg" alt="">
  </div>
  <div class="nl-card__header">
    <h3 class="nl-card__title type-h5">View details</h3>
    <p class="nl-card__description type-body--sm type-text-secondary">
      Entire card is clickable — no nested links.
    </p>
  </div>
</a>
```

### Card with actions

```html
<article class="nl-card nl-card--outlined">
  <header class="nl-card__header">
    <h3 class="nl-card__title type-h5">Settings</h3>
  </header>
  <div class="nl-card__body">
    <!-- form fields (future IC-004/005) -->
  </div>
  <footer class="nl-card__footer">
    <div class="nl-card__actions layout-cluster layout-cluster--gap-4">
      <button type="button" class="nl-btn nl-btn--primary">
        <span class="nl-btn__label">Save</span>
      </button>
      <button type="button" class="nl-btn nl-btn--ghost">
        <span class="nl-btn__label">Cancel</span>
      </button>
    </div>
  </footer>
</article>
```

### Сетка карточек

```html
<div class="layout-auto-grid layout-auto-grid--fill layout-auto-grid--gap-8">
  <article class="nl-card nl-card--block">…</article>
  <article class="nl-card nl-card--block">…</article>
  <article class="nl-card nl-card--block">…</article>
</div>
```

---

## 12. Anti-patterns

| Anti-pattern | Почему нельзя | Правильно |
|--------------|---------------|-----------|
| Вложенная `<a>` внутри `a.nl-card` | Невалидная разметка, сломанный a11y | Одна ссылка на root **или** ссылки только в `__actions` |
| Card как чистый div без семантики для standalone content | SR не понимают границу контента | `<article>` для самостоятельных блоков |
| Primary button в каждой карточке сетки из 12 items | Визуальный шум, нет иерархии | Ghost/link в actions; один primary на секцию |
| Фиксированная высота с обрезанным текстом без truncate | Плохая читаемость | `type-truncate` + expand pattern или equal height через grid |
| Inline styles для shadow/radius | Ломает темизацию | Только CSS tokens и `nl-card--*` |
| `onclick` на `<div class="nl-card">` | Нет keyboard/a11y | `<a>` / `<button>` + `nl-card--interactive` |
| Card внутри card без визуальной необходимости | Избыточная вложенность | `layout-stack` или `filled` inset zone |
| Использование Card для всей страницы | Не контейнер layout | `layout-page`, `layout-section` |
| Жёсткая привязка к домену в BEM (`nl-card--portfolio-case`) | Не универсально | Variant + content slots, домен в данных |

---

## 13. Future Extensions

| Расширение | Приоритет | Описание |
|------------|-----------|----------|
| **Skeleton card** | P1 | `nl-card--skeleton` + placeholder slots |
| **Media aspect ratios** | P1 | `nl-card__media--16x9`, `--square` modifiers |
| **Card group / carousel** | P2 | Горизонтальный scroll, snap, a11y arrows |
| **Expandable card** | P2 | Accordion-like disclosure в `__body` |
| **Drag handle** | P3 | Dashboard reorder; `nl-card__handle` |
| **Dark theme variants** | P1 | Переопределение через `[data-theme="dark"]` |
| **Component tokens** | P1 | `--nl-card-*` в `variables.css` |
| **React/Vue wrappers** | P3 | Props 1:1 с Class API |
| **IC-002 playground** | P1 | `patterns/cards/card.html` после CSS Phase |

### Changelog (спецификация)

- **0.1.0** — Sprint 4: начальная архитектурная спецификация Card (IC-002)

---

*Реализация CSS — следующая фаза (`components.css`). HTML-паттерны — `patterns/cards/` после утверждения спецификации.*
