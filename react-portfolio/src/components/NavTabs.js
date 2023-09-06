import { React, useState } from 'react';
import './styles/navBar.css'

function NavTabs({ currentPage, handlePageChange }) {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (

    <header className='p-3 sticky-top'>
      <nav className="  navbar navbar-expand-lg navbar-light" id='navbar-container'>
        <button className="navbar-toggler mb-4 " type="button" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse px-2 `} id="navbarNav">
          <ul className={`${!isNavCollapsed ? 'flex-column' : ''}  nav nav-tabs bg-dark`}>
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active ' : 'nav-link'}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#blog"
                onClick={() => handlePageChange('Blog')}
                className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>


        <div className='name-box bg-dark'>
            Carlos Rafael Dela Cruz
        </div>
      </nav>



    </header>
  );
}

export default NavTabs;
