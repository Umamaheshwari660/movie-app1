// import React, { useState } from 'react';
// import { SiYoutubemusic } from 'react-icons/si';
// import './Footer.css';

// const Footer = () => {
//   const [active, setActive] = useState('');
//   const menuItems = [
//     'Home', 'Live', 'You Must Watch',
//     'Contact Us', 'FAQ', 'Recent Release',
//     'Terms Of Service', 'Premium', 'Top IMDB',
//     'About Us', 'Privacy Policy'
//   ];

//   return (
//     <footer className="footer">
//        <div className="overlay"></div>
//       <div className="footer-logo">
//         <SiYoutubemusic /> <span>tMovies</span>
//       </div>
//       <nav className="footer-menu">
//         {menuItems.map(item => (
//           <button
//             key={item}
//             className={`footer-link ${active === item ? 'active' : ''}`}
//             onClick={() => setActive(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </nav>
//       <div className="footer-copy">
//         © {new Date().getFullYear()} tMovies. All rights reserved. 
//       </div>
//        <div className="footer-copy1">
//         © {new Date().getFullYear()} Built by Uma Maheshwari 
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const [active, setActive] = useState('');
  const menuItems = [
    'Home', 'Live', 'You Must Watch',
    'Contact Us', 'FAQ', 'Recent Release',
    'Terms Of Service', 'Premium', 'Top IMDB',
    'About Us', 'Privacy Policy'
  ];

  return (
    <footer className="footer">
      <div className="footer-overlay" />
      
      <div className="footer-content">
        <div className="footer-logo">
          <SiYoutubemusic className="logo-icon" />
          <span>tMovies</span>
        </div>

        <nav className="footer-menu">
          {menuItems.map(item => (
            <button
              key={item}
              className={`footer-link ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="footer-copy">
          © {new Date().getFullYear()} tMovies. All rights reserved.
        </div>
         <div className="footer-copy1">
//         © {new Date().getFullYear()} Built by Uma Maheshwari 
//       </div>
      </div>
    </footer>
  );
};

export default Footer;

