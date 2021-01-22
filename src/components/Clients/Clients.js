import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'

import './Clients.css'

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

function Clients() {
    const [ clients, setClients ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/clients1/')
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

    let data = placeHolder.map((item, i)=> {
      return (
        <span style={{marginLeft: '10px', marginTop: '20px'}}>
          <Skeleton width={200} height={70} />
        </span>
      )
    })
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
