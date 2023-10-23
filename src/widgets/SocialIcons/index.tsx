import { SocialIcon } from '@/entities';

import styles from './index.module.css';

export function SocialIcons({ size = 'normal' }: { size?: 'normal' | 'big' }) {
  const socials = [
    { social: 'vk', url: 'https://vk.com/club211987643' },
    { social: 'mail', url: 'mailto:ilyazdorovtsov@gmail.com' },
  ];

  return (
    <ul className={styles.ul}>
      {socials.map((social) => (
        <li key={social.url}>
          <SocialIcon size={size} social={social.social} url={social.url} />
        </li>
      ))}
    </ul>
  );
}
