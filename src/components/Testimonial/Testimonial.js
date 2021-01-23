import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Skeleton from 'react-loading-skeleton'

import './Testimonial.css'
import ChevronTestimonialsLeft from '../../Utilities/Chevron/ChevronTestimonialsLeft'
import ChevronTestimonialsRight from '../../Utilities/Chevron/ChevronTestimonialsRight'

const placeHolder = [
    {
        one: '1'
    }
]

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

    let data = placeHolder.map((item, i) => {
        const dots = () => {
                                    return (
                                        <div>
                                            <span>&middot;</span>

                                        </div>
                                    )}
        return (
            <Slide index={i} key={i}>
                                        <div className="row">
                                            <div className="column">
                                                <div>
                                                    <Skeleton height={500} width={400}/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <h3 className="ex-title" style={{marginTop: '50px'}}><Skeleton height={40} width={350} /></h3>
                                                <div className="cont">
                                                    <h4 className="ex-content" style={{color: 'black', textAlign: 'left', fontWeight: '100'}}><Skeleton height={180} width={400} /></h4>
                                                </div>
                                                <h4 style={{marginTop: '20px', textAlign: 'left'}}><span><Skeleton height={20} width={200} /></span><span style={{paddingLeft: '10px', color: 'grey'}}><Skeleton height={20} width={70} /></span></h4>
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
    })

    if (testimonials) {
        data = testimonials.map((test, i) => {
                                const dots = () => {
                                    return (
                                        <div>
                                            <span>&middot;</span>

                                        </div>
                                    )
                                }
                                return (
                                    <Slide index={i} key={i} className="testing2">
                                        <div className="row">
                                            <div className="column">
                                                <div>
                                                    <img alt="" src={test.thumbnail} height="100%" width="100%" />
                                                </div>
                                            </div>
                                            <div className="column">
                                                <p className="ex-title" style={{marginTop: '50px'}}>{test.title}</p>
                                                <div className="cont">
                                                    <p className="ex-content" style={{color: 'black', textAlign: 'left', fontWeight: '100'}}>{test.description}</p>
                                                </div>
                                                <p className="name"><span>{test.name}</span><span className="role">{test.role}</span></p>
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
                            })
    }

    return (
        <div className="section" id="testimonial">
        <div className="container">
            <div className="testimonial-wrapper">
                <Fade bottom>
                    <div className="title1">Trusted by brands</div>
                    <div className="title1">all over the world</div>
                </Fade>
                <Fade bottom>
                    <CarouselProvider
                        naturalSlideWidth={50}
                        naturalSlideHeight={20}
                        totalSlides={testimonials ? testimonials.length : placeHolder.length}
                    >
                        <Slider className="testing-hehe" >
                            {data}
                        </Slider>
                        
                    </CarouselProvider>
                </Fade>
            </div>
        </div>
    </div>
    )
}

export default Testimonial
