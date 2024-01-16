import React from 'react';
import SeeMoreOffersButton from '../../components/SeeMoreOffersButton/SeeMoreOffersButton.jsx';
import './SeeMoreOffers.css'

const SeeMoreOffers = () => {
  return (
    <section className='offers'>
        <div className='offers-description'>
            <h3 className='offers-description--title'>Get the best offers on Amazon</h3>
            <SeeMoreOffersButton/>
        </div>
    </section>
  )
}

export default SeeMoreOffers;