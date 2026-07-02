# Coding Rules — NL Design System

## Структура файлов

- Один concern — один CSS-файл в `css/`
- Паттерны — в `patterns/<category>/`
- Не дублировать токены вне `variables.css`

## CSS

- Использовать `:root` и `[data-theme="dark"]` для тем
- Имена классов: `nl-` префикс опционален на этапе v0; предпочтительно `component__element`
- Не использовать `!important`, кроме утилит reduced-motion
- Transitions: `cubic-bezier(0.4, 0, 0.2, 1)` как studio default

## HTML

- Семантические теги: `header`, `nav`, `main`, `section`, `article`, `footer`
- `aria-*` для интерактивных элементов
- `label` связан с `id` поля формы

## JavaScript

- `'use strict'`
- Progressive enhancement
- `IntersectionObserver` для reveal
- Уважать `prefers-reduced-motion`

## Git & docs

- Обновлять `Changelog.md` при значимых изменениях
- Обновлять `Components.md` при добавлении компонента
- README — кратко, без дублирования всей документации

## Запрещено без явного запроса

- Подключать DS к существующему Portfolio
- Удалять или перемещать файлы основного проекта
- Копировать весь `style.css` Portfolio в DS без рефакторинга в токены
