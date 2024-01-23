import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Electronics from './pages/electronics'
import WeeklyOffers from './pages/WeeklyOffers'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/weekly-offers' element={<WeeklyOffers/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
