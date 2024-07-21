import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.jpg"
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Prerana's Trendy Collection (PTC)</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
      </nav>
    </header>
  )
}
