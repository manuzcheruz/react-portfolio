import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'

import Res from "../Atoms/Res";

import './Resume.css'

function Resume(props) {
    const [ experience, setExperience ] = useState('')
    const [ education, setEducation ] = useState('')
    const [ courses, setCourses ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ tools, setTools ] = useState('')
    useEffect(() => {
      fetch('http://127.0.0.1:8000/experience/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setExperience(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/education/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setEducation(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/courses/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setCourses(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/category/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setCategory(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/tools/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setTools(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    // let work = 'no experience yet'
    
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="resume-wrapper">
                <Fade bottom>
                    <h1>Resume</h1>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Skills</h2>
                            <div className="row">
                                {category && category.map(cat => {
                                    return (
                                        <div className="column">
                                            <h3>{cat.title}</h3>
                                            {cat.skills.map(skill => {
                                                return (
                                                    <h4 className="ex-content">{skill.skill}</h4>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Work Experience</h2>
                            {experience && experience.map(ex => {
                                return (
                                    <Res
                                        key={ex.title}
                                        title={ex.company}
                                        subTitle={ex.role}
                                        period={ex.period} />
                                )
                            })} 
                        </div>
                        <div className="column">
                            <h2 style={{paddingBottom: '30px'}}>Tools</h2>
                            {tools && tools.map(tool => {
                                return (
                                    <h4 className="ex-title">{tool.tool}</h4>
                                )
                            })}
                        </div>
                    </div>
                </Fade>
                
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Education</h2>
                            {education && education.map(ed => {
                                return (
                                    <Res
                                        key={ed.university}
                                        title={ed.university}
                                        subTitle={ed.course}
                                        period={ed.period} />
                                )
                            })}
                        </div>
                        <div className="column">
                            <h2>Online Courses</h2>
                            {courses && courses.map(course => {
                                return (
                                    <Res
                                        key={course.title}
                                        title={course.title}
                                        subTitle={course.sub_title}
                                        period={course.period} />
                                )
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Resume
