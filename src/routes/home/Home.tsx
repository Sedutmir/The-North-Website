import { useTranslation } from 'i18nano';
import ParallaxItem from './Parallax/ParallaxItem';

import './Home.css';
import SocialIcon from '../../components/SocialIcon/SocialIcon';

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
          <h2>{i18n('subcribe_newsletter')}</h2>
          <form>
            <input type='email' name='email' placeholder={'E-mail'} required={true} />
            <input type='submit' value={i18n('subscribe_button')} />
          </form>
        </div>
      </section>
      <section className='social'>
        <div>
          {/* YouTube Widget */}
          <iframe
            width='560'
            height='315'
            style={{ border: '0' }}
            src='https://www.youtube.com/embed/cugalQnsVrw?si=MbcGliGJPJJDvkUU'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>

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

          {/* TODO: Add relevant socials */}
          {/* Maybe generate from config? */}
          <ul className='social-icons'>
            {socials.map(({ social, url }) => {
              return (
                <li>
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
