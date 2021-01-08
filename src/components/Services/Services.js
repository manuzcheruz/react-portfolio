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
                            <div className="serv-card" style={{backgroundColor: 'white', padding: '15px'}}>
                                <div style={{textAlign: 'left'}}>
                                    <img src={service.thumbnail} height="70px" alt="" />
                                </div>
                                <div className="serv-title" style={{marginTop: '10px'}}>
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
        <div className="container" style={{marginTop: '50px'}}>
            <div style={{display: 'block', zIndex: '1', textAlign: 'center' , height: '500px', backgroundColor: '#f2f7f7', width: '45%'}}>
            <div className="services-wrapper" style={{zIndex: '2', width:'900px', marginLeft:'-200px'}}>
                <Fade bottom>
                    <h1 style={{paddingBottom: '20px', marginLeft: '150px'}}>Services</h1>
                </Fade>
                <Fade bottom>
                    <div className="row">
                        {data}
                    </div>
                </Fade>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Services
