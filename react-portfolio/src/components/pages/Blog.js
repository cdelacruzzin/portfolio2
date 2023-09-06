import React, { useState } from 'react';
import TSUNPHASE from '../images/TSUNPHASE.jpg'
import '../styles/projects.css';
export default function Blog() {


  const topProjects = {



    'Mode-de-Vie': ['https://github.com/PythonFabi/mode-de-vie', 'https://warm-caverns-23380-13159eb09b79.herokuapp.com/'],



    'Itinerary-Planner': ['https://github.com/Koro999/itinerary-planner', 'https://koro999.github.io/itinerary-planner/'],

  };

  const backEnd = {

    'NoSQL-Social-Network-API': ['https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API', 'https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API#demo-links'],

    'MVC-Tech-Blog': ['https://github.com/cdelacruzzin/14-Model-View-Controller-MVC-Tech-Blog', 'https://warm-spire-10804-b87ddf9aa334.herokuapp.com/'],

    'ORM-E-Commerce-Back-End': ['https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End', 'https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End#demo-links'],

    'SQL-Employee-Tracker': ['https://github.com/cdelacruzzin/12-SQL-Employee-Tracker', 'https://drive.google.com/file/d/1_Z3yE_0LUblo5XvWU2eR_SON3tpqBQgF/view'],
  }
  const frontEnd = {
    'Itinerary-Planner': ['https://github.com/Koro999/itinerary-planner', 'https://koro999.github.io/itinerary-planner/'],

    'PWA-Text-Editor': ['https://github.com/cdelacruzzin/19-Progressive-Web-Applications-PWA-Text-Editor', 'https://pwa-text-editor-app-98a67a010265.herokuapp.com/'],

    'Weather-Dashboard': ['https://github.com/cdelacruzzin/Weather-Dashboard', 'https://cdelacruzzin.github.io/Weather-Dashboard/']

  }



  return (
    <div className="d-flex flex-column align-items-center p-5">
      <div className="vertical-line my-5"></div>
      <h2 className='heading'>My Projects</h2>
      <div className='horizontal-line rounded-box'></div>




      <div className='project-container row'>





        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg '>
              <a className='project-a'>
                <span className='img-wrapper '>
                  <img className='project-img' src={TSUNPHASE} alt='' />
                  <span className='thumb-info-title'>
                    <span className='thumb-info-inner'>
                      project 1
                    </span>
                  </span>
                </span>
              </a>
            </div>


            <div className="description-box d-flex justify-content-center">

              <div className="repo bg-dark d-flex ">
                <a className='project-links' href='https://github.com/cdelacruzzin'>
                  github
                </a>
              </div>


              <div className="repo bg-dark d-flex">
                <a className='project-links' href='https://github.com/cdelacruzzin'>
                  demo
                </a>
              </div>
            </div>



          </div>
        </div>





        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <a className='project-a'>
                <span className='img-wrapper'>
                  <img className='project-img' src={TSUNPHASE} alt='' />
                  <span className='thumb-info-title'>
                    <span className='thumb-info-inner'>
                      project 1
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <div className='description-box'>
              Description
            </div>
          </div>
        </div>
        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <a className='project-a'>
                <span className='img-wrapper'>
                  <img className='project-img' src={TSUNPHASE} alt='' />
                  <span className='thumb-info-title'>
                    <span className='thumb-info-inner'>
                      project 1
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <div className='description-box'>
              Description
            </div>
          </div>
        </div>

        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <a className='project-a'>
                <span className='img-wrapper'>
                  <img className='project-img' src={TSUNPHASE} alt='' />
                  <span className='thumb-info-title'>
                    <span className='thumb-info-inner'>
                      project 1
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <div className='description-box'>
              Description
            </div>
          </div>
        </div>

        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <a className='project-a'>
                <span className='img-wrapper'>
                  <img className='project-img' src={TSUNPHASE} alt='' />
                  <span className='thumb-info-title'>
                    <span className='thumb-info-inner'>
                      project 1
                    </span>
                  </span>
                </span>
              </a>
            </div>




            <div className='description-box'>
              Description
            </div>
          </div>
        </div>






      </div>




    </div>
  );
}
