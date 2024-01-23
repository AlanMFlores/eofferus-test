import React from 'react';
import './Pagination.css'

const Pagination = () => {
  return (
    <div className='pagination'>
        <span className="material-symbols-outlined chevron-left">
        chevron_left
        </span>
        <div className='pagination-container'>
            <button className='pagination-container--item selected'>
                <p className='page-number'>1</p>
            </button>
            <button className='pagination-container--item'>
                <p className='page-number'>2</p>
            </button>
            <button className='pagination-container--item'>
                <p className='page-number'>3</p>
            </button>
            <button className='pagination-container--item'>
                <p className='page-number'>4</p>
            </button>
        </div>
        <span className="material-symbols-outlined chevron-right">
        chevron_right
        </span>
    </div>
  )
}

export default Pagination