import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'

import './Footer.css'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    },
    {
        three: '2'
    },
    {
        four: '2'
    },
    {
        five: '2'
    }
]

const placeHolder2 = [
    {
        one: '1'
    }
]

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

  let data1 = placeHolder.map((item, i) => {
    return (
      <span style={{marginLeft: '15px'}}>
        <Skeleton height={60} width={60} />
      </span>
    )
  })
  if (social) {
    data1 = social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingLeft: '15px'}}
              >
                <img src={socialLink.icon} alt="icons"></img>
              </a>
            ))
  }

  let data2 = placeHolder2.map((item, i) => {
    return (
      <Skeleton height={30} width={400} />
    )
  })
  if (mail) {
    data2 = mail.map(item => {
            return (
              <a className="email-link" href={`mailto:${item.email}`}>
                {item.email}
              </a>
            )
          })
  }
    return (
        <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
        <div className="line"></div>
        <div className="icons-email">
          <div className="social-icons">
            {data1}
          </div>
          {data2}
        </div>
        </div>
      </div>
    </div>
    )
}

export default Footer
