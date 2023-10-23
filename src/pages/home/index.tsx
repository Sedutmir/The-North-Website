import { Logo } from '@/shared/components';
import { ParallaxItem } from '@/shared/components';

import styles from './index.module.css';
import { DownloadButton, YouTube } from '@/widgets';
import { SocialIcons } from '@/widgets/SocialIcons';

export default function Home() {
  return (
    <section>
      <ParallaxItem>
        <div className={styles.inParallaxWrapper}>
          <Logo type='Stroke' className={styles.logo} />
          <DownloadButton className={styles.downloadButton} />
        </div>
      </ParallaxItem>

      <div className={styles.subscribeBlock}>
        <form action='' className={styles.subscribeForm}>
          <label htmlFor='email' className={styles.subscribeLabel}>
            Subcribe to our Newsletter
          </label>
          <fieldset className={styles.inputs}>
            <input type='email' name='email' id='email' placeholder='E-mail' />
            <input type='submit' value='Subscribe' />
          </fieldset>
        </form>

        <div className={styles.promo}>
          <YouTube url='https://www.youtube.com/embed/cugalQnsVrw?si=HlAuSCGKYq6FwI4S' className={styles.youtube} />
          <div className={styles.promoText}>
            <b>The North</b> is a student project designed to create an interesting game about Vikings!
          </div>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
