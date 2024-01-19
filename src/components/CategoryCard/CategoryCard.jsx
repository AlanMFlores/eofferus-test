import React from 'react'
import "./CategoryCard.css"

const CategoryCard = ({image, category, id}) => {
  return (
    <div className='category-card' id={id}>
        <div className='category-card-image'>
            <img src={`images/${image}.webp`} alt="" />
        </div>
        <h2 className='category-card-title'>{category}</h2>
    </div>
  )
}

export default CategoryCard