import React from 'react';
import "./ProductCard.css"

const ProductCard = ({image, title, price}) => {
  return (
    <div className='product-card'>
        <div className='product-card-image'>
            <div className='background'></div>
            <img src={`/public/images/products/${image}.png`} alt="product image" />
        </div>
        <div className='product-card-description'>
            <h3 className='product-card-description--title'>{title}</h3>
            <h4 className='product-card-description--price'>{{price}}</h4>
        </div>
    </div>
  )
}

export default ProductCard