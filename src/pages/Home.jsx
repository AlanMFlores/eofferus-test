import Carousel from '../sections/Carousel/Carousel.jsx';
import PopularCategories from '../sections/PopularCategories/PopularCategories.jsx';
import SeeMoreOffers from '../sections/SeeMoreOffers/SeeMoreOffers.jsx';
import PageHeader from '../components/PageHeader/PageHeader.jsx';
import WeeklyOffersHome from '../sections/WeeklyOffersHome/WeeklyOffersHome.jsx';

const Home = () => {
  return (
    <main>
        <PageHeader/>
        <Carousel/>
        <WeeklyOffersHome/>
        <PopularCategories/>
        <SeeMoreOffers/>
    </main>
  )
}

export default Home