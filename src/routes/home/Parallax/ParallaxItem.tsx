import React from 'react'
import { Parallax } from 'react-parallax'

import Landscape from '../../../assets/Landscape.png'
import TheNorth from '../../../assets/TheNorth.png'

import './ParallaxItem.css'

const ParallaxItem: React.FC = () => (
  <Parallax className='parallax-image' bgImage={Landscape} strength={600}>
    <div className='parallax-items'>
      <img className='parallax-logo' src={TheNorth} />
    </div>
  </Parallax>
)
export default ParallaxItem
