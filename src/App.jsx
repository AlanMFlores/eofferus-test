import Header from './components/Header/Header'
import './App.css'
import Carousel from './sections/Carousel/Carousel'
import WeeklyOffers from './sections/WeeklyOffers/WeeklyOffers'
import PopularCategories from './sections/PopularCategories/PopularCategories'
import Footer from './components/Footer/Footer'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'

function App() {

  return (
    <>
      <Header/>
      <Breadcrumbs/>
      <Carousel/>
      <WeeklyOffers/>
      <PopularCategories/>
      <Footer/>
    </>
  )
}

export default App
