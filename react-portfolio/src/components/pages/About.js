import { React, useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import '../styles/about.css';

export default function About() {


  const iconArr = ['css', 'express', 'git', 'github', 'HTML', 'js', 'mern', 'mongodb', 'mysql', 'node', 'npm', 'react'];
  const imgsrc = {};

  const [scaleStyles, setScaleStyles] = useState(Array(iconArr.length).fill('scale(1)'));

  const handleHoverAction = (event, scale) => {
    // "event" is the React SyntheticEvent object
    const divElement = event.currentTarget;
    const index = parseInt(divElement.getAttribute('data-index'), 10); // Get index
    const newScaleStyles = [...scaleStyles];  //create a shallow copy of the existing scaleStyles array and store it in a new variable newScaleStyles.
    newScaleStyles[index] = `scale(${scale})`;
    setScaleStyles(newScaleStyles);
  };

  
const handleHover = (event) => handleHoverAction(event, 1.1);
const handleHoverOut = (event) => handleHoverAction(event, 1);

  iconArr.forEach((icon) => imgsrc[icon] = require(`../images/skillIcons/${icon}.svg`));

  const setDivs = iconArr
    .map((icon, index) =>
      <animated.div style={{transform: scaleStyles[index]}} key={index} className='col-md-2 col-sm-4 col-12 skill bg-warning text-dark d-flex justify-content-center align-items-center flex-column m-2 pt-2' onMouseOver={handleHover} onMouseOut={handleHoverOut} id={icon} data-index={index}>
        <img src={imgsrc[icon]} alt={icon}></img>
        <h5>{icon}</h5>
      </animated.div>
    );

    
  return (
    <main className='p-5 '>
      <div className='d-flex justify-content-center mb-5'>
        <div className='col-md-6'>
          <div className=" h-100 d-flex flex-column align-items-center">
            <div className="vertical-line"></div>
            <h2 className="mt-3 heading">ABOUT ME</h2>
            <h2 className='heading'>Just a bit...</h2>
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
            <h2 className='heading'>My Skillset</h2>
            <div className='horizontal-line rounded-box'></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row d-flex justify-content-center">
          {setDivs}
        </div>
      </div>
    </main>
  );
}
