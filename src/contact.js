import React from "react"
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

function Contact() {
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













            {/* <!--Javascript-->
            <script src="nastro.js"></script>
            <script src="collection.js"></script> */}

            {/* </body> */}
        </div>
    )
}

export default Contact