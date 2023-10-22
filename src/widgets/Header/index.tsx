import { useTranslation } from 'i18nano';
import { NavLink } from 'react-router-dom';

import { LanguageSelect } from '@components';

import logo from '@assets/TheNorthWhite.png';

import './index.css';

export function Header() {
  const i18n = useTranslation();

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
              {i18n('home')}
            </NavLink>
          </li>
          <li>
            <NavLink to='/privacy' className={classLink}>
              {i18n('privacy')}
            </NavLink>
          </li>
          <li>
            <NavLink to='/translation' className={classLink}>
              {i18n('translation')}
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' className={classLink}>
              {i18n('blog')}
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={classLink}>
              {i18n('contact')}
            </NavLink>
          </li>
        </ul>

        <LanguageSelect />
      </nav>
    </header>
  );
}
