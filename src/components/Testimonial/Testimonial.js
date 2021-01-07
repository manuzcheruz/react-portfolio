import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../Resume/Resume.css'
import ChevronTestimonialsLeft from '../../Utilities/Chevron/ChevronTestimonialsLeft'
import ChevronTestimonialsRight from '../../Utilities/Chevron/ChevronTestimonialsRight'

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
                        naturalSlideHeight={20}
                        totalSlides={testimonials.length}
                    >
                        <Slider>
                            {testimonials && testimonials.map((test, i) => {
                                const dots = () => {
                                    return (
                                        <div>
                                            <span>&middot;</span>

                                        </div>
                                    )
                                }
                                return (
                                    <Slide index={i} key={i}>
                                        <div className="row">
                                            <div className="column">
                                                <div>
                                                    <img alt="" src={test.thumbnail} height="100%" />
                                                </div>
                                            </div>
                                            <div className="column">
                                                <h3 className="ex-title" style={{marginTop: '50px'}}>{test.title}</h3>
                                                <div className="cont">
                                                    <h4 className="ex-content" style={{color: 'black', textAlign: 'left', fontWeight: '100'}}>{test.description}</h4>
                                                </div>
                                                <h4 style={{marginTop: '40px', textAlign: 'left'}}><span>{test.name}</span><span style={{paddingLeft: '10px', color: 'grey'}}>{test.role}</span></h4>
                                                <div className="dots-chevron" style={{display: 'grid', gridTemplateColumns: '4fr 1fr 1fr' ,gridGap: '0px', width: '200px', marginTop: '40px', textAlign: 'left'}}>
                                                    <DotGroup disableActiveDots={true} renderDots={dots} />
                                                    <ButtonBack style={{border: 'none', backgroundColor: 'white'}}>
                                                        <ChevronTestimonialsLeft width={15} fill={"#777"} />
                                                    </ButtonBack>
                                                    <ButtonNext style={{border: 'none', backgroundColor: 'white'}}>
                                                        <ChevronTestimonialsRight width={15} fill={"#777"} />
                                                    </ButtonNext>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                )
                            })}
                        </Slider>
                        
                    </CarouselProvider>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Testimonial
