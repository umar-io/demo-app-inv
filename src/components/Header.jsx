import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
const [openNav, setOpenNav] = useState(false)

const openMobileNav = () =>{
    setOpenNav(!openNav)
}

const closeMobileNav = () =>{
    setOpenNav(!openNav)
}
    
  return (
    <header>
      <h3 className="navbrand">SmartVest</h3>
      <nav style={{ display : openNav ? 'none' : 'flex' }}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="aboutus"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="faqs"
        >
          FAQs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="login"
        >
          <button className="navLoginBtn">Login</button>
        </NavLink>
      </nav>
      <div className="hamburger">
        <span id="openHam" onClick={openMobileNav} style={{ display : openNav ? 'block' : 'none'}}>&#9776;</span>
        <span id="closeHam" onClick={closeMobileNav} style={{ display : openNav ? 'none' : 'block'}}>&#x2716;</span>
      </div>
    </header>
  );
}
