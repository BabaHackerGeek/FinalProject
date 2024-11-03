// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import PrivateEvents from './pages/PrivateEvents';
// import MarketingAndBranding from './pages/MarketingAndBranding';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<h2>Welcome to Lauryn & Co. Prestige Events!</h2>} />
//           <Route path="/private-events" element={<PrivateEvents />} />
//           <Route path="/marketing-and-branding" element={<MarketingAndBranding />} />
//           <Route path="/portfolio" element={<h2>Portfolio Page</h2>} />
//           <Route path="/contact" element={<h2>Contact Page</h2>} />
//           <Route path="/about" element={<h2>About Us</h2>} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateEvents from './pages/PrivateEvents';
import MarketingAndBranding from './pages/MarketingAndBranding';
import Contact from './pages/Contact';
import About from './pages/About';
import LegalConditions from './pages/LegalConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
        <Route path="/" element={<h2 className="welcome-message">Welcome to Lauryn & Co. Prestige Events! The Best Events in the French Riviera</h2>} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/marketing-and-branding" element={<MarketingAndBranding />} />
          <Route path="/private-events/marriage-proposal" element={<h2>Marriage Proposal</h2>} />
          <Route path="/private-events/engagements" element={<h2>Engagements</h2>} />
          <Route path="/private-events/weddings" element={<h2>Weddings</h2>} />
          <Route path="/private-events/bar-mitzvah" element={<h2>Bar/Bat Mitzvah</h2>} />
          <Route path="/private-events/corporate-celebrations" element={<h2>Corporate Celebrations</h2>} />
          <Route path="/private-events/birthdays" element={<h2>Birthdays</h2>} />
          <Route path="/private-events/luxury-events" element={<h2>Luxury Events in Hotels</h2>} />
          <Route path="/marketing-and-branding/flyers" element={<h2>Flyers</h2>} />
          <Route path="/marketing-and-branding/announcements" element={<h2>Digital and Print Announcements</h2>} />
          <Route path="/marketing-and-branding/business-cards" element={<h2>Business Cards</h2>} />
          <Route path="/marketing-and-branding/posters" element={<h2>Posters</h2>} />
          <Route path="/marketing-and-branding/brochures" element={<h2>Brochures</h2>} />
          <Route path="/marketing-and-branding/invitations" element={<h2>Invitations</h2>} />
          <Route path="/marketing-and-branding/branding-packages" element={<h2>Event Branding Packages</h2>} />
          <Route path="/portfolio" element={<h2>Portfolio Page</h2>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/legal-conditions" element={<LegalConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
