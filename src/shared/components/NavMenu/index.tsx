import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

type MenuItem = { title: string; to: string };
type MenuItems = Array<MenuItem>;

interface NavMenuProps {
  items: MenuItems;
  className?: string;
}

export function NavMenu({ items, className }: NavMenuProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) => styles.link + (isActive ? ' ' + styles.active : '');
  let ulClasses = styles.ul;

  if (className) ulClasses += ' ' + className;

  return (
    <ul className={ulClasses}>
      {items.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} className={linkClass}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
