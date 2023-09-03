import { React, useState } from 'react';
import './styles/footer.css'
import github from './images/skillIcons/githubwhite.svg';
import linkedin from './images/skillIcons/linkedin.svg';

function Footer({ currentPage, handlePageChange }) {


    return (
        <footer className=' mt-5 row'>


            <aside className='col-4'>
                <h4 className='text-light fs-1'>Carlos Dela Cruz</h4>
                <div className='img-links'>
                    <a>
                        <img src={github}></img>
                    </a>
                    <a>
                        <img src={linkedin}></img>
                    </a>
                    <a>
                        <img src={github}></img>
                    </a>
                </div>


            </aside>
            <section className='col-8'>
                s
            </section>
        </footer>
    );

}
export default Footer;