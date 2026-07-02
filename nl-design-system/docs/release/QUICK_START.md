# Quick Start — NL Design System v1.0 Beta

Быстрое подключение NL Design System к новому проекту.

---

## 1. Подключение CSS

Скопируйте папку `nl-design-system/` в проект и подключите стили **в строгом порядке**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="path/to/nl-design-system/css/variables.css">
<link rel="stylesheet" href="path/to/nl-design-system/css/reset.css">
<link rel="stylesheet" href="path/to/nl-design-system/css/typography.css">
<link rel="stylesheet" href="path/to/nl-design-system/css/layout.css">
<link rel="stylesheet" href="path/to/nl-design-system/css/components.css">
```

> Проектные стили подключайте **после** `components.css`, если нужно переопределить отдельные правила.

---

## 2. Минимальная страница

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project — NL Design System</title>
  <!-- CSS links (см. выше) -->
</head>
<body>
  <div class="layout-page">
    <main class="layout-page-main">
      <div class="layout-section">
        <div class="layout-container layout-stack layout-stack--gap-6">
          <h1 class="type-h2">Hello, NL Design System</h1>
          <p class="type-lead">Product-grade UI with calm premium aesthetics.</p>
          <div class="layout-cluster layout-cluster--gap-4">
            <button type="button" class="nl-btn nl-btn--primary">
              <span class="nl-btn__label">Get started</span>
            </button>
            <button type="button" class="nl-btn nl-btn--ghost">
              <span class="nl-btn__label">Learn more</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## 3. Компоненты

### Button (IC-001)

```html
<button type="button" class="nl-btn nl-btn--primary nl-btn--md">
  <span class="nl-btn__label">Primary action</span>
</button>
```

Варианты: `--primary`, `--secondary`, `--ghost`, `--outline`, `--danger`, `--link`  
Размеры: `--sm`, `--md`, `--lg`, `--xl`

### Card (IC-002)

```html
<article class="nl-card nl-card--elevated">
  <header class="nl-card__header">
    <h3 class="nl-card__title type-h5">Card title</h3>
    <p class="nl-card__description type-body--sm type-text-secondary">Description</p>
  </header>
</article>
```

### Badge (IC-003)

```html
<span class="nl-badge nl-badge--neutral nl-badge--sm">
  <span class="nl-badge__label">AI</span>
</span>
```

---

## 4. Layout primitives

| Класс | Назначение |
|-------|------------|
| `layout-page` | Обёртка страницы |
| `layout-container` | Центрированный контейнер |
| `layout-section` | Вертикальные отступы секции |
| `layout-stack` | Вертикальный stack |
| `layout-cluster` | Горизонтальная группа |
| `layout-auto-grid` | Адаптивная сетка |

---

## 5. Typography utilities

| Класс | Назначение |
|-------|------------|
| `type-display`, `type-h1`–`type-h6` | Заголовки |
| `type-lead`, `type-body` | Body-текст |
| `type-eyebrow`, `type-caption` | Мета-лейблы |
| `type-text-secondary` | Приглушённый текст |

---

## 6. Playground & Docs

| Ресурс | Путь |
|--------|------|
| Component Gallery | `playground/index.html` |
| Documentation Site | `docs/index.html` |
| Button Playground | `patterns/buttons/button.html` |
| Card Playground | `patterns/cards/card.html` |
| Badge Playground | `patterns/badges/badge.html` |

---

## 7. Design Tokens

Используйте только namespaced tokens:

```css
.my-block {
  color: var(--nl-color-text);
  padding: var(--nl-space-4);
  border-radius: var(--nl-radius-md);
}
```

Полная архитектура: `docs/foundations/Component-Tokens.md`

---

## Следующий шаг

- Миграция существующего проекта → [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- Реестр компонентов → [COMPONENT_REGISTRY.md](./COMPONENT_REGISTRY.md)
