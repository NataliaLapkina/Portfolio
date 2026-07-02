# Contributing — NL Design System

Руководство для разработчиков и AI-ассистентов, работающих с NL Design System.

**Бренд:** Natalia Lapkina — AI & Digital Products  
**Репозиторий:** `nl-design-system/`

---

## Принципы

1. **Spec first** — сначала спецификация в `docs/components/`, затем tokens, затем CSS.
2. **Token-driven** — никаких hex/px в `components.css`; только `--nl-*` tokens.
3. **Namespace** — все публичные токены с префиксом `--nl-`; BEM-классы с префиксом `nl-`.
4. **Calm premium** — см. [Design-Principles.md](../Design-Principles.md).
5. **Minimal scope** — один компонент за итерацию; не трогать unrelated files.

---

## Workflow нового компонента

```text
1. Спецификация     → docs/components/{Name}.md
2. Component Tokens → css/variables.css (секция --nl-{component}-*)
3. CSS Base         → css/components.css (base + elements)
4. CSS Variants     → css/components.css (variants, sizes, modifiers)
5. Playground       → patterns/{category}/{name}.html
6. Registry         → docs/release/COMPONENT_REGISTRY.md
7. Changelog        → docs/Changelog.md
```

### ID компонентов

Формат: `IC-{NNN}` (Interface Component).  
Текущие: IC-001 Button, IC-002 Card, IC-003 Badge.  
Следующий: IC-004 Input.

---

## Именование

### BEM

```text
.nl-{component}                    → block
.nl-{component}__{element}        → element
.nl-{component}--{modifier}       → modifier
```

Примеры: `.nl-btn`, `.nl-btn__label`, `.nl-btn--primary`

### Tokens

```text
--nl-{component}-{property}       → component token
--nl-color-{role}                 → semantic token
--nl-space-{n}                    → foundation token
```

См. [Component-Tokens.md](../foundations/Component-Tokens.md)

---

## CSS Rules

### Порядок подключения

```text
variables.css → reset.css → typography.css → layout.css → components.css
```

### Запрещено

- Прямые hex/rgba в `components.css`
- Ссылки `--brand-600` из components (только через semantic/component tokens)
- Доменные классы (`nl-btn--portfolio`, `nl-card--saas`)
- `!important` без обоснования в спецификации
- Изменение существующих токенов без bump версии

### Разрешено

- Foundation tokens для spacing, radius, shadow
- Semantic tokens для color roles
- Component tokens как aliases

---

## Документация

### Спецификация компонента (обязательные разделы)

1. Purpose  
2. Design Principles  
3. Anatomy  
4. Variants  
5. Sizes  
6. States  
7. Modifiers  
8. Accessibility  
9. Design Tokens  
10. Component API  
11. Usage  
12. Anti-patterns  
13. Future Extensions  

Шаблон: `cursor/component-template.md`

### Playground

- Путь: `patterns/{category}/{component}.html`
- CSS в правильном порядке
- Только классы NL DS
- Шрифты Syne + Figtree

---

## Cursor / AI Assistants

| Файл | Назначение |
|------|------------|
| `cursor/system-prompt.md` | Контекст бренда и DS |
| `cursor/coding-rules.md` | Стандарты вёрстки |
| `cursor/component-template.md` | Шаблон спецификации |

---

## Версионирование

| Тип изменения | Bump |
|---------------|------|
| Новый компонент | Minor (tokens + components) |
| Namespace / breaking tokens | Major |
| Bugfix CSS | Patch |
| Spec only | Spec version |

Текущая версия библиотеки: **v1.0 Beta**  
Tokens: `variables.css` v0.9.1

---

## Code Review Checklist

- [ ] Спецификация существует и актуальна
- [ ] Component tokens в `variables.css`
- [ ] CSS использует только tokens
- [ ] BEM-именование соблюдено
- [ ] Playground создан и работает
- [ ] a11y: focus, contrast, aria
- [ ] `prefers-reduced-motion` учтён
- [ ] Changelog обновлён
- [ ] Registry обновлён

---

## Контакт

**Natalia Lapkina** — AI & Digital Products  
Design System maintainer
