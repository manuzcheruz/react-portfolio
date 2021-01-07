import React, { useEffect, useState } from 'react'

import Card from "../Atoms/Card"
import Fade from "react-reveal/Fade"

// import data from '../../data'
import './Projects.css'

function Projects() {
    const [ projects, setProjects ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/projects/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setProjects(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    let data = 'no projects yet'
    if (projects){
      data = projects.map(project => (
                <Card
                  key={project.description}
                  heading={project.title}
                  paragraph={project.description}
                  imgUrl={project.thumbnail}
                  projectLink={project.url}
                ></Card>
              ))
    }
    return (
        <div className="section" id="works">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data}
            </Fade>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Projects
