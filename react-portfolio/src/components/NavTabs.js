import { React, useState, useEffect } from 'react';
import './styles/navBar.css'

function NavTabs({ currentPage, handlePageChange }) {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 260px)').matches);

  useEffect(() => {
    const handleResize = () => {
      // Update isMobile based on the media query's matched status.
      setIsMobile(window.matchMedia('(max-width: 260px)').matches);
    };

    // event listener for resize.
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 






  const navBarWidth = {
    width: isNavCollapsed ? "clamp(1px, 50vw, 100%)": "clamp(1px, 50%, 100%)"
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (

    <header className='p-3 sticky-top'>
      <nav className="  navbar navbar-expand-lg navbar-light" id='navbar-container'>
        <button className="navbar-toggler mt-4 bg-light " type="button" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse px-2 `} id="navbarNav">
          <ul className={`${!isNavCollapsed ? 'flex-column' : ''}  nav nav-tabs d-flex justify-content-center`} style={navBarWidth}>
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
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link ' : 'nav-link'}
              >
                Projects
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
        <div className='name-box mt-4 p-2'>
        {isMobile ? "CD" : "Carlos Rafael Dela Cruz"}
        </div>
      </nav>



    </header>
  );
}

export default NavTabs;
