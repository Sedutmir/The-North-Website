import styles from './index.module.css';

export function DownloadButton({ className }: { className?: string }) {
  return (
    <a
      className={styles.downloadButton + (className ? ' ' + className : '')}
      href='./public/TheNorth.apk'
      download='TheNorth.apk'
    >
      Download
    </a>
  );
}
