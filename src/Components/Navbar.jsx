import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
  
    <>
        <header className="header">
                <div className="logo">
                    <img src="./public/images/logo.png" alt="logo"/>
                </div>
    
                <ul className="nav-link">
                    <a href="#">Home</a>
                    <li className="dropdown">
                        <a href="#" className="drop-btn">Shop<i className="fa-solid fa-angle-down" id="caret-down"></i></a>
                        <div className="dropdown-menu">
                            <a href="#">Sweet</a>
                            <a href="#">Namkeen</a>
                            <a href="#">Collection</a>
                            <a href="#">Best Seller</a>
                        </div>
                    </li>
                    <a href="#">Offers</a>
                    <a href="#">Blog</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                </ul>
                <div className="icon">
                    <a><i className="fa-solid fa-magnifying-glass"></i></a>
                    <a><i className="fa-regular fa-heart"></i></a>
                    <a><i className="fa-solid fa-bag-shopping"></i></a>
                    <a><i className="fa-regular fa-user"></i></a>
                </div>
    
            </header>
    
    </>

  )
}

export default Navbar