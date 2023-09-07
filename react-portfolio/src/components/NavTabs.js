import { React, useState } from 'react';
import './styles/navBar.css'

function NavTabs({ currentPage, handlePageChange }) {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (

    <header className='p-3 sticky-top'>
      <nav className="  navbar navbar-expand-lg navbar-light" id='navbar-container'>
        <button className="navbar-toggler mb-4 bg-light " type="button" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse px-2 `} id="navbarNav">
          <ul className={`${!isNavCollapsed ? 'flex-column' : ''}  nav nav-tabs `}>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link ' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#blog"
                onClick={() => handlePageChange('Blog')}
                className={currentPage === 'Blog' ? 'nav-link ' : 'nav-link'}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link ' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('About')}
                className= 'nav-link'
              >
                resume
              </a>
            </li>
          </ul>
        </div>


        <div className='name-box'>
            Carlos Rafael Dela Cruz
        </div>
      </nav>



    </header>
  );
}

export default NavTabs;
