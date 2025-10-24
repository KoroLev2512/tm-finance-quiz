# 🌍 Мультиязычность / Multilanguage Support

## Поддерживаемые языки

Проект поддерживает 4 языка:

- 🇪🇸 **Español** (по умолчанию) - Испанский
- 🇬🇧 **English** - Английский
- 🇫🇷 **Français** - Французский
- 🇩🇪 **Deutsch** - Немецкий

## Как это работает

### Переключатель языков

Переключатель языков расположен в header страницы справа от логотипа. При наведении показывается выпадающее меню со всеми доступными языками.

Дизайн переключателя:
- Обычное состояние: Иконка глобуса + название языка + стрелка вниз
- При hover: Меню с выбором языка
- Активный язык: Выделен цветом

### Автоматическое определение языка

При первом посещении сайта система автоматически определяет язык браузера пользователя и устанавливает соответствующий язык интерфейса, если он поддерживается.

**Приоритет выбора языка:**
1. 🔵 **Сохранённый язык** - если пользователь ранее выбрал язык вручную
2. 🌐 **Язык браузера** - определяется автоматически при первом визите
3. 🇪🇸 **Язык по умолчанию** - испанский (если браузерный язык не поддерживается)

**Примеры определения:**
- Браузер на английском (`en-US`) → установится English
- Браузер на французском (`fr-FR`) → установится Français
- Браузер на немецком (`de-DE`) → установится Deutsch
- Браузер на итальянском (`it-IT`) → установится Español (язык не поддерживается)

### Сохранение выбранного языка

Выбранный язык (вручную или автоматически) сохраняется в `localStorage` браузера и применяется при следующих визитах.

## Структура файлов

```
shared/
  i18n/
    locales.ts                 # Конфигурация доступных языков
    LanguageContext.tsx        # React Context для управления языком
    translations/
      index.ts                 # Экспорт всех переводов
      es.ts                    # Испанские переводы
      en.ts                    # Английские переводы
      fr.ts                    # Французские переводы
      de.ts                    # Немецкие переводы
  components/
    LanguageSwitcher.tsx       # Компонент переключателя языков
```

## Как добавить новый перевод

### 1. Добавьте язык в конфигурацию

Отредактируйте `shared/i18n/locales.ts`:

```typescript
export const locales = ['es', 'en', 'fr', 'de', 'it'] as const; // добавили 'it'

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',  // добавили итальянский
};
```

### 2. Создайте файл перевода

Создайте файл `shared/i18n/translations/it.ts` по образцу других языков:

```typescript
export const it = {
  hero: {
    title: 'QUESTIONARIO:\nLA TUA MENTALITÀ FINANZIARIA',
    subtitle: 'TEST DI 2 MINUTI',
    man: 'Uomo',
    woman: 'Donna',
    // ... и так далее
  },
  questions: [
    {
      text: 'Lunedì mattina. Come inizi la giornata?',
      options: [
        'Bevo caffè e pianifico la giornata con calma.',
        // ...
      ],
    },
    // ... 15 вопросов
  ],
  result: {
    title: 'Probabilità della tua crescita finanziaria:',
    // ...
  },
  contact: {
    // ...
  },
  menu: {
    // ...
  },
};
```

### 3. Добавьте в индекс

Отредактируйте `shared/i18n/translations/index.ts`:

```typescript
import { it } from './it';

export const translations: Record<Locale, typeof es> = {
  es,
  en,
  fr,
  de,
  it,  // добавили
};
```

### 4. Пересоберите проект

```bash
npm run build
```

## Использование в компонентах

### Получение переводов

```typescript
import { useLanguage } from '@/shared/i18n/LanguageContext';

export default function MyComponent() {
  const { t, locale, setLocale } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
    </div>
  );
}
```

### Смена языка программно

```typescript
const { setLocale } = useLanguage();

// Сменить язык на английский
setLocale('en');
```

## Текущее покрытие переводами

✅ **Полностью переведено:**
- Главная страница (hero section)
- Меню навигации
- Текстовые вопросы квиза (вопросы 1-5, 7-8, 10-11, 14-15)
- Страница результатов (`/result`)

⚠️ **Частично переведено:**
- Вопросы с картинками (6, 9, 12, 13) - остались на испанском
- Форма контакта - нужно добавить переводы

## SEO и мультиязычность

При необходимости можно добавить:
- `<html lang="...">` атрибут с динамическим языком
- Meta теги для разных языков
- Sitemap с альтернативными языковыми версиями
- `hreflang` теги для SEO

## Дополнительные возможности

### Добавление региональных вариантов

Можно добавить региональные варианты языков, например:
- `en-US` - Английский (США)
- `en-GB` - Английский (Великобритания)
- `es-MX` - Испанский (Мексика)
- `es-ES` - Испанский (Испания)

### Форматирование чисел и дат

При необходимости можно добавить локализацию форматов:

```typescript
const formatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'USD'
});
```

## Отладка

Если язык не переключается:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что `LanguageProvider` обернул всё приложение
3. Очистите localStorage: `localStorage.removeItem('locale')`
4. Проверьте, что все переводы экспортированы в `translations/index.ts`

## Техническая реализация

- **React Context** - для управления состоянием языка
- **localStorage** - для сохранения выбора пользователя
- **navigator.languages / navigator.language** - для автоматического определения языка браузера
- **CSS-in-JS** - для стилизации переключателя
- **TypeScript** - для типобезопасности переводов

### Как работает автоопределение языка

```typescript
// 1. Проверяем localStorage
const savedLocale = localStorage.getItem('locale');
if (savedLocale) {
  return savedLocale; // Используем сохранённый
}

// 2. Определяем язык браузера
const browserLanguages = navigator.languages || [navigator.language];
// Например: ["en-US", "en", "es"]

// 3. Ищем первый поддерживаемый язык
for (const lang of browserLanguages) {
  const langCode = lang.split('-')[0]; // "en-US" -> "en"
  if (supportedLanguages.includes(langCode)) {
    return langCode; // Нашли поддерживаемый
  }
}

// 4. Fallback на язык по умолчанию
return 'es'; // Испанский
```

Все переводы типизированы, поэтому при добавлении нового языка TypeScript проверит соответствие структуры.

