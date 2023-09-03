import { React, useState, useEffect } from 'react';
import '../styles/about.css';

export default function About() {



  const iconArr = ['css', 'express', 'git', 'github', 'HTML', 'js', 'mern', 'mongodb', 'mysql', 'node', 'npm', 'react'];
  const imgsrc = {}

  iconArr.forEach((icon) => imgsrc[icon] = require(`../images/skillIcons/${icon}.svg`));

  const setDivs = iconArr
    .map((icon, index) =>
      <div key={index} className='col-md-2 col-sm-4 col-12 skill bg-light text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2'>
        <img src={imgsrc[icon]} alt={icon}></img>
        <h5>{icon}</h5>
      </div>
    );

  return (
    <div className='p-5 '>
      <div className='d-flex justify-content-center mb-5'>
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
      </div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          {setDivs}
        </div>
      </div>
    </div>
  );
}
