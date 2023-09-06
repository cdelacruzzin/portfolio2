import React, { useState } from 'react';
import TSUNPHASE from '../images/TSUNPHASE.jpg'
import '../styles/projects.css';
import { all } from 'axios';
export default function Blog() {


  const topProjects = [
    ['Mode-de-Vie', ['https://github.com/PythonFabi/mode-de-vie', 'https://warm-caverns-23380-13159eb09b79.herokuapp.com/login', 'deployment'], 'topProjects'],

    ['Itinerary-Planner', ['https://github.com/Koro999/itinerary-planner', 'https://koro999.github.io/itinerary-planner/', 'deployment'], 'topProjects'],

  ];

  const backEnd = [

    ['NoSQL-Social-Network-API', ['https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API', 'https://github.com/cdelacruzzin/18-NoSQL-Social-Network-API#demo-links', 'demo'], 'backEnd'],

    ['MVC-Tech-Blog', ['https://github.com/cdelacruzzin/14-Model-View-Controller-MVC-Tech-Blog', 'https://warm-spire-10804-b87ddf9aa334.herokuapp.com/', 'deployment'], 'backEnd'],

    ['ORM-E-Commerce-Back-End', ['https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End', 'https://github.com/cdelacruzzin/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End#demo-links', 'demo'], 'backEnd'],

    ['SQL-Employee-Tracker', ['https://github.com/cdelacruzzin/12-SQL-Employee-Tracker', 'https://drive.google.com/file/d/1_Z3yE_0LUblo5XvWU2eR_SON3tpqBQgF/view', 'demo'], 'backEnd'],
  ]


  const frontEnd = [
    ['Itinerary-Planner', ['https://github.com/Koro999/itinerary-planner', 'https://koro999.github.io/itinerary-planner/', 'deployment'], 'frontEnd'],

    ['PWA-Text-Editor', ['https://github.com/cdelacruzzin/19-Progressive-Web-Applications-PWA-Text-Editor', 'https://pwa-text-editor-app-98a67a010265.herokuapp.com/', 'deployment'], 'frontEnd'],

    ['Weather-Dashboard', ['https://github.com/cdelacruzzin/Weather-Dashboard', 'https://cdelacruzzin.github.io/Weather-Dashboard/', 'deployment'], 'frontEnd']

  ]


  // console.log(allProjects)

  // console.log(project)
  // console.log(`name: ${project[0]}`)
  // console.log(`github: ${project[1][0]}`)
  // console.log(`demo-type: ${project[1][2]}`)
  // console.log(`deployment: ${project[1][1]}`)
  // console.log(`category: ${project[2]}`)
  // console.log('')
  const allProjects = [topProjects, frontEnd, backEnd]





  // const setProjects = (projects) => projects.map((projectCategory) =>
  //   projectCategory.map((project) =>
  //     < div className='project-entry-column col-md-4' >
  //       <div className='img-container'>
  //         <div className='thumb-info thumb-info-hide-wrapper-bg '>
  //           <span className='img-wrapper '>
  //             <img className='project-img' src={TSUNPHASE} alt='' />
  //             <span className='thumb-info-title'>
  //               <span className='thumb-info-inner'>
  //                 {project[0]}
  //               </span>
  //             </span>
  //           </span>
  //         </div>
  //         <div className="description-box d-flex justify-content-center">
  //           <div className="repo bg-dark d-flex ">
  //             <a className='project-links' href={project[1][0]}>
  //               github
  //             </a>
  //           </div>
  //           <div className="repo bg-dark d-flex">
  //             <a className='project-links' href={project[1][1]}>
  //               {project[1][2]}
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div >
  //   )
  // )
  // // console.log(setProjects)



  // const setCategory = allProjects.map((projectCat) =>

  // // console.log({...projectCat})
  //   <div className="d-flex flex-column align-items-center p-5">

  //     <div className="vertical-line my-5"></div>
  //     <h2 className='heading'>doosos</h2>
  //     <div className='horizontal-line rounded-box'></div>
  //     <div className='project-container row'>
  //       {setProjects({projectCat})}
  //     </div>
  //   </div>
  // )




  const setProjects = (projects) => {
    return projects.map((projectCategory) => 
      

          // console.log(projectCategory)
          
          // console.log('')

          // console.log(`name: ${projectCategory[0]}`)
          // console.log(`github: ${projectCategory[1][0]}`)
          // console.log(`deployment: ${projectCategory[1][1]}`)
          // console.log(`type: ${projectCategory[1][2]}`)
          <div className='project-entry-column col-md-4'>
            <div className='img-container'>
              <div className='thumb-info thumb-info-hide-wrapper-bg'>
                <span className='img-wrapper'>
                  <img className='project-img' src={TSUNPHASE} alt='' />
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
  };
  
  const setCategory = allProjects.map((projectCat) => {
    console.log(projectCat[0][2])
    return (
      <div className="d-flex flex-column align-items-center px-5">
        <div className="vertical-line my-5"></div>
        <h2 className='heading'>{projectCat[0][2]}</h2>
        <div className='horizontal-line rounded-box'></div>
        <div className='project-container row'>
          {setProjects(projectCat)}
        </div>
      </div>
    );
  });
  



  // delete this later
  const insertTopProjects = Object.keys(topProjects).map((project) =>
    < div className='project-entry-column col-md-4' >
      <div className='img-container'>
        <div className='thumb-info thumb-info-hide-wrapper-bg '>
          <span className='img-wrapper '>
            <img className='project-img' src={TSUNPHASE} alt='' />
            <span className='thumb-info-title'>
              <span className='thumb-info-inner'>
                {project}
              </span>
            </span>
          </span>
        </div>
        <div className="description-box d-flex justify-content-center">
          <div className="repo bg-dark d-flex ">
            <a className='project-links' href={topProjects[project][0]}>
              github
            </a>
          </div>
          <div className="repo bg-dark d-flex">
            <a className='project-links' href={topProjects[project][1]}>
              {topProjects[project][2]}
            </a>
          </div>
        </div>
      </div>
    </div >
  )




  return (

<div>
      {setCategory}
</div>
  );
}
