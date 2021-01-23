import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'

import './Services.css'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    },
    {
        three: '2'
    }
]

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

    let data = placeHolder.map((item, i) => {
        return (
        <div className="column">
                                <div className="serv-card" style={{backgroundColor: 'white', padding: '15px'}}>
                                    <div style={{textAlign: 'left'}}>
                                        <Skeleton height={70} width={70}/>
                                    </div>
                                    <div className="serv-title" style={{marginTop: '10px'}}>
                                        <h2>
                                            <Skeleton height={40} width={250}/>
                                        </h2>
                                    </div>
                                    <div className="serv-content">
                                        <p>
                                            <Skeleton count={5} height={20} width={250}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
        )
    })
    if (services){
      data = services.map(service => (
                <div className="column">
                            <div className="serv-card" style={{backgroundColor: 'white', padding: '15px'}}>
                                <div style={{textAlign: 'left'}}>
                                    <img src={service.thumbnail} height="70px" alt="" />
                                </div>
                                <div className="serv-title" style={{marginTop: '10px'}}>
                                    {service.title}
                                </div>
                                <div className="serv-content">
                                    {service.description}
                                </div>
                            </div>
                        </div>
              ))
    }
    return (
        <div className="section" id="services">
        <div className="container" style={{marginTop: '50px'}}>
            <div className="services-top">
            <div className="services-wrapper">
                <Fade bottom>
                    <div className="title">Services</div>
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
