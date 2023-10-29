import { Logo } from '@/shared/components';
import { ParallaxItem } from '@/shared/components';

import styles from './index.module.css';
import { DownloadButton, YouTube } from '@/widgets';
import { SocialIcons } from '@/widgets/SocialIcons';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
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
            {t('SubscribeLabel')}
          </label>
          <fieldset className={styles.inputs}>
            <input type='email' name='email' id='email' placeholder='E-mail' />
            <input type='submit' value={t('Subscribe')} />
          </fieldset>
        </form>

        <div className={styles.promo}>
          <YouTube url='https://www.youtube.com/embed/cugalQnsVrw?si=HlAuSCGKYq6FwI4S' className={styles.youtube} />
          <div className={styles.promoText}>{t('Promo')}</div>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
