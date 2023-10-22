import YouTube from '@/entities/YouTube';
import { SocialIcon } from '@/shared/components';

import ParallaxItem from './Parallax/ParallaxItem';

import './Home.css';

export default function Home() {
  const socials = [
    { social: 'vk', url: 'https://vk.com/club211987643' },
    { social: 'mail', url: 'mailto:ilyazdorovtsov@gmail.com' },
  ];

  return (
    <>
      <ParallaxItem />
      <section className={'subscribe'}>
        <div>
          <h2>Subscribe to the newsletter</h2>
          <form>
            <input type='email' name='email' placeholder={'E-mail'} required={true} />
            <input type='submit' value='Subscribe' />
          </form>
        </div>
      </section>
      <section className='social'>
        <div>
          <YouTube url='https://www.youtube.com/embed/cugalQnsVrw?si=MbcGliGJPJJDvkUU' />

          <div className={'social-text'}>
            <p>
              <b>The North</b> a project that originated during student times!
            </p>
            <p>
              We set ourselves the goal of promoting game construction at the Moscow Polytechnic University and created
              a <b>large</b> and
              <b>interesting</b> game about <b>vikings</b>.
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
