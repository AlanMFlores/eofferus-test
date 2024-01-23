import React from 'react'
import './SeeMoreOffersButton.css'
import { Link } from 'react-router-dom'

const SeeMoreOffersButton = () => {
  return (
    <Link to='/weekly-offers' className='see-more-offers'>
        See More Offers
    </Link>
  )
}

export default SeeMoreOffersButton