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
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default Faq
