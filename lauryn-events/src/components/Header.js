// import React from 'react';
// import './Header.css';
// // import logo from '../assets/Lauryn-logo-image.jpg';

// const Header = () => (
//   <header className="header">
//     {/* <img src={logo} alt="Lauryn & Co. Logo" className="logo" /> */}
//     {/* <h1>Lauryn & Co. Prestige Events - The Best Events in French Riviera</h1> */}
//     {/* {<h2> Welcome to Lauryn & Co. Prestige Events! The Best Events in the French Riviera </h2>} */}
//   </header>
// );

// export default Header;

// Header.js
// import React from 'react';
// import './Header.css';
// import logo from '../assets/Lauryn-logo-image.jpg'; // Adjust if needed
// import logo2 from '../assets/Lauryn-logo-image2.jpg'; // Replace with actual image path

// const Header = () => (
//   <header className="header">
//     <div className="header-content">
//       <img src={logo} alt="Lauryn & Co. Principal Logo" className="logo" />
//       <h1>Lauryn & Co. Prestige Events - The Best Events in the French Riviera</h1>
//     </div>
//     <img src={logo2} alt="Lauryn & Co. Secondary Logo" className="logo2" />
//   </header>
// );

// export default Header;

// Header.js
import React from 'react';
import './Header.css';
import mainLogo from '../assets/Lauryn-logo-image.jpg'; // Main logo
import sideLogo from '../assets/Lauryn-logo-image2.jpg'; // Additional image

const Header = () => (
  <header className="header">
    <div className="header-logo2">
      <img src={sideLogo} alt="Lauryn & Co. Side Logo" className="side-logo" />
    </div>
    <div className="header-logo">
      <img src={mainLogo} alt="Lauryn & Co. Main Logo" className="main-logo" />
    </div>
    <div className="header-logo2">
      <img src={sideLogo} alt="Lauryn & Co. Side Logo" className="side-logo" />
    </div>
  </header>
);

export default Header;
