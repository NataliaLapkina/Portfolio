# Button — NL Design System

**Статус:** draft  
**Версия спецификации:** 0.1.0  
**Категория:** buttons  
**Путь реализации (будущее):** `patterns/buttons/` · `css/components.css`  
**Зависимости:** `variables.css`, `reset.css`, `typography.css`, `layout.css`

---

## 1. Purpose

Button — базовый интерактивный компонент NL Design System для **явных действий пользователя**: отправка формы, переход к разделу, открытие внешнего ресурса, подтверждение операции.

### Когда использовать

- Одно главное действие на экране или в блоке (primary CTA).
- Вторичное или альтернативное действие (secondary / ghost).
- Деструктивное или необратимое действие (danger).
- Навигация, оформленная как кнопка (только при семантической необходимости — см. HTML Rules).

### Когда не использовать

- Для обычных текстовых ссылок внутри prose — использовать стили ссылок из `typography.css`.
- Для переключения видимости без submit — предпочтительнее отдельный компонент Toggle (будущая спецификация).
- Для иконки без текстовой метки без `aria-label` — запрещено.

### Роль в экосистеме NL

Button закрепляет **product-grade** ощущение студии: спокойный premium, чёткая иерархия действий, предсказуемое поведение на всех шаблонах (`landing`, `portfolio`, `saas`, `dashboard`).

---

## 2. Design Principles

Соответствие глобальным [Design Principles](../Design-Principles.md):

| Принцип | Применение к Button |
|---------|---------------------|
| **Product thinking** | Один визуальный акцент primary на контекст; остальные действия — secondary/ghost |
| **Calm premium** | Мягкие тени, без агрессивных градиентов; elevation только на hover/focus |
| **Editorial clarity** | Короткий глагол в label; semibold, не bold display |
| **Motion with purpose** | Transition на background, border, shadow; loader только при loading |
| **Consistency** | Все размеры и отступы — токены; единый радиус `--nl-radius-md` |
| **Accessibility** | Контраст WCAG AA, видимый focus, disabled не через `pointer-events` alone |

### Визуальный характер

- Форма: скруглённый прямоугольник (`--nl-radius-md`), опционально pill для compact nav CTA.
- Плотность: комфортная touch-target (минимум `--nl-space-10` по block-axis на md).
- Иконка + текст: gap `--nl-space-2`; иконка не крупнее cap height label.

---

## 3. Variants

Блок BEM: **`nl-btn`**. Модификатор варианта: **`nl-btn--{variant}`**.

| Variant | Модификатор | Назначение | Визуальная иерархия |
|---------|-------------|------------|---------------------|
| **Primary** | `nl-btn--primary` | Главное действие экрана/модала | Заливка `--nl-color-primary`, текст на `--nl-color-surface` |
| **Secondary** | `nl-btn--secondary` | Важное, но не главное действие | Заливка `--nl-color-surface-alt`, border `--nl-color-border`, текст `--nl-color-text` |
| **Ghost** | `nl-btn--ghost` | Альтернатива без визуального веса | Прозрачный фон, border `--nl-color-border`, hover `--nl-color-surface-alt` |
| **Outline** | `nl-btn--outline` | Акцент без заливки | Border `--nl-color-primary`, текст `--nl-color-primary` |
| **Danger** | `nl-btn--danger` | Удаление, отмена безвозвратная | Фон/текст через `--nl-color-danger` и `--nl-color-surface` |
| **Link** | `nl-btn--link` | Действие, визуально близкое к ссылке, но button semantics | Без border/background, цвет `--nl-color-link` |

### Правила комбинирования

- Один variant на элемент; не комбинировать `--primary` и `--ghost`.
- `nl-btn--link` не используется внутри форм как submit — только `type="button"` или явный UX-сценарий.
- На тёмном фоне (будущий dark theme) variant mapping переопределяется темой, не новыми классами.

---

## 4. Sizes

Модификатор размера: **`nl-btn--{size}`**. Default при отсутствии модификатора: **`md`**.

| Size | Модификатор | Font size | Padding (inline × block) | Min block size | Типичный контекст |
|------|-------------|-----------|--------------------------|----------------|-------------------|
| **sm** | `nl-btn--sm` | `--nl-font-size-sm` | `--nl-space-3` × `--nl-space-2` | `--nl-space-8` | Navbar CTA, compact forms |
| **md** | *(default)* | `--nl-font-size-md` | `--nl-space-6` × `--nl-space-3` | `--nl-space-10` | Стандартные формы, секции |
| **lg** | `nl-btn--lg` | `--nl-font-size-lg` | `--nl-space-8` × `--nl-space-4` | `--nl-space-12` | Hero CTA, contact banners |
| **xl** | `nl-btn--xl` | `--nl-font-size-xl` | `--nl-space-10` × `--nl-space-5` | `--nl-space-12` | Крупные landing CTA (редко) |

### Модификатор ширины

| Модификатор | Поведение |
|-------------|-----------|
| `nl-btn--full` | `inline-size: 100%` — мобильные формы, card footers |
| `nl-btn--fit` | `inline-size: auto` — явный сброс full (default) |

---

## 5. States

Состояния задаются нативными атрибутами, ARIA и модификаторами — **без** дублирующих классов типа `.is-hover`.

| State | Триггер | Поведение | Визуал (токены) |
|-------|---------|-----------|-----------------|
| **Default** | — | Базовый вид variant | См. Variants |
| **Hover** | `:hover` (fine pointer) | Лёгкий lift опционально; усиление border/shadow | `--nl-color-primary-hover` для primary; `--nl-shadow-sm` |
| **Focus** | `:focus-visible` | Кольцо фокуса, не снимать outline глобально | `outline` + `--nl-color-primary`; offset `--nl-space-1` |
| **Active** | `:active` | Краткое «нажатие», без scale > 0.98 | Темнее hover на 1 step brand |
| **Disabled** | `disabled` или `aria-disabled="true"` | Нет pointer events; не submit | Opacity снижение через `--neutral-400` текст/border; cursor `not-allowed` |
| **Loading** | `aria-busy="true"` + модификатор `nl-btn--loading` | Блокировка повторного submit; label скрыт визуально или сохранён для SR | Элемент `nl-btn__loader`; кнопка `disabled` или `aria-disabled` |

### Loading

- Обязательные части: `nl-btn__label`, `nl-btn__loader` (скрыт по умолчанию).
- При loading: loader visible, label `aria-hidden="true"` **только если** дублируется `aria-label` на кнопке с тем же текстом действия.
- Длительность анимации loader: `--nl-duration-normal`, easing `--nl-ease-standard`.

---

## 6. HTML Rules

### Разрешённые элементы

| Элемент | Условие |
|---------|---------|
| `<button type="button">` | Действия без навигации |
| `<button type="submit">` | Отправка формы |
| `<button type="reset">` | Сброс формы (редко, документировать в контексте) |
| `<a class="nl-btn" role="button">` | **Только** навигация с внешним `href`; не для submit |

### Запрещено

- `<div>` / `<span>` с `onclick` вместо button.
- Вложенные интерактивные элементы внутри button.
- Несколько primary рядом без иерархии (max 1 primary на логический блок).
- Пустая кнопка без accessible name.

### Структура (anatomy)

| Часть | Класс | Обязательность |
|-------|-------|----------------|
| Root | `nl-btn` + variant + size | Да |
| Label | `nl-btn__label` | Да, если есть loading |
| Icon (leading) | `nl-btn__icon` | Нет |
| Icon (trailing) | `nl-btn__icon nl-btn__icon--trailing` | Нет |
| Loader | `nl-btn__loader` | Только при поддержке loading state |

### Атрибуты

- `type` обязателен на `<button>`.
- `href` обязателен на `<a>` с классом `nl-btn`.
- Внешние ссылки: `rel="noopener noreferrer"` при `target="_blank"`.
- Иконка-only: `aria-label` на root обязателен.

---

## 7. Accessibility

### Требования WCAG 2.2 (целевой уровень AA)

| Критерий | Реализация |
|----------|------------|
| Контраст текста | Primary: `--nl-color-surface` на `--nl-color-primary` ≥ 4.5:1 |
| Focus visible | `:focus-visible` с outline ≥ 2px, offset `--nl-space-1` |
| Target size | Min block size sm: `--nl-space-8`; md/lg: `--nl-space-10`+ |
| Name | Visible text или `aria-label` |
| State | `disabled` / `aria-disabled`; loading: `aria-busy="true"` |
| Motion | Уважать `prefers-reduced-motion` — loader без rotation или static indicator |

### Клавиатура

- `Enter` / `Space` активируют `<button>`.
- `<a role="button">` — Space предотвращать default scroll; активация по Enter (при JS enhancement в будущем `patterns/buttons/`).
- Focus order следует DOM; не использовать `tabindex > 0`.

### Screen readers

- Не дублировать «кнопка» в label, если роль нативная.
- Loading: объявлять busy; по завершении — `aria-live="polite"` на форме, не на каждой кнопке.

---

## 8. Design Tokens

Все визуальные значения Button **обязаны** ссылаться на токены из `variables.css`. Прямые hex/px в реализации запрещены.

### Color (semantic)

| Роль | Token |
|------|-------|
| Primary background | `--nl-color-primary` |
| Primary hover | `--nl-color-primary-hover` |
| Primary text on fill | `--nl-color-surface` |
| Secondary / ghost surface | `--nl-color-surface`, `--nl-color-surface-alt` |
| Border | `--nl-color-border`, `--border-color` |
| Text default | `--nl-color-text` |
| Link-style button | `--nl-color-link` |
| Danger | `--nl-color-danger`, `--nl-color-surface` |

### Typography

| Роль | Token |
|------|-------|
| Font family | `--nl-font-family-base` |
| Weights | `--nl-font-weight-semibold` (default label) |
| Sizes per size scale | `--nl-font-size-sm` … `--nl-font-size-xl` |

### Spacing & layout

| Роль | Token |
|------|-------|
| Padding | `--nl-space-2` … `--nl-space-10` |
| Icon gap | `--nl-space-2` |
| Full width | layout utility `nl-btn--full` (inline-size 100%) |

### Shape & elevation

| Роль | Token |
|------|-------|
| Border radius | `--nl-radius-md` (default), `--nl-radius-pill` (optional sm nav) |
| Border width | `--border-width` |
| Shadow hover | `--nl-shadow-sm`, `--nl-shadow-md` |

### Motion

| Роль | Token |
|------|-------|
| Transition duration | `--nl-duration-fast` (color), `--nl-duration-normal` (shadow, transform) |
| Easing | `--nl-ease-standard` |

### Будущие component-level tokens (v0.6+)

Резерв в `variables.css` (ещё не созданы):

- `--nl-btn-height-sm`, `--nl-btn-height-md`, `--nl-btn-height-lg`
- `--nl-btn-primary-bg`, `--nl-btn-primary-fg` (aliases на semantic)

До их появления Button использует только существующие semantic и spacing tokens.

---

## 9. Component API

Публичный контракт для разметки и будущей реализации в `components.css`.

### Class API

| API | Тип | Default | Описание |
|-----|-----|---------|----------|
| `nl-btn` | block | — | Корневой класс |
| `nl-btn--primary` \| `secondary` \| `ghost` \| `outline` \| `danger` \| `link` | variant | `primary` если единственный CTA в шаблоне документирован иначе | Визуальный вариант |
| `nl-btn--sm` \| `lg` \| `xl` | size | `md` | Размер |
| `nl-btn--full` | layout | off | На всю ширину контейнера |
| `nl-btn--loading` | state | off | Состояние загрузки |
| `nl-btn__label` | element | — | Текст действия |
| `nl-btn__icon` | element | — | Иконка |
| `nl-btn__loader` | element | — | Индикатор загрузки |

### Attribute API

| Атрибут | Элемент | Значения | Описание |
|---------|---------|----------|----------|
| `type` | `button` | `button` \| `submit` \| `reset` | Семантика формы |
| `disabled` | `button` | boolean | Неактивное состояние |
| `aria-disabled` | `button`, `a` | `true` \| `false` | Неактивно без native disabled на ссылках |
| `aria-busy` | `button` | `true` \| `false` | Загрузка |
| `aria-label` | root | string | Имя при icon-only |
| `href` | `a` | url | Навигация для link-button |

### Data API (опционально, JS в будущем)

| Data attribute | Назначение |
|----------------|------------|
| `data-nl-btn-loading` | Программное включение loading без класса |
| `data-nl-btn-variant` | Динамическая смена variant (dashboard) |

JS не входит в Phase 5; атрибуты зарезервированы для `patterns/buttons/`.

### Composition

Button может находиться внутри:

- `layout-cluster` — группа действий;
- `layout-stack` — вертикальный список CTA;
- form patterns — submit + ghost cancel.

Не комбинировать с typography utility на том же элементе, кроме `type-nowrap` при overflow.

---

## 10. Future Extensions

| Расширение | Приоритет | Описание |
|------------|-----------|----------|
| **Icon-only button** | P1 | Отдельная size-матрица; обязательный `aria-label` |
| **Button group** | P1 | `nl-btn-group` — segmented control, toggle group |
| **Split button** | P2 | Primary action + dropdown chevron |
| **Floating action (FAB)** | P2 | `nl-btn--fab` + `--nl-z-fixed` |
| **Dark theme variants** | P1 | Переопределение через `[data-theme="dark"]` |
| **Component tokens** | P1 | `--nl-btn-*` в `variables.css` |
| **Magnetic / tilt** | P3 | Опциональный JS из `animations.js`, не в base |
| **React/Vue wrappers** | P3 | Вне scope NL CSS; документировать props 1:1 с Class API |

### Changelog (спецификация)

- **0.1.0** — Phase 5: начальная архитектурная спецификация Button

---

*Реализация CSS — Phase 6 (`components.css`). HTML-паттерны — `patterns/buttons/` после утверждения спецификации.*
