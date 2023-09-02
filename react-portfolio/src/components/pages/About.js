import React from 'react';
import '../styles/about.css'

export default function About() {
  return (
    <div className='p-5 container'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='bg-light'>a</div>
        </div>
        <div className='col-md-6 bg-dark'>
          <div className="bg-light text-dark h-100 d-flex flex-column align-items-center">
            <div className="about-me"></div>
            <h6 className="text-center mt-3">ABOUT ME</h6>
            <h2>Just a bit...</h2>
            <p className='text-center'>
              Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
              Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
              dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
              sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
              sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            </p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='bg-light'>a</div>
        </div>
      </div>

      

    </div>
  );
}
