import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'

import './Work.css'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    },
    {
        three: '3'
    }
]
function Work() {
    const [ projects, setProjects ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/work/')
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
        let paddingTop = 0
                            if (i === 1 || i === 3 ){
                                paddingTop = 110
                            }
        return (
            <div key={i} style={{paddingTop: `${paddingTop}px`}} className="column-work">
                                    <div className="work-card">
                                        <div className="work-img">
                                            <Skeleton height={600} />
                                        </div>
                                        <div>
                                            <h2 className="work-title"><Skeleton height={30} /></h2>
                                            <p className="work-desc"><Skeleton count={6} height={20} /></p>
                                        </div>
                                    </div>
                                </div>
        )
    })
    if (projects) {
        data = projects.map((item, i) => {
                            let paddingTop = 0
                            if (i === 1 || i === 3 ){
                                paddingTop = 110
                            }
                            return (
                                <div key={i} style={{paddingTop: `${paddingTop}px`}} className="column-work">
                                    <div className="work-card">
                                        <div className="work-img">
                                            <img style={{height: '100%', width: '100%'}} src={item.thumbnail} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="work-title"><a style={{textDecoration: 'none', color: 'black'}} href={item.url}>{item.title}</a></h2>
                                            <div className="work-desc">{item.description}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
    }
    return (
        <div className="section">
        <div className="container">
            <div className="work-I-do-wrapper">
                <Fade bottom>
                    <div className="title">The work I do,</div>
                    <div className="title">and businesses I help.</div>
                </Fade>
                <Fade bottom>
                    <div className="row-work">
                        {data}
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Work
