import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import "./WeeklyOffers.css"
import SeeMoreOffersButton from '../../components/SeeMoreOffersButton/SeeMoreOffersButton';

const WeeklyOffers = () => {
  return (
    <section className='weekly-offers'>
      <h2 className='weekly-offers-title'>Weekly Offers</h2>
      <div className='products-grid'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <SeeMoreOffersButton/>
    </section>
  )
}

export default WeeklyOffers