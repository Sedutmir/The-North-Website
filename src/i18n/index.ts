// TODO: Подумать о структуре файлов перевода, возможно стоит изменить
const translations = {
  en: () => import('./en.json'),
  ru: () => import('./ru.json'),
}

export default translations
