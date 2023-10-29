import { languages } from '@/shared/i18n';
import i18next from 'i18next';
import { useEffect, useState } from 'react';

export function LanguageSelect() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  const onSwitchLanguage = (e: { target: { value: string } }) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    i18next.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <select value={lang} onChange={onSwitchLanguage}>
      {languages.map((language) => (
        <option value={language} key={language}>
          {language.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
