import { useTranslation } from 'i18nano';
import ParallaxItem from './Parallax/ParallaxItem';

import Discord from '../../assets/icons/discord.svg';
import Telegram from '../../assets/icons/telegram.svg';
import VK from '../../assets/icons/vk.svg';
import Twitch from '../../assets/icons/twitch.svg';
import GitHub from '../../assets/icons/github.svg';

import './Home.css';

export default function Home() {
  const i18n = useTranslation();

  return (
    <>
      <ParallaxItem />
      <section className={'subscribe'}>
        <div>
          <h2>{i18n('subcribe_newsletter')}</h2>
          <form>
            <input type="email" name="email" placeholder={'E-mail'} required={true} />
            <input type="submit" value={i18n('subscribe_button')} />
          </form>
        </div>
      </section>
      <section className="social">
        <div>
          {/* YouTube Widget */}
          <iframe
            width="560"
            height="315"
            style={{ border: '0' }}
            src="https://www.youtube.com/embed/cugalQnsVrw?si=MbcGliGJPJJDvkUU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className={'social-text'}>
            {/* TODO: Add translate */}
            <p>
              <b>The North</b> - проект, зародившийся в студенческие времена!
            </p>
            <p>
              Мы поставили себе цель продвинуть игростроительство в Московском Политехе и создали{' '}
              <b>крупную</b> и <b>интересную</b> игру про <b>викингов</b>.{' '}
            </p>
          </div>

          {/* TODO: Add relevant socials */}
          {/* Maybe generate from config? */}
          <ul className="social-icons">
            <li>
              <a href="#">
                <img src={Discord} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Telegram} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={VK} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Twitch} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GitHub} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
