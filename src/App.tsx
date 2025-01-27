import './App.css';
import menu from './images/menu.png';
import menuRsvp from './images/menu-light.png'; // Add the alternative image for RSVP
import styles from './App.module.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Wedding from './components/wedding/Wedding';
import { useState } from 'react';
import Rsvp from './components/rsvp/Rsvp';
import Location from './components/location/Location';
import Events from './components/events/Events';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  console.log(window.location.pathname.split('/'));
  // Conditionally set the image source based on the route
  const menuIconSrc = menuOpen
    ? menu
    : window.location.pathname.split('/')[1] === 'rsvp'
    ? menuRsvp
    : menu;

  return (
    <Router>
      <div className={styles.container}>
        <div
          style={{
            backgroundColor: menuOpen ? '#E4D1D7' : 'transparent',
          }}
          className={styles.menu}
        >
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={menuIconSrc} // Use the conditionally selected image
            alt="Menu"
            className={styles.menuIcon}
          />
          {menuOpen ? (
            <div className={styles.menuContent}>
              <ul
                onClick={() => setMenuOpen(false)}
                className={styles.menuList}
              >
                <li>
                  <Link to="/location" className={styles.menuItem}>
                    Location
                  </Link>
                </li>
                <li>
                  <Link to="/events" className={styles.menuItem}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/travel" className={styles.menuItem}>
                    Travel
                  </Link>
                </li>
                <li>
                  <Link to="/rsvp" className={styles.menuItem}>
                    RSVP
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <Routes>
          <Route path="/" element={<Wedding />} />
          <Route path="/location" element={<Location />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel" element={<Wedding />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
