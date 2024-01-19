import React from 'react';
import './SubcategoryCard.css'

const SubcategoryCard = ({image, category}) => {
  return (
    <div className='subcategory-card'>
        <div className='subcategory-card-image'>
            <div className='background'></div>
            <img src={`images/subcategories/${image}.webp`} alt={`${category} image`}/>
        </div>
        <div className='subcategory-card-description'>
            <h3 className='subcategory-card-description--title'>{category}</h3>
        </div>
    </div>
  )
}

export default SubcategoryCard