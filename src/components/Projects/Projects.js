import React, { useEffect, useState } from 'react'

import Card from "../Atoms/Card"
import Fade from "react-reveal/Fade"

// import data from '../../data'
import './Projects.css'
import Skeleton from 'react-loading-skeleton'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    },
    {
        three: '3'
    },
    {
        four: '3'
    }
]

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

    let data = placeHolder.map((item, i) => {
      return (
        <Card 
          loader={<Skeleton width={350} height={250}/>}
          />
      )
    })
    if (projects){
      data = projects.map(project => (
                <Card
                  key={project.title}
                  heading={project.title}
                  videoUrl={project.thumbnail}
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
