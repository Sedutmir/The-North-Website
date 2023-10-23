import styles from './index.module.css';

export function YouTube({ url, className }: { url: string; className?: string }) {
  return (
    <iframe
      className={styles.youtube + (className ? ' ' + className : '')}
      src={url}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
}
