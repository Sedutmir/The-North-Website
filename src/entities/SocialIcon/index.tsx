import styles from './index.module.css';

export function SocialIcon({ url, social, size = 'normal' }: { url: string; social: string; size?: 'normal' | 'big' }) {
  return (
    <a href={url} className={styles.a} data-size={size}>
      <img src={`./icons/${social}.svg`} alt={`Link: ${social}`} className={styles.img} />
    </a>
  );
}
