import polyglotI18nProvider from 'ra-i18n-polyglot';
import vietnameseMessages from './vietnamese';
import englishMessages from 'ra-language-english';

const messages: Record<string, any> = {
    vi: vietnameseMessages,
    en: englishMessages,
};

export const i18nProvider = polyglotI18nProvider(
    (locale: string) => messages[locale] || messages.en,
    'vi' // Ngôn ngữ mặc định
);

