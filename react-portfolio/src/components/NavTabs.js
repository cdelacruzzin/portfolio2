import {React, useState} from 'react';

function NavTabs({ currentPage, handlePageChange }) {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);






  return (
   <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler bg-light mb-4" type="button" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse px-2 `} id="navbarNav">
        <ul className={`${!isNavCollapsed ? 'd-flex flex-column' : ''} nav nav-tabs bg-dark`}>
           <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              <p>About</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#blog"
              onClick={() => handlePageChange('Blog')}
              className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
            >
              <p>Blog</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
