import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  console.log('i18n config - received locale:', locale);

  // Fallback to 'id' if locale is undefined
  const safeLocale = locale || 'id';
  console.log('i18n config - using locale:', safeLocale);

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});