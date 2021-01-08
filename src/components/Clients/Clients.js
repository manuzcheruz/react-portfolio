import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'

import './Clients.css'

// import libryo from '../../Assets/libryo.svg'
// import sakaajira from '../../Assets/sakaajira.svg'

function Clients() {
    const [ clients, setClients ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/clients/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setClients(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    let data = 'no clients yet'
    if (clients){
      data = clients.map(client => (
                <img
                  key={client.id}
                  alt=''
                  src={client.thumbnail}
                  className="filter-grey"
                />
              ))
    }

    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="work-wrapper">
                <Fade bottom>
                    <h1>Clients</h1>
                </Fade>
                <Fade bottom>
                    <div className="svgs" style={{marginTop: '30px'}}>
                        {data}
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Clients
