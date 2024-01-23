import React from 'react';
import './Breadcrumbs.css'

const Breadcrumbs = ({route}) => {
  return (
    <div className='breadcrumbs-container'>
        <p className='breadcrumbs'>Home {">"} {route}</p>
    </div>
  )
}

export default Breadcrumbs