import { SocialIcons } from '@/widgets/SocialIcons';
import styles from './index.module.css';

export default function Contact() {
  return (
    <section className={styles.contacts}>
      <SocialIcons size='big' />
    </section>
  );
}
