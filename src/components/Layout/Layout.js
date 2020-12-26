import React from 'react'

import CallToAction from '../CallToAction/CallToAction'
import Clients from '../Clients/Clients'
import Faq from '../Faq/Faq'
import Footer from '../Footer/Footer'
import Header from '../Header/header'
import Navbar from '../Navbar/navbar'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import Work from '../work/Work'

const layout = props => {
    return (
        <div>
            <Navbar />
            <Header />
            <Projects />
            <Clients />
            <Services />
            <Resume />
            <Work />
            <Testimonial />
            <Faq />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default layout