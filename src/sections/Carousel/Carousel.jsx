import React from 'react'
import "./Carousel.css"
import CategoryCard from '../../components/CategoryCard/CategoryCard'

const Carousel = () => {
  return (
    <div className='carousel'>
        <CategoryCard image={"sports-card"} category={"SPORTS"} id={"sports"}/>
        <CategoryCard image={"home-card"} category={"HOME"} id={"home"}/>
        <CategoryCard image={"electronics-card"} category={"ELECTRONICS"} id={"electronics"}/>
        <CategoryCard image={"fashion-card"} category={"FASHION"} id={"fashion"}/>
    </div>
  )
}

export default Carousel