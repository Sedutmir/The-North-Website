// TODO: Подумать о структуре файлов перевода, возможно стоит изменить
export const translations = {
  'en': () => import('./keysets/en.json'),
  'ru': () => import('./keysets/ru.json'),
};
