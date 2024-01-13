import React from 'react'
import "./Carousel.css"
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Carousel = () => {
  return (
    <div className='carousel'>
        <CategoryCard link={"images/sports-card.jpg"} category={"SPORTS"} id={"sports"}/>
        <CategoryCard link={"images/home-card.jpg"} category={"HOME"} id={"home"}/>
        <CategoryCard link={"images/electronics-card.jpg"} category={"ELECTRONICS"} id={"electronics"}/>
        <CategoryCard link={"images/fashion-card.jpg"} category={"FASHION"} id={"fashion"}/>
    </div>
  )
}

export default Carousel