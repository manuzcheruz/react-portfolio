import React, {useEffect, useState} from 'react'
import Res from '../../Atoms/Res'
import Skeleton from 'react-loading-skeleton'

function Education() {
    const [ education, setEducation ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/education1/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setEducation(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    let data = <div style={{textAlign: 'left'}}>
      <div style={{paddingTop: '30px'}}><Skeleton height={40} width={400} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={360} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>
    </div>
    if (education) {
      data = education.map(ed => {
                return (
                    <Res
                        key={ed.university}
                        title={ed.university}
                        subTitle={ed.course}
                        period={ed.period}
                        url={ed.url} />
                )
            })
    }
    return (
        <div>
           {data}
        </div>
    )
}

export default Education
