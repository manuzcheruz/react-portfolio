import React, {useState, useEffect} from 'react'

import './Footer.css'

function Footer() {
  const [social, setSocial] = useState('')
  const [mail, setMail] = useState('')
  useEffect(()=> {
    fetch('https://kipkemoi-backend.herokuapp.com/social/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setSocial(response)
        })
        .catch(err => {
          console.log(err);
        })
  }, [])

  useEffect(()=> {
    fetch('https://kipkemoi-backend.herokuapp.com/mail/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          setMail(response)
        })
        .catch(err => {
          console.log(err);
        })
  }, [])
    return (
        <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
        <div className="line"></div>
        <div className="icons-email">
          <div className="social-icons">
            {social && social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingLeft: '15px'}}
              >
                <img src={socialLink.icon} alt="icons"></img>
              </a>
            ))}
          </div>
          {mail && mail.map(item => {
            return (
              <a className="email-link" href={`mailto:${item.email}`}>
                {item.email}
              </a>
            )
          })}
        </div>
        </div>
      </div>
    </div>
    )
}

export default Footer
