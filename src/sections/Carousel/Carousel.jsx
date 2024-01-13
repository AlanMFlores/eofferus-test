import React from 'react'
import "./Carousel.css"
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Carousel = () => {
  return (
    <div className='carousel'>
        <CategoryCard link={"./public/images/sports-card.jpg"} category={"SPORTS"} id={"sports"}/>
        <CategoryCard link={"./public/images/home-card.jpg"} category={"HOME"} id={"home"}/>
        <CategoryCard link={"./public/images/electronics-card.jpg"} category={"ELECTRONICS"} id={"electronics"}/>
        <CategoryCard link={"./public/images/fashion-card.jpg"} category={"FASHION"} id={"fashion"}/>
    </div>
  )
}

export default Carousel