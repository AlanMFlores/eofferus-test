import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <h1>eOfferUs</h1>
        </div>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list--item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to="/weekly-offers">Weekly Offers</Link>
                </li>
                <li className="navbar-list--item">
                    <a href="">Sports</a>
                </li>
                <li className="navbar-list--item">
                    <Link to="/electronics">Electronics</Link>
                </li>
                <li className="navbar-list--item">
                    <a href="">Home</a>
                </li>
                <li className="navbar-list--item">
                    <a href="">Fashion</a>
                </li>
                <li className="navbar-list--item">
                    <a href="">About Us</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header