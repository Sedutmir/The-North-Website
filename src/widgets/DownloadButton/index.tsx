import { useTranslation } from 'react-i18next';
import styles from './index.module.css';

export function DownloadButton({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <a
      className={styles.downloadButton + (className ? ' ' + className : '')}
      href='./TheNorth.apk'
      download='TheNorth.apk'
    >
      {t('Download')}
    </a>
  );
}
