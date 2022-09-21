import React from 'react'

// social media icons
import FBicon from '../assets/icon-facebook.svg'
import InstaIcon from '../assets/icon-instagram.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import YouTubeIcon from '../assets/icon-youtube.svg'

// up/down arrow icons
import UpArrow from '../assets/icon-up.svg'
import DownArrow from '../assets/icon-down.svg'

function CardPrimary({ mode, platform, handle, quantity, type, deltaType, delta }) {
  
  const icons = {
    facebook: FBicon,
    instagram: InstaIcon,
    twitter: TwitterIcon,
    youtube: YouTubeIcon
  }

  return (
    <section className={`card-primary card-primary-${platform} ${mode}-card-primary`}>
      <div className="card-primary-header">
        <img className="card-primary-header-icon" src={icons[platform]} alt="" />
        <p className={`card-primary-header-handle ${mode}-card-primary-header-handle`}>{handle}</p>
      </div>
      <div className="card-primary-content">
        <h1 className={`card-primary-title ${mode}-card-primary-title`}>{quantity}</h1>
        <p className={`card-primary-subtitle ${mode}-card-primary-subtitle`}>{type}</p>
      </div>
      <div className="card-primary-footer">
        <img
          className="card-primary-footer-icon"
          src={deltaType === 0 ? DownArrow : UpArrow}
          alt=""
        />
        <p
          className={`card-primary-footer-text ${
            deltaType === 0
              ? "card-primary-footer-text-red"
              : "card-primary-footer-text-green"
          }`}
        >
          {delta} Today
        </p>
      </div>
    </section>
  );
}

export default CardPrimary