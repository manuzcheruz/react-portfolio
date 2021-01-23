import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Accordion from '../../Utilities/Accordion/Accordion'
import Skeleton from 'react-loading-skeleton'
import Aux from '../../hoc/Aux'

import './Faq.css'


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

    let data = placeHolder.map((item ,i) => {
        return (
            <Accordion
                loader={
                    <Aux>
                        <div style={{marginTop: '15px'}}>
                            <Skeleton height={50} />
                            <Skeleton height={20} count={2} />
                        </div>
                    </Aux>
                }
                />
        )
    })

    if (faqs) {
        data = faqs.map(faq => {
                            return (
                                <Accordion
                                    title={faq.question}
                                    content={faq.answer}
                                    />
                            )
                        })
    }
    
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
                        {data}
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Faq
