# ✅ Исправление команды start для статического экспорта

## 🐛 **Проблема:**

При запуске `npm run start` возникала ошибка:
```
Error: Could not find a production build in the 'build' directory. 
Try building your app with 'next build' before starting the production server.
```

## 🔍 **Причина:**

Команда `next start` предназначена для серверного режима Next.js, но мы используем статический экспорт (`output: 'export'`), который создает файлы в папке `build/`.

## ✅ **Решение:**

### **1. Обновлены скрипты в `package.json`:**

```json
{
  "scripts": {
    "dev": "next dev",           // Разработка
    "build": "next build",       // Сборка
    "start": "npx serve build",   // Запуск статических файлов
    "lint": "next lint",          // Линтинг
    "export": "next build",      // Экспорт
    "preview": "npx serve build" // Предварительный просмотр
  }
}
```

### **2. Установлен пакет `serve`:**

```bash
npm install --save-dev serve
```

## 🚀 **Команды для работы:**

### **Разработка:**
```bash
npm run dev
```
- Запускает Next.js в режиме разработки на `http://localhost:3000`

### **Сборка:**
```bash
npm run build
```
- Создает статические файлы в папке `build/`

### **Запуск продакшн версии:**
```bash
npm run start
```
- Запускает локальный сервер для статических файлов из папки `build/`

### **Предварительный просмотр:**
```bash
npm run preview
```
- Аналогично `start`, запускает сервер для статических файлов

## 📁 **Структура после сборки:**

```
build/
├── index.html          # Главная страница
├── _next/             # JavaScript и CSS файлы
├── images/            # Изображения
├── icons/             # SVG иконки
├── robots.txt         # SEO файлы
├── sitemap.xml
└── site.webmanifest
```

## 🎯 **Результат:**

- ✅ **`npm run dev`** - работает для разработки
- ✅ **`npm run build`** - создает статические файлы
- ✅ **`npm run start`** - запускает продакшн версию
- ✅ **`npm run preview`** - предварительный просмотр

## 🌐 **Деплой:**

Статические файлы из папки `build/` можно загрузить на любой хостинг:
- **Netlify** - просто перетащите папку `build/`
- **Vercel** - автоматически определит статические файлы
- **GitHub Pages** - загрузите содержимое папки `build/`
- **Apache/Nginx** - скопируйте файлы в корень сайта

## 🎉 **Итог:**

Теперь все команды работают корректно для статического экспорта Next.js!
