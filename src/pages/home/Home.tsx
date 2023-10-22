import { useTranslation } from 'i18nano';

import YouTube from '@/entities/YouTube';
import { SocialIcon } from '@/shared/components';

import ParallaxItem from './Parallax/ParallaxItem';

import './Home.css';

export default function Home() {
  const i18n = useTranslation();

  const socials = [
    { social: 'vk', url: 'https://vk.com/club211987643' },
    { social: 'mail', url: 'mailto:ilyazdorovtsov@gmail.com' },
  ];

  return (
    <>
      <ParallaxItem />
      <section className={'subscribe'}>
        <div>
          <h2>{i18n('home/subcribe_newsletter')}</h2>
          <form>
            <input type='email' name='email' placeholder={'E-mail'} required={true} />
            <input type='submit' value={i18n('home/subscribe_button')} />
          </form>
        </div>
      </section>
      <section className='social'>
        <div>
          <YouTube url='https://www.youtube.com/embed/cugalQnsVrw?si=MbcGliGJPJJDvkUU' />

          <div className={'social-text'}>
            {/* TODO: Add translate */}
            <p>
              <b>The North</b> - проект, зародившийся в студенческие времена!
            </p>
            <p>
              Мы поставили себе цель продвинуть игростроительство в Московском Политехе и создали <b>крупную</b> и{' '}
              <b>интересную</b> игру про <b>викингов</b>.{' '}
            </p>
          </div>

          <ul className='social-icons'>
            {socials.map(({ social, url }) => {
              return (
                <li key={social}>
                  <SocialIcon social={social} url={url} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
