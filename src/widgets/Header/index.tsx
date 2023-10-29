import { LanguageSelect, Logo, NavMenu } from '@/shared/components';
import styles from './index.module.css';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'The-North-Website/' },
    { title: 'Privacy', to: 'The-North-Website/privacy' },
    { title: 'Contact', to: 'The-North-Website/contact' },
  ];

  return (
    <header className={styles.header}>
      <input type='checkbox' name='is_open' className={styles.checkbox} checked={isOpen} />
      <div className={styles.content}>
        <div className={styles.mobileBlock}>
          <button className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'x' : '='}
          </button>
          <Logo type='White' className={styles.logo} />
        </div>
        <NavMenu items={menuItems} className={styles.menu} />
        <div className={styles.languageSelect}>
          <LanguageSelect />
        </div>
      </div>
    </header>
  );
}
