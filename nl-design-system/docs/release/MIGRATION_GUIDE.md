# Migration Guide — NL Design System v1.0 Beta

Руководство по интеграции NL Design System в существующие проекты.

---

## Стратегия миграции

NL DS v1.0 Beta использует **поэтапную dual-class migration**:

1. Подключить CSS библиотеки.
2. Добавить классы `nl-*` **рядом** с существующими классами.
3. Визуально проверить в браузере.
4. Постепенно удалять legacy CSS после полной уверенности.

Не удаляйте legacy-классы на первом этапе.

---

## Шаг 1 — Подключение CSS

```html
<!-- После шрифтов, до проектных стилей -->
<link rel="stylesheet" href="nl-design-system/css/variables.css">
<link rel="stylesheet" href="nl-design-system/css/reset.css">
<link rel="stylesheet" href="nl-design-system/css/typography.css">
<link rel="stylesheet" href="nl-design-system/css/layout.css">
<link rel="stylesheet" href="nl-design-system/css/components.css">
<link rel="stylesheet" href="style.css">
```

### Коллизии токенов

С v0.9.0 все токены NL DS используют префикс `--nl-*`.  
Legacy-проекты с `--shadow-*`, `--radius-*`, `--color-*` **не конфликтуют** с NL DS.

---

## Шаг 2 — Button migration

### Было

```html
<a href="#contact" class="btn btn--primary">Обсудить проект</a>
```

### Стало (dual-class)

```html
<a href="#contact" class="btn btn--primary nl-btn nl-btn--primary nl-btn--lg">
  <span class="nl-btn__label">Обсудить проект</span>
</a>
```

### Маппинг классов

| Legacy | NL DS |
|--------|-------|
| `btn--primary` | `nl-btn--primary` |
| `btn--secondary` | `nl-btn--secondary` |
| `btn--ghost` | `nl-btn--ghost` |
| `btn--sm` | `nl-btn--sm` |
| `btn--full` | `nl-btn--block` |
| `btn__text` | `nl-btn__label` (опционально, на финальном этапе) |

### Submit / loading

```html
<button type="submit" class="btn btn--primary btn--full nl-btn nl-btn--primary nl-btn--md nl-btn--block">
  <span class="btn__text">Отправить</span>
  <span class="btn__loader" aria-hidden="true"></span>
</button>
```

Loading-состояние: `aria-busy="true"` или `.nl-btn--loading` + `.nl-btn__loader`.

---

## Шаг 3 — Card migration

### Было

```html
<a href="..." class="case-card case-card--premium">
  <div class="case-card__visual">...</div>
  <div class="case-content">
    <h3 class="case-card__title">Title</h3>
    ...
  </div>
</a>
```

### Стало (dual-class)

```html
<a href="..." class="case-card case-card--premium nl-card nl-card--interactive nl-card--lg">
  <div class="case-card__visual nl-card__media">...</div>
  <div class="case-content nl-card__body">
    <h3 class="case-card__title nl-card__title">Title</h3>
    <p class="case-card__desc nl-card__description">...</p>
    <div class="case-card__footer nl-card__footer">
      <span class="case-card__cta nl-card__actions">...</span>
    </div>
  </div>
</a>
```

### Структурные отличия

| Portfolio | IC-002 Card | Решение |
|-----------|-------------|---------|
| `case-card__type` | `nl-card__eyebrow` | Оставить в `nl-card__body` |
| `case-card__badge` | — | Сохранить внутри `nl-card__media` |
| `case-card__tags` | — | Оставить в `nl-card__footer` |

---

## Шаг 4 — Badge migration

### Было

```html
<span>UX/UI</span>
```

### Стало

```html
<span class="nl-badge nl-badge--neutral nl-badge--sm">
  <span class="nl-badge__label">UX/UI</span>
</span>
```

### Рекомендуемые variants

| Сценарий | Variant |
|----------|---------|
| Technology tags | `nl-badge--neutral` |
| Status (Stable, Beta) | `nl-badge--success`, `--warning` |
| Case tags | `nl-badge--outline` |

---

## Шаг 5 — Визуальная проверка

1. Откройте playground для сравнения: `patterns/buttons/button.html`, `patterns/cards/card.html`, `patterns/badges/badge.html`
2. Проверьте hover, focus, loading states
3. Проверьте mobile breakpoints
4. Убедитесь, что проектные стили (`style.css`) по-прежнему задают брендовый вид

---

## Шаг 6 — Удаление legacy (post-Beta)

После полной уверенности:

1. Удалите legacy-классы из HTML (`btn`, `case-card`)
2. Удалите или изолируйте legacy CSS
3. Обновите JS-селекторы (`.btn` → `.nl-btn`)
4. Запустите регрессионное тестирование

---

## Чеклист миграции

- [ ] CSS NL DS подключён в правильном порядке
- [ ] Шрифты Syne + Figtree подключены
- [ ] Buttons — dual-class migration
- [ ] Cards — dual-class migration
- [ ] Badges — замена span-тегов
- [ ] Нет коллизий `:root` токенов
- [ ] Визуальная проверка пройдена
- [ ] Legacy CSS удалён (финальный этап)

---

## Поддержка

Спецификации: `docs/components/`  
Архитектура токенов: `docs/foundations/Component-Tokens.md`  
Принципы: `docs/Design-Principles.md`
