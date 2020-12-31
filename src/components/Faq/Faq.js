import React from 'react'
import Fade from 'react-reveal/Fade'
import { Accordion, AccordionItem } from 'react-light-accordion'

import './Faq.css'
import 'react-light-accordion/demo/css/index.css'

function Faq() {
    return (
        <div className="section" id="clients">
        <div className="container">
            <div className="work-wrapper">
                <Fade bottom>
                    <h1>A few things</h1>
                    <h1>clients normally ask me:</h1>
                </Fade>
                <Fade bottom>
                    <div className="faq">
                        <Accordion atomic={true}>

                            <AccordionItem title="What is your work discipline?">
                                <DummyContent />
                            </AccordionItem>

                            <AccordionItem title="Do you work on more than one project?">
                                <DummyContent />
                            </AccordionItem>

                            <AccordionItem title="How much does your hourly rate cost?">
                                <DummyContent />
                            </AccordionItem>

                        </Accordion>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    )
}

const DummyContent = () => (
  <h3 style={{ padding: '10px', fontWeight: '100'}}>
    Yes, but I do schedule the days and hours for each project and give those hours and days to the people I work with.
  </h3>
);

export default Faq
