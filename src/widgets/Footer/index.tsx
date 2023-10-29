import styles from './index.module.css';

import { useTranslation } from 'react-i18next';

export function Footer() {
  // For printing actual year
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {year} {t('Copyright')}
      </p>
    </footer>
  );
}
