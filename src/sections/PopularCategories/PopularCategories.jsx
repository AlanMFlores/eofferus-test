import React from 'react';
import './PopularCategories.css'
import SubcategoryCard from '../../components/SubcategoryCard/SubcategoryCard';

const PopularCategories = () => {
  return (
    <section className='popular-categories'>
        <h2 className='popular-categories-title'>
            Popular Categories
        </h2>
        <div className='popular-categories-grid'>
            <SubcategoryCard image={"gaming"} category={"GAMING"}/>
            <SubcategoryCard image={"footwear"} category={"FOOTWEAR"}/>
            <SubcategoryCard image={"sport-accesories"} category={"SPORT ACCESORIES"}/>
            <SubcategoryCard image={"garden"} category={"GARDEN"}/>
            <SubcategoryCard image={"accesories"} category={"ACCESORIES"}/>
            <SubcategoryCard image={"home-audio"} category={"HOME AUDIO"}/>
            <SubcategoryCard image={"bedroom"} category={"BEDROOM"}/>
            <SubcategoryCard image={"computer"} category={"COMPUTER"}/>
        </div>
    </section>
  )
}

export default PopularCategories