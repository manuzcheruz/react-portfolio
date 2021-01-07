import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'

import './Services.css'

function Services() {
    const [ services, setServices ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/services/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setServices(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    let data = 'no services yet'
    if (services){
      data = services.map(service => (
                <div className="column">
                            <div className="serv-card">
                                <div style={{textAlign: 'left'}}>
                                    <img src={service.thumbnail} height="20px" alt="" />
                                </div>
                                <div className="serv-title">
                                    <h2>
                                        {service.title}
                                    </h2>
                                </div>
                                <div className="serv-content">
                                    <h5>
                                        {service.description}
                                    </h5>
                                </div>
                            </div>
                        </div>
              ))
    }
    return (
        <div className="section" id="services">
        <div className="container">
            <div className="services-wrapper">
                <Fade bottom>
                    <h1>Services</h1>
                </Fade>
                <Fade bottom>
                    <div className="row">
                        {data}
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Services
