import { useTranslation } from "i18nano";

import { NavLink } from "react-router-dom";

import logo from "../assets/TheNorthWhite.png";
import "./Header.css";
import LanguageSelect from "../components/LanguageSelect/LanguageSelect";

export default function Header() {
  const i18n = useTranslation();

  // Display underline for active link
  const class_link = ({ isActive }: { isActive: boolean }) =>
    isActive ? "link active" : "link";

  return (
    <header>
      <nav>
        <NavLink to="/" className={"logo-wrapper"}>
          <img src={logo} alt="Logo" className={"logo"} />
        </NavLink>

        <ul>
          <li>
            <NavLink to="/" className={class_link}>
              {i18n("home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy" className={class_link}>
              {i18n("privacy")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/translation" className={class_link}>
              {i18n("translation")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={class_link}>
              {i18n("blog")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={class_link}>
              {i18n("contact")}
            </NavLink>
          </li>
        </ul>

        <LanguageSelect />
      </nav>
    </header>
  );
}
