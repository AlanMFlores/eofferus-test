import "./WeeklyOffersHome.css"
import SeeMoreOffersButton from '../../components/SeeMoreOffersButton/SeeMoreOffersButton';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

const WeeklyOffersSection = () => {
  return (
    <section className='weekly-offers'>
      <h2 className='weekly-offers-title'>Weekly Offers</h2>
      <ProductsGrid/>
      <div className='see-more-offers-button'>
        <SeeMoreOffersButton/>
      </div>
    </section>
  )
}

export default WeeklyOffersSection