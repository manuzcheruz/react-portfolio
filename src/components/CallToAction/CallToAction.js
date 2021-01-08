import React from 'react'
import Fade from 'react-reveal/Fade'
import Arrow from '../../Utilities/Arrow'

function CallToAction() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="work-wrapper">
                <Fade bottom>
                    <h1>Let me know if you want to</h1>
                    <h1>talk about a potential</h1>
                    <h1>collaboration. I'm available</h1>
                    <h1>for freelance work.</h1>
                    <h1 style={{textDecoration: 'underline', marginTop: '100px', color: '#f5b48c'}}>
                        Lets create your web app <span style={{paddingLeft: '10px'}}><Arrow height={35} /></span>
                    </h1>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default CallToAction
