import {React, useState, useEffect} from 'react';
import '../styles/about.css'
import react from '../images/skillIcons/React-icon.svg';
import html from '../images/skillIcons/HTML.svg';
import css from '../images/skillIcons/css.svg';

export default function About() {

  const [icon, setIcon] = useState({});

  useEffect( ()=> {
    const iconArr = ['css', 'express','git','github','HTML','js','mern','mongodb','mysql','node','npm','React-icon'];
    const temp = {}

    iconArr.forEach((iconEl)=>{
      temp[iconEl] = require(`../images/skillIcons/${iconEl}.svg`);
    });

    setIcon(temp);
    
  },[]);



  return (
    <div className='p-5 '>
      <div className='row mb-5'>
        <div className='col-md-3'>

        </div>
        <div className='col-md-6'>
          <div className="text-light h-100 d-flex flex-column align-items-center">
            <div className="vertical-line"></div>
            <h6 className="mt-3">ABOUT ME</h6>
            <h2>Just a bit...</h2>
            <p className='text-center'>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
              dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
              sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
              sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
              dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
              sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
              sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            </p>
            <div className="vertical-line"></div>
            <h2>My Skillset</h2>
            <div className='horizontal-line rounded-box'></div>
          </div>
        </div>
        <div className='col-md-3'>
        </div>
      </div>

      <div className='container'>
        <div className="row d-flex justify-content-center">

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>HTML</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={html}></img>
            <h5 className='bg-light'>CSS</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={css}></img>
            <h5 className='bg-light'>JavaScript</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>React</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>Node.js</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>Express.jss</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>MySQL</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>NoSQL</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>MongoDB</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>NPM</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>Git</h5>
          </div>

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>GitHub</h5>
          </div>

        </div>

      </div>
    </div>
  );
}
