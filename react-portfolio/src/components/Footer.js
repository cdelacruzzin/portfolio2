import { React, useState } from 'react';
import './styles/footer.css'

function Footer({ currentPage, handlePageChange }) {

    const icons = ['github', 'linkedin', 'mail'];
    const iconLinks = {
        'linkedin': 'https://www.linkedin.com/in/carlos-dela-cruz-45a087227/',
        'github': 'https://github.com/cdelacruzzin',
        'mail':'mailto:en.carlos.delacruz@gmail.com'
    };
    const imgsrc = {};
    icons.forEach((icon) => imgsrc[icon] = require(`./images/skillIcons/${icon}.svg`));


    // ['scale(1)', 'scale(1)',]
    const [scaleStyle, setScale] = useState(Array(icons.length).fill('scale(1)'));
    const handleHoverAction = (event, scale) => {
        // "event" is the React SyntheticEvent object
        const divElement = event.currentTarget;
        const index = parseInt(divElement.getAttribute('data-index'), 10);
        const newScale = [...scaleStyle];
        newScale[index] = `scale(${scale})`;
        setScale(newScale);
    };
    const handleHover = (event) => handleHoverAction(event, 1.1);
    const handleHoverOut = (event) => handleHoverAction(event, 1);

    const setLinks = icons.map((icon, index) => (
            <a
                key={index}
                href={iconLinks[icon]}
                data-index={index}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{ transform: scaleStyle[index] }}
            >
                <img src={imgsrc[icon]} alt={icon} />
            </a>
    ));



    return (
        <footer className=' mt-5 row'>


            <aside className='col-lg-4 col-12 d-flex flex-column justify-content-center'>
                <h4 className='fs-1 d-flex justify-content-center' >Carlos Dela Cruz</h4>
                <div className='img-links d-flex justify-content-center flex-wrap'>
                    {setLinks}
                </div>
            </aside>

            <section className='col-lg-7 col-12 row'>
                <nav className=' col-12 d-flex justify-content-center flex-column'>
                    <h3 className=' text-center'>Menu</h3>
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
                    <h3 className='contact-me '>Contact me:{" "}
                        <a href='mailto:en.carlos.delacruz@gmail.com'>
                            en.carlos.delacruz@gmail.com
                        </a>
                    </h3>
                </div>
            </section>
            <p className='copywrite text-center  mt-4'> &copy; Carlos' Portfolio 2023</p>
        </footer>
    );

}
export default Footer;