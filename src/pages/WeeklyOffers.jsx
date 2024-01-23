import PageHeader from "../components/PageHeader/PageHeader"
import Pagination from "../components/Pagination/Pagination"
import ProductsGrid from "../sections/ProductsGrid/ProductsGrid"

const WeeklyOffers = () => {
  return (
    <main className='weekly-offers'>
      <PageHeader route={"Offers"} title={"Weekly Offers"}/>
      <ProductsGrid/>
      <Pagination/>
    </main>
  )
}

export default WeeklyOffers 