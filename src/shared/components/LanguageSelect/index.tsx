import { useEffect, useState } from 'react';

import { useTranslationChange } from 'i18nano';

import './index.css';

export function LanguageSelect() {
  const [language, setLanguage] = useState('en');
  const changeLanguage = (ev: { target: { value: string } }) => {
    setLanguage(ev.target.value);
  };

  const translation = useTranslationChange();
  useEffect(() => {
    translation.change(language);
  }, [language, translation]);

  return (
    <select name='language' id='language' onChange={changeLanguage}>
      {translation.all.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}