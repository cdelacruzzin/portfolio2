import { React, useState } from 'react';
import './styles/footer.css'
import github from './images/skillIcons/githubwhite.svg';
import linkedin from './images/skillIcons/linkedin.svg';

function Footer({ currentPage, handlePageChange }) {


    return (
        <footer className=' mt-5 row'>


            <aside className='col-lg-4 col-12'>
                <h4 className='text-light fs-1 d-flex justify-content-center'>Carlos Dela Cruz</h4>
                <div className='img-links d-flex justify-content-center'>
                    <a href=' https://github.com/cdelacruzzin'>
                        <img src={github} alt="GitHub"></img>
                    </a>
                    <a href='https://www.linkedin.com/in/carlos-dela-cruz-45a087227/'>
                        <img src={linkedin} alt="LinkedIn"></img>
                    </a>
                    <a href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}> 
                        <img src={github} alt="GitHub"></img>
                    </a>
                </div>
            </aside>

            <section className='col-lg-7 col-12 row'>
                <nav className=' col-12 d-flex justify-content-center flex-column'>
                    <h3 className='text-light text-center'>Menu</h3>
                    <ul className='nav nav-tabs py-4 row' id='footer-ul'>
                        <li className="nav-item m-3 col-sm-3">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item m-3 col-sm-3">
                            <a
                                href="#blog"
                                onClick={() => handlePageChange('Blog')}
                                className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                            >
                                Blog
                            </a>
                        </li>
                        <li className="nav-item m-3 col-sm-3">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='col-12 d-flex justify-content-center'>
                    <h3 className='text-light'>Contact me:{" "}
                        <a href='mailto:en.carlos.delacruz@gmail.com'>
                            en.carlos.delacruz@gmail.com
                        </a>
                    </h3>

                </div>
            </section>

            <p className='text-center text-light mt-4'> &copy; Carlos' Portfolio 2023</p>

        </footer>
    );

}
export default Footer;