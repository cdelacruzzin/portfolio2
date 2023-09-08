import React, { useState } from 'react';
import mode_de_vie from '../images/project-icons/mode-de-vie.PNG';
import itinerary_planner from '../images/project-icons/itinerary-planner.PNG';
import nosql_social_network_api from '../images/project-icons/nosql-social-network-api.PNG';

import mvc_tech_blog from '../images/project-icons/mvc-tech-blog.PNG';

import ORM_e_commerce_back_end from '../images/project-icons/ORM-e-commerce-back-end.PNG';

import MySQL_employee_tracker from '../images/project-icons/MySQL-employee-tracker.PNG';

import pwa_text_editor from '../images/project-icons/pwa-text-editor.PNG';
import weather_dashboard from '../images/project-icons/weather-dashboard.PNG';

import '../styles/projects.css';
export default function Blog() {


  const topProjects = [
    ['Mode-de-Vie',
      ['https://github.com/PythonFabi/mode-de-vie',
        'https://warm-caverns-23380-13159eb09b79.herokuapp.com/login',
        'deployment',
        mode_de_vie
      ],
      'topProjects'],

    ['Itinerary-Planner',
      ['https://github.com/Koro999/itinerary-planner',
        'https://koro999.github.io/itinerary-planner/',
        'deployment',
        itinerary_planner
      ],
      'topProjects'],

  ];

  const backEnd = [
    ['NoSQL-Social-Network-API',
      ['https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API',
        'https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API#demo-links',
        'demo',
        nosql_social_network_api
      ],
      'backEnd'],

    ['MVC-Tech-Blog',
      ['https://github.com/cdelacruzzin/14-Model-View-Controller-MVC-Tech-Blog',
        'https://warm-spire-10804-b87ddf9aa334.herokuapp.com/',
        'deployment',
        mvc_tech_blog
      ],
      'backEnd'],

    ['ORM-E-Commerce-Back-End',
      ['https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End',
        'https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End#demo-links',
        'demo',
        ORM_e_commerce_back_end
      ],
      'backEnd'],

    ['SQL-Employee-Tracker',
      ['https://github.com/cdelacruzzin/12-SQL-Employee-Tracker',
        'https://drive.google.com/file/d/1_Z3yE_0LUblo5XvWU2eR_SON3tpqBQgF/view',
        'demo',
        MySQL_employee_tracker
      ],
      'backEnd'],
  ]

  const frontEnd = [
    ['Itinerary-Planner',
      ['https://github.com/Koro999/itinerary-planner',
        'https://koro999.github.io/itinerary-planner/',
        'deployment',
        itinerary_planner
      ],
      'frontEnd'],

    ['PWA-Text-Editor',
      ['https://github.com/cdelacruzzin/19-Progressive-Web-Applications-PWA-Text-Editor',
        'https://pwa-text-editor-app-98a67a010265.herokuapp.com/',
        'deployment',
        pwa_text_editor
      ],
      'frontEnd'],

    ['Weather-Dashboard',
      ['https://github.com/cdelacruzzin/Weather-Dashboard',
        'https://cdelacruzzin.github.io/Weather-Dashboard/',
        'deployment',
        weather_dashboard
      ],
      'frontEnd']
  ]
  const allProjects = [topProjects, frontEnd, backEnd]
  


  const setProjects = (projects) => {
    return projects.map((projectCategory) => {
      const src =projectCategory[1][3];

      return (
        <div className='project-entry-column col-md-4'>
          <div className='img-container'>
            <div className='thumb-info thumb-info-hide-wrapper-bg'>
              <span className='img-wrapper'>
                <img src={src} className='project-img' alt={`Project-${projectCategory[0]}`} />
                <span className='thumb-info-title'>
                  <span className='thumb-info-inner'>
                    {projectCategory[0]}
                  </span>
                </span>
              </span>
            </div>
            <div className="description-box d-flex justify-content-center">
              <div className="repo bg-dark d-flex">
                <a className='project-links' href={projectCategory[1][0]}>
                  github
                </a>
              </div>
              <div className="repo bg-dark d-flex">
                <a className='project-links' href={projectCategory[1][1]}>
                  {projectCategory[1][2]}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
};





  const setCategory = allProjects.map((projectCat) => {
    return (
      <div className="d-flex flex-column align-items-center px-5">
        <div className="vertical-line my-3 "></div>
        <h2 className='heading '>{projectCat[0][2]}</h2>
        <div className='horizontal-line rounded-box mb-5'></div>
        <div className='project-container row'>
          {setProjects(projectCat)}
        </div>
      </div>
    );
  });
  return (

    <div>
      {setCategory}
    </div>
  );
}
