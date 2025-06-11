// import React, { useState } from 'react';
// import { SiYoutubemusic } from 'react-icons/si';
// import './Header.css';

// const Header = () => {
//   const [active, setActive] = useState('Home');

//   const menuItems = [
//     'Home',
//     'Movies',
//     'TV Series',
//     'hi'
    
    
//   ];

//   return (
//     <header className="header">
//       <div className="header-logo">
//         <SiYoutubemusic />
//         <span>tMovies</span>
//       </div>
//       <nav className="header-menu">
//         {menuItems.map(item => (
//           <button
//             key={item}
//             className={`header-link ${active === item ? 'active' : ''}`}
//             onClick={() => setActive(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </nav>
//     </header>
//   );
// };

// export default Header;








import React, { useState } from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import './Header.css';

const Header = ({ currentTheme, onThemeChange }) => {
  const [active, setActive] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = ['Home', 'Movies', 'TV Series'];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleThemeSelect = (theme) => {
    onThemeChange(theme);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <SiYoutubemusic />
        <span>tMovies</span>
      </div>

      <nav className="header-menu">
        {menuItems.map((item) => (
          <button
            key={item}
            className={`header-link ${active === item ? 'active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}

        <div className="theme-switcher">
          <button className="theme-toggle-button" onClick={toggleDropdown}>
            🌗
          </button>
          {isDropdownOpen && (
            <div className="theme-dropdown">
              {['dark', 'light', 'system'].map((mode) => (
                <button
                  key={mode}
                  className={`dropdown-item ${currentTheme === mode ? 'selected' : ''}`}
                  onClick={() => handleThemeSelect(mode)}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

