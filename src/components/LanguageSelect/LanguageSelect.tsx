import { useEffect, useState } from "react";
import { useTranslationChange } from "i18nano";

import "./LanguageSelect.css";

export default function LanguageSelect() {
    const [language, setLanguage] = useState('en');
    const changeLanguage = (ev: { target: { value: string; }; }) => {
        setLanguage(ev.target.value);
    }

    const translation = useTranslationChange();
    useEffect(
        () => {
            translation.change(language);
    }, [language]);


    return <select name="language" id="language" onChange={changeLanguage}>
        {translation.all.map((lang) => (
            <option key={lang} value={lang}>
                {lang.toUpperCase()}
            </option>
        ))}
    </select>
}
