import React from 'react';
import '../styles/about.css'
import react from '../images/skillIcons/React-icon.svg'

export default function About() {
  return (
    <div className='p-5 '>
      <div className='row mb-5'>
        <div className='col-md-3'>
          <div className='bg-light'>a</div>
        </div>
        <div className='col-md-6 bg-dark'>
          <div className="bg-light text-dark h-100 d-flex flex-column align-items-center">
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
          <div className='bg-light'>a</div>
        </div>
      </div>

      <div className='container'>
        <div className="row d-flex justify-content-center">

          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>HTML</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
            <h5 className='bg-light'>CSS</h5>
          </div>
          <div className="col-md-2 col-sm-4 col-12 skill bg-dark text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2">
            <img src={react}></img>
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
