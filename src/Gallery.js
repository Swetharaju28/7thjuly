import React from 'react'
import second from './images/baby3.jpg'
import second1 from './images/b11.jpg'
import second2 from './images/card_2.jpg'
import second3 from './images/n10.jpg'
import second4 from './images/card_thialand.jpg'
import second5 from './images/card_bali.jpg'
import Gallery2 from './Gallery2'
const Gallery = () => {
  return (
    <div className="parent">
        {/* <img src={second} alt="image" className='photo' />
        <img src={second1} alt="image" className='photo' />
        <img src={second2} alt="image" className='photo' />
        <img src={second3} alt="image" className='photo' />
        <img src={second4} alt="image" className='photo' />S
        <img src={second5} alt="image" className='photo' /> */}

        <Gallery2 swetha={second2} />
    </div>
  )
}

export default Gallery