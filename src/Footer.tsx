import { useTranslation } from "i18nano";
import "./Footer.css";

export default function Footer() {
    const i18n = useTranslation();

    const year = new Date().getFullYear();

    return <footer>
        <p>Copyright © { year } {i18n('copyright')}</p>
    </footer>;
}
