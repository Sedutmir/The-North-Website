import { NavLink } from 'react-router-dom';

import logoStroke from '@/assets/TheNorth.png';
import logoBlack from '@/assets/TheNorthBlack.png';
import logoWhite from '@/assets/TheNorthWhite.png';

import styles from './index.module.css';

export function Logo({ type, className }: { type?: 'White' | 'Black' | 'Stroke'; className?: string }) {
  let logo;

  switch (type) {
    case 'White':
      logo = logoWhite;
      break;
    case 'Black':
      logo = logoBlack;
      break;
    default:
      logo = logoStroke;
      break;
  }

  return (
    <NavLink to='/'>
      <img className={styles.logo + (className ? ' ' + className : '')} src={logo} alt='Logo' />
    </NavLink>
  );
}
