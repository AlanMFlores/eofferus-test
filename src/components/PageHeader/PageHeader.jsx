import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx"
import "./PageHeader.css"

const PageHeader = ({title, route}) => {
  return (
    <div className='page-header'>
        <Breadcrumbs route={route}/>
        <h1 className='page-header--title'>{title}</h1>
    </div>
  )
}

export default PageHeader