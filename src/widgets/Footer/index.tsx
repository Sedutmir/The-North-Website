import styles from './index.module.css';

export function Footer() {
  // For printing actual year
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright © {year} All rights reserved</p>
    </footer>
  );
}
