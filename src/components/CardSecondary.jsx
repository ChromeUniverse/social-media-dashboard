import React from 'react'

// social media icons
import FBicon from '../assets/icon-facebook.svg'
import InstaIcon from '../assets/icon-instagram.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import YouTubeIcon from '../assets/icon-youtube.svg'

// up/down arrow icons
import UpArrow from '../assets/icon-up.svg'
import DownArrow from '../assets/icon-down.svg'

function CardSecondary({ mode, platform, quantity, type, deltaType, delta }) {
  
  const icons = {
    facebook: FBicon,
    instagram: InstaIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon
  }

  return (
    <section className={`card-secondary ${mode}-card-secondary`}>
      <div className='card-secondary-header'>
        <p className={`card-secondary-title ${mode}-card-secondary-title`}>
          {type}
        </p>
        <img className='card-secondary-icon' src={icons[platform]} alt="" />
      </div>
      <div className='card-secondary-content'>
        <h3 className={`card-secondary-content-text ${mode}-card-secondary-content-text`}>
          {quantity}
        </h3>
        <div className='card-secondary-content-delta'>
          <img
            className="card-secondary-content-delta-icon"
            src={deltaType === 0 ? DownArrow : UpArrow}
            alt=""
          />
          <p
            className={`card-secondary-content-delta-text ${
              deltaType === 0
                ? "card-secondary-content-delta-text-red"
                : "card-secondary-content-delta-text-green"
            }`}
          >
            {delta}%
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardSecondary