import { useTranslation } from 'i18nano';

import './index.css';

export function Footer() {
  const i18n = useTranslation();

  // For printing actual year
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright © {year} {i18n('footer/copyright')}
      </p>
    </footer>
  );
}
