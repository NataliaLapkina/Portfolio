# Component Tokens — NL Design System

**Статус:** draft  
**Версия:** 0.1.0  
**Phase:** 6 — Token Architecture  
**Связанные файлы:** `css/variables.css` (Foundation + Semantic), `css/components.css` (будущая реализация)  
**Не изменяет:** `variables.css` на текущем этапе — документ описывает целевую архитектуру

---

## 1. Purpose

**Component Tokens** — третий уровень дизайн-токенов NL Design System. Они связывают **семантику продукта** с **конкретным UI-компонентом**, не раскрывая в `components.css` сырые foundation-значения и не дублируя логику выбора цветов в каждом селекторе.

### Задачи слоя

| Задача | Описание |
|--------|----------|
| **Инкапсуляция** | Button знает `--nl-btn-primary-bg`, а не `--brand-600` |
| **Согласованность** | Один источник правды для всех состояний компонента |
| **Темизация** | Смена темы — переопределение component tokens, не переписывание CSS |
| **Масштабирование** | Новый компонент = новый префикс, те же правила именования |
| **Документируемость** | Спецификации (`docs/components/*.md`) ссылаются на component tokens |

### Что Component Tokens не делают

- Не заменяют Foundation (палитра, шкала spacing).
- Не заменяют Semantic (роли: text, surface, primary).
- Не содержат layout-логику (grid, container) — это `layout.css`.
- Не содержат типографическую шкалу — это `typography.css`.

### Место в цепочке NL DS

```text
Foundation Tokens  →  Semantic Tokens  →  Component Tokens  →  components.css
     (raw)              (roles)              (component API)      (selectors)
```

---

## 2. Relationship with Foundation Tokens

**Foundation Tokens** — примитивы без контекста использования: `--neutral-*`, `--brand-*`, `--nl-space-*`, `--nl-font-size-*`, `--nl-radius-*`, `--nl-shadow-*`, `--nl-duration-*`.

### Правило связи

Component Token **может** ссылаться на Foundation **только если** нет подходящего Semantic Token, и это должно быть явно обосновано в спецификации компонента.

| Ситуация | Рекомендация |
|----------|--------------|
| Цвет фона кнопки | Semantic → `--nl-color-primary`, не `--brand-600` |
| Padding кнопки | Foundation → `--nl-space-3`, `--nl-space-6` (нет semantic spacing) |
| Радиус кнопки | Foundation → `--nl-radius-md` |
| Тень карточки | Foundation → `--nl-shadow-md` |

### Почему не напрямую из components.css

Если `components.css` обращается к `--brand-600`, при смене brand scale или dark theme придётся править каждый селектор. Component Token `--nl-btn-primary-bg: var(--nl-color-primary)` централизует mapping один раз в `variables.css` (будущая секция).

### Foundation как «последний уровень»

Цепочка должна оставаться однонаправленной:

```text
--nl-btn-primary-bg  →  --nl-color-primary  →  --brand-600  →  #0d9488
```

Обратная ссылка (Foundation → Component) **запрещена**.

---

## 3. Relationship with Semantic Tokens

**Semantic Tokens** — роли интерфейса: `--nl-color-text`, `--nl-color-surface`, `--nl-color-primary`, `--nl-color-border` и т.д. Они уже привязаны к Foundation.

### Semantic — предпочтительный источник для Component Tokens

| Semantic role | Типичное использование в components |
|---------------|-------------------------------------|
| `--nl-color-primary` | Primary button background, active nav |
| `--nl-color-primary-hover` | Hover / active states |
| `--nl-color-surface` | Card background, button text on primary |
| `--nl-color-surface-alt` | Secondary button fill, inset areas |
| `--nl-color-text` | Default label text |
| `--nl-color-text-secondary` | Muted labels, placeholders |
| `--nl-color-border` | Outlined controls, card border |
| `--nl-color-link` | Link-style button |
| `--nl-color-danger` | Destructive button |
| `--nl-color-success` | Success button / badge (future) |

### Когда Semantic недостаточно

Если компоненту нужна роль, которой нет в semantic layer (например, `--nl-color-input-placeholder`), порядок действий:

1. Добавить **новый Semantic Token** в `variables.css` (отдельная фаза).
2. Затем создать Component Token, ссылающийся на него.
3. Не вводить `--input-placeholder: #9c9c96` на уровне component.

### Параллель с типографикой и layout

- Typography utilities (`type-body`, `type-h1`) используют **foundation typography tokens** напрямую — это не component layer.
- Layout patterns (`layout-stack`) используют **spacing foundation** — не component layer.
- Component Tokens применяются к **интерактивным и составным UI-блокам** в `components.css`: Button, Input, Card, Badge, Modal.

---

## 4. Naming Convention

### Формат

```text
--{component}-{property}-{variant?}-{state?}
```

| Сегмент | Правила | Примеры |
|---------|---------|---------|
| `component` | Короткое имя, lowercase, без префикса `nl-` | `btn`, `card`, `input`, `nav` |
| `property` | CSS-свойство или роль, kebab-case | `bg`, `fg`, `border`, `padding-x`, `height`, `shadow` |
| `variant` | Опционально: визуальный вариант | `primary`, `ghost`, `danger` |
| `state` | Опционально: интерактивное состояние | `hover`, `active`, `focus`, `disabled` |

### Сокращения (канон NL)

| Сокращение | Значение |
|------------|----------|
| `bg` | background-color |
| `fg` | color (foreground text) |
| `border` | border-color (width через `--border-width`) |
| `ring` | focus ring color |
| `pad-x` / `pad-y` | padding-inline / padding-block |
| `gap` | gap между icon и label |

### Размеры

Для size-матрицы компонента:

```text
--nl-btn-height-sm
--nl-btn-height-md
--nl-btn-pad-x-lg
--nl-btn-font-size-sm
```

Размер — **суффикс размера**, не variant.

### Группировка в variables.css (будущее)

```text
/* Component Tokens — Button */
/* Component Tokens — Card */
```

Каждая группа сопровождается комментарием и ссылкой на `docs/components/{Name}.md`.

### Запрещённые имена

| Плохо | Почему | Хорошо |
|-------|--------|--------|
| `--primary-button-bg` | Порядок: component first | `--nl-btn-primary-bg` |
| `--btnBackground` | camelCase | `--nl-btn-bg` |
| `--btn-primary-bg` | Без глобального namespace `--nl-` | `--nl-btn-primary-bg` |
| `--button-color-teal` | Привязка к значению, не роли | `--nl-btn-primary-bg` |

---

## 5. Rules

### R1 — Однонаправленная иерархия

Component Token ссылается **только** на Semantic или Foundation. Никогда на другой Component Token другого компонента (исключение: shared alias в документации, не в CSS).

### R2 — Один компонент — один префикс

Все токены Button начинаются с `--nl-btn-`. Смешивание `--button-` и `--nl-btn-` запрещено.

### R3 — Состояния через отдельные токены

Hover/active/focus/disabled — отдельные токены, не hardcoded в псевдоклассах components.css.

```text
--nl-btn-primary-bg
--nl-btn-primary-bg-hover
--nl-btn-primary-bg-active
--nl-btn-primary-bg-disabled
```

### R4 — components.css не содержит примитивов

В `components.css` допустимо:

- `var(--nl-btn-primary-bg)` ✅
- `var(--nl-color-primary)` ⚠️ только на переходный период
- `#0d9488` ❌
- `16px` ❌ (использовать `--nl-space-4` или `--nl-btn-pad-x-md`)

### R5 — Спецификация перед реализацией

Каждый новый component token документируется в `docs/components/{Component}.md` до добавления в `variables.css`.

### R6 — Dark theme

Переопределение component tokens в `[data-theme="dark"]` (будущее), не дублирование селекторов в `components.css`.

### R7 — Обратная совместимость

Удаление или переименование component token = major version bump DS + запись в `Changelog.md`.

### R8 — Минимальный набор

Вводить только токены, используемые в CSS. Не создавать «на будущее» без спецификации.

---

## 6. Examples

Примеры **имен и цепочек** (не CSS-реализация).

### Button — Primary

| Component Token | Resolves to |
|-----------------|-------------|
| `--nl-btn-primary-bg` | `var(--nl-color-primary)` |
| `--nl-btn-primary-bg-hover` | `var(--nl-color-primary-hover)` |
| `--nl-btn-primary-fg` | `var(--nl-color-surface)` |
| `--nl-btn-primary-border` | `transparent` → future: semantic transparent alias |
| `--nl-btn-primary-shadow-hover` | `var(--nl-shadow-sm)` |
| `--nl-btn-primary-ring` | `var(--nl-color-primary)` |

### Button — Ghost

| Component Token | Resolves to |
|-----------------|-------------|
| `--nl-btn-ghost-bg` | `transparent` |
| `--nl-btn-ghost-bg-hover` | `var(--nl-color-surface-alt)` |
| `--nl-btn-ghost-fg` | `var(--nl-color-text)` |
| `--nl-btn-ghost-border` | `var(--nl-color-border)` |

### Button — Size md

| Component Token | Resolves to |
|-----------------|-------------|
| `--nl-btn-height-md` | `var(--nl-space-10)` |
| `--nl-btn-pad-x-md` | `var(--nl-space-6)` |
| `--nl-btn-pad-y-md` | `var(--nl-space-3)` |
| `--nl-btn-font-size-md` | `var(--nl-font-size-md)` |
| `--nl-btn-radius-md` | `var(--nl-radius-md)` |
| `--nl-btn-gap-md` | `var(--nl-space-2)` |

### Card — Default (будущий компонент)

| Component Token | Resolves to |
|-----------------|-------------|
| `--nl-card-bg` | `var(--nl-color-surface)` |
| `--nl-card-border` | `var(--nl-color-border)` |
| `--nl-card-shadow` | `var(--nl-shadow-md)` |
| `--nl-card-shadow-hover` | `var(--nl-shadow-lg)` |
| `--nl-card-radius` | `var(--nl-radius-lg)` |
| `--nl-card-pad` | `var(--nl-space-6)` |

### Input — Default (будущий компонент)

| Component Token | Resolves to |
|-----------------|-------------|
| `--input-bg` | `var(--nl-color-surface)` |
| `--input-border` | `var(--nl-color-border)` |
| `--input-border-focus` | `var(--nl-color-primary)` |
| `--input-fg` | `var(--nl-color-text)` |
| `--input-placeholder-fg` | `var(--nl-color-text-secondary)` |
| `--input-height-md` | `var(--nl-space-10)` |
| `--input-pad-x` | `var(--nl-space-4)` |
| `--input-radius` | `var(--nl-radius-sm)` |

### Полная цепочка (пример)

```text
--nl-btn-primary-bg-hover
  → var(--nl-color-primary-hover)
    → var(--brand-700)
      → #0f766e
```

---

## 7. Do / Don't

### Do

| ✓ | Практика |
|---|----------|
| ✓ | Именовать токены по конвенции `--{component}-{property}-{variant?}-{state?}` |
| ✓ | Ссылаться на semantic colors для всех цветовых ролей |
| ✓ | Использовать `--nl-space-*`, `--nl-radius-*`, `--nl-shadow-*` для размеров и эффектов |
| ✓ | Документировать каждый токен в спецификации компонента |
| ✓ | Группировать токены в `variables.css` по компонентам |
| ✓ | Переопределять component tokens для dark theme |
| ✓ | Держать `components.css` тонким — только layout компонента и ссылки на tokens |

### Don't

| ✗ | Антипаттерн |
|---|-------------|
| ✗ | Hex/rgb/hsl напрямую в component tokens |
| ✗ | Ссылка component → component другого типа (`--nl-card-btn-bg` → `--nl-btn-primary-bg`) |
| ✗ | Дублировать semantic в component без добавленной ценности |
| ✗ | Создавать токен на каждый пиксель («token bloat») |
| ✗ | Использовать component tokens в `typography.css` или `layout.css` |
| ✗ | Менять foundation при правке одного компонента |
| ✗ | Пропускать состояния disabled/focus в матрице токенов |

---

## 8. Future Components

Планируемые компоненты и префиксы component tokens. Статус реализации — по мере появления спецификаций в `docs/components/`.

| Компонент | Префикс | Приоритет | Спецификация |
|-----------|---------|-----------|--------------|
| Button | `--nl-btn-*` | P0 | `docs/components/Button.md` (draft) |
| Input / Textarea | `--input-*` | P0 | planned |
| Card | `--nl-card-*` | P0 | planned |
| Badge | `--badge-*` | P1 | planned |
| Navbar | `--nav-*` | P1 | planned |
| Modal / Dialog | `--modal-*` | P1 | planned |
| Toast / Alert | `--alert-*` | P1 | planned |
| Toggle / Checkbox / Radio | `--control-*` or `--toggle-*` | P2 | planned |
| Tabs | `--tabs-*` | P2 | planned |
| Tooltip | `--tooltip-*` | P2 | planned |
| Avatar | `--avatar-*` | P2 | planned |
| Table | `--table-*` | P3 | planned |

### Roadmap внедрения в variables.css

| Версия DS | Действие |
|-----------|----------|
| **v0.6** | Секция `Component Tokens — Button` в `variables.css` |
| **v0.7** | Input, Card |
| **v0.8** | Badge, Nav, Alert |
| **v0.9** | Dark theme overrides для component tokens |
| **v1.0** | Стабильный контракт; freeze breaking changes |

### Shared tokens (редкий случай)

Если два компонента разделяют идентичное значение (например, focus ring), создаётся **semantic** token `--nl-color-focus-ring`, а не shared component token.

---

## Changelog

| Версия | Дата | Изменение |
|--------|------|-----------|
| 0.1.0 | 2026-06-26 | Phase 6: начальная архитектура Component Tokens |

---

*Следующий шаг: добавление секции `--nl-btn-*` в `variables.css` (Phase 6b) и реализация в `components.css` согласно `Button.md`.*
