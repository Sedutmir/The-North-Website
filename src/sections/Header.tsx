import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation, useTranslationChange } from "i18nano";
import logo from "../assets/TheNorthWhite.png";
import "./Header.css";

export default function Header() {
    const class_link = ({ isActive }: { isActive: boolean}) => isActive ? "link active" : "link";
    const i18n = useTranslation();
    const translation = useTranslationChange();
    // translation.change('it');

    const [language, setLanguage] = useState('en');

    useEffect(
        () => {
            translation.change(language);
    }, [language]);

    const changeLanguage = (ev: { target: { value: string; }; }) => {
        setLanguage(ev.target.value);
    }

    return <header>
        <nav>
            <NavLink to="/" className={"logo-wrapper"}>
                <img src={logo} alt="Logo" className={"logo"}/>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/" className={ class_link }>
                        {i18n('home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/privacy" className={ class_link }>
                        {i18n('privacy')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/translation" className={ class_link }>
                        {i18n('translation')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={ class_link }>
                        {i18n('blog')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={ class_link }>
                        {i18n('contact')}
                    </NavLink>
                </li>
            </ul>

            <select name="language" id="language" onChange={changeLanguage}>
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
        </nav>
    </header>;
}
