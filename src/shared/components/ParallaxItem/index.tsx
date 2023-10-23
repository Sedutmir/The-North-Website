import { ReactNode } from 'react';
import { Parallax } from 'react-parallax';

import Landscape from '@/assets/Landscape.png';

import styles from './index.module.css';

export function ParallaxItem({ children }: { children: ReactNode }) {
  return (
    <Parallax className={styles.parallaxImage} bgImage={Landscape} strength={600}>
      <div className={styles.parallaxItems}>{children}</div>
    </Parallax>
  );
}
