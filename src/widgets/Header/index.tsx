import { NavLink } from 'react-router-dom';

import logo from '@assets/TheNorthWhite.png';

import './index.css';

export function Header() {
  // Display underline for active link
  const classLink = ({ isActive }: { isActive: boolean }) => (isActive ? 'link active' : 'link');

  return (
    <header>
      <nav>
        <NavLink to='/' className={'logo-wrapper'}>
          <img src={logo} alt='Logo' className={'logo'} />
        </NavLink>

        <ul>
          <li>
            <NavLink to='/' className={classLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/privacy' className={classLink}>
              Privacy
            </NavLink>
          </li>
          <li>
            <NavLink to='/translation' className={classLink}>
              Translaton
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' className={classLink}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={classLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
