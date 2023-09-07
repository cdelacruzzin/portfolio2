import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './Footer'
import './styles/main.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') return <About />;
    if (currentPage === 'Blog') return <Blog />;
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="background-svg" >
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main>
        {renderPage()}
      </main>


      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

