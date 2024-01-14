import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import "./WeeklyOffers.css"
import SeeMoreOffersButton from '../../components/SeeMoreOffersButton/SeeMoreOffersButton';

const WeeklyOffers = () => {
  return (
    <section className='weekly-offers'>
      <h2 className='weekly-offers-title'>Weekly Offers</h2>
      <div className='products-grid'>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
          <ProductCard image={"puma-men"} title={"PUMA Men's Axelion Ridge C..."} price={"$54,97"}/>
      </div>
      <SeeMoreOffersButton/>
    </section>
  )
}

export default WeeklyOffers