import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Accordion from '../../Utilities/Accordion/Accordion'

import './Faq.css'

function Faq() {
    const [ faqs, setFaqs ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/faqs/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setFaqs(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])
    
    return (
        <div className="section" id="faqs">
        <div className="container">
            <div className="faq-wrapper">
                <Fade bottom>
                    <h1>A few things <span className="faq-emoji">&#128580;</span></h1>
                    <h1>clients normally ask me:</h1>
                </Fade>
                <Fade bottom>
                    <div className="faq" style={{width: '100%'}}>
                        {faqs && faqs.map(faq => {
                            return (
                                <Accordion
                                    title={faq.question}
                                    content={faq.answer}
                                    />
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Faq
