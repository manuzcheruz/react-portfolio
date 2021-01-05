import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'

import Res from "../Atoms/Res";

import './Resume.css'

function Resume(props) {
    const [ experience, setExperience ] = useState('')
    const [ education, setEducation ] = useState('')
    const [ courses, setCourses ] = useState('')
    const [ skills, setSkills ] = useState('')
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
          setCourses(response)
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
                    </div>
                    <div className="row">
                        <div className="column">
                            <h2>Skills</h2>
                            <div className="row">
                                <div className="column">
                                    <h3>Design</h3>
                                    <h4 className="ex-content">Product Design</h4>
                                    <h4 className="ex-content">UI/UX Design</h4>
                                    <h4 className="ex-content">Visual Design</h4>
                                    <h4 className="ex-content">Wireframing</h4>
                                    <h4 className="ex-content">Prototyping</h4>
                                </div>
                                <div className="column">
                                    <h3>Development</h3>
                                    <h4 className="ex-content">Visual Developement</h4>
                                    <h4 className="ex-content">Webflow Developement</h4>
                                    <h4 className="ex-content">Front-End Developement</h4>
                                    <h4 className="ex-content">HTML5/CSS3</h4>
                                    <h4 className="ex-content">No-Code Solutions</h4>
                                </div>
                            </div>
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
                <Fade bottom>
                    <div className="row">
                        <div className="column">
                            <h2>Tools</h2>
                            <div className="row">
                                <div className="column">
                                    <h4 className="ex-title">Figma</h4>
                                    <h4 className="ex-title">Webflow</h4>
                                    <h4 className="ex-title">Notion</h4>
                                    <h4 className="ex-title">Bravo Studio</h4>
                                    <h4 className="ex-title">Sketch</h4>
                                </div>
                                <div className="column">
                                    <h4 className="ex-title">Whimsical</h4>
                                    <h4 className="ex-title">Adobe XD</h4>
                                    <h4 className="ex-title">After Effects</h4>
                                    <h4 className="ex-title">Photohop</h4>
                                    <h4 className="ex-title">Visual Studio Code</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Resume
