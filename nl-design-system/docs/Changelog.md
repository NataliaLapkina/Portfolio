# Changelog — NL Design System

Формат основан на [Keep a Changelog](https://keepachangelog.com/).

## [0.9.0] — 2026-06-26

### Changed

- **Namespace refactor:** все публичные токены получили префикс `--nl-`
- Foundation: `--nl-space-*`, `--nl-radius-*`, `--nl-shadow-*`, `--nl-font-*`, `--nl-container-*`, `--nl-breakpoint-*`, `--nl-duration-*`, `--nl-ease-*`, `--nl-z-*`
- Semantic: `--nl-color-*`
- Component: `--nl-btn-*`, `--nl-card-*`
- Обновлены все ссылки в `css/` и документации `docs/`

### Notes

- Сырые палитры `--neutral-*`, `--brand-*` без изменений
- HTML playground и patterns не изменялись (только классы BEM)
- Библиотека готова к независимому подключению рядом с проектами без коллизий `:root`

## [0.1.0] — 2026-06-26

### Added

- Начальная структура папок `nl-design-system/`
- Заготовки CSS-модулей (`css/`)
- Заготовки JS-модулей (`js/`)
- Папки паттернов (`patterns/`)
- Папки шаблонов (`templates/`)
- Папки ассетов (`assets/`)
- Документация (`docs/`)
- Правила для Cursor (`cursor/`)
- Корневой `README.md`

### Notes

- Код компонентов не реализован
- Библиотека не подключена к сайту Portfolio
