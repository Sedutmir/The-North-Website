import {NavLink} from "react-router-dom";
import logo from "./assets/TheNorthWhite.png";
import "./Header.css";

export default function Header() {
    const class_link = ({ isActive }) => isActive ? "link active" : "link";

    return <header>
        <nav>
            <NavLink to="/">
                <img src={logo} alt="Logo" className={"logo"}/>
            </NavLink>

            <ul>
                <li>
                    <NavLink to="/" className={ class_link }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/privacy" className={ class_link }>
                        Privacy
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/translation" className={ class_link }>
                        Translation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={ class_link }>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={ class_link }>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>;
}