// import React, { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import './index.css';
const SideNavbar = () => {
  const closeNavbar = () => {
    const sidenav = document.querySelector(".side-navbar");
    sidenav.style.left = "-60%";
  };

  return (
    <div className="side-navbar">
      <p style={{ textAlign: 'right' }} onClick={closeNavbar}>
        <i className="fa-solid fa-xmark"></i>
      </p>
      <div className="side-navbar-links">
        <p className="side-navbar-link"><Link to="/">Home</Link></p>
        <p className="side-navbar-link"><Link to="/collection">Collections</Link></p>
        <p className="side-navbar-link"><Link to="/contact">Contact</Link></p>
      </div>
    </div>
  );
};

function home() {
  const showNavbar = () => {
    const sidenav = document.querySelector(".side-navbar");
    sidenav.style.left = "0%";
  };

  // const closeNavbar = () => {
  //   const sidenav = document.querySelector(".side-navbar");
  //   sidenav.style.left = "-60%";
  // };

  return (
    <div>
      {/*navbar*/}
      <nav className="navbar">
        <h1>NAstro.</h1>
        <div className="navbar-links">
          <p className="navbar-link"><Link to="/">Home</Link></p>
          <p className="navbar-link"><Link to="/collection">Collections</Link></p>
          <p className="navbar-link"><Link to="/contact">Contact</Link></p>
        </div>
        {/*navbartoggle*/}
        <div className="navbar-menu-toggle" onClick={showNavbar}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      {/*side navbar*/}
      <SideNavbar />

      {/*header*/}
      <div className="header">
        <div>
          <h1>Level up your Style</h1>
          <p>with our stunning Collections</p>
          <button className="header-button">Shop Now</button>
        </div>
        <div>
          <img className="header-img" src="https://source.unsplash.com/random/300x300/?fashion,dress" alt="Fashionable Dress" />
        </div>
      </div>

      {/* <!--service--> */}
      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>We Provide Best</h2>
            <h2>Customer Experince</h2>
          </div>


          <div>
            <p>|| We ensure that our custumer have the best shopping experince</p>
          </div>
        </div>


        <div className="service-container-2">
          <div>
            <i className="fa-regular fa-smile"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>If you would like to experience the best of online shopping for men, women and kids, you are at the
              right place.</p>
          </div>

          <div>
            <i className="fa-solid fa-shirt"></i>
            <h4>New Arraival</h4>
            <p>Nastro is the ultimate destination for fashion and lifestyle, being host to a wide array of
              merchandise including clothing, footwear and more..</p>
          </div>

          <div>
            <i className="fa-solid fa-truck-fast"></i>
            <h4>Fast and Hustle free shipping all over the world <i class="fa-solid fa-earth-americas"></i></h4>
            <p>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can
              also shop for your friends, family and loved-ones and avail our gift services for special occasions.
            </p>
          </div>

        </div>
      </div>

      {/* <!--new-Arrival-content--> */}
      <div>
        <h2 style={{ padding: '30px' }}>New Arrival</h2>



        <div className="new-arraival">
          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?1"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?2"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?3"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?4"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

        </div>

      </div>

      {/* <!--most wanted--> */}
      <div>
        <h2 style={{ padding: '30px' }}>Most wanted</h2>


        <div className="new-arraival">
          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?5"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?6"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?7"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className="new-arraival-container">

            <img className="new-arraival-img" src="https://source.unsplash.com/random/200x200/?fashion,dress?8"
              alt="Fashionable Dress" />
            <button>Shop now<i className="fa-solid fa-arrow-right"></i></button>

          </div>

        </div>

      </div>


      {/* <!--news--> */}
      <div className="news">
        <h2>Join our News letter</h2>
        <p>Signup for our email newsletter to get  the latest updates and discounts from us.</p>

        <div>
          <input type="text" className=" search" />
        </div>

        <div>
          <button>Subscribe</button>
        </div>

      </div>


      {/* <!--footer--> */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer- box-1">
            <i><h1 className="headingtext">NAstro.</h1></i>
            <p>Follow us on :</p>
            <div className="footer-icon-container">
              <i className="fa-brands fa-facebook" style={{ color: 'white' }}></i>
              <i className="fa-brands fa-x-twitter" style={{ color: 'white' }}></i>
              <i className="fa-brands fa-threads" style={{ color: 'white' }}></i>
              <i className="fa-brands fa-instagram" style={{ color: 'white' }}></i>
            </div>
          </div>

        </div>
        <p>@2024Nastro.com</p>

      </div>

    </div>
  )
}

export default home;

