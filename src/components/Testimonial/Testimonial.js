import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../Resume/Resume.css'

function Testimonial() {
    const [ testimonials, setTestimonials ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/testimonials/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setTestimonials(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="resume-wrapper">
                <Fade bottom>
                    <h1>Trusted by brands</h1>
                    <h1>all over the world</h1>
                </Fade>
                <Fade bottom>
                    <CarouselProvider
                        naturalSlideWidth={50}
                        naturalSlideHeight={10}
                        totalSlides={testimonials.length}
                    >
                        <Slider>
                            {testimonials && testimonials.map((test, i) => {
                                return (
                                    <Slide index={i} key={i}>
                                        <div className="row">
                                            <div className="column">
                                                <h5>hehe</h5>
                                            </div>
                                            <div className="column">
                                                <h4>{test.title}</h4>
                                                <h5>{test.description}</h5>
                                                <h5>{test.name}</h5>
                                                <h5>{test.role}</h5>
                                            </div>
                                        </div>
                                    </Slide>
                                )
                            })}
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Testimonial
