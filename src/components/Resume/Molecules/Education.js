import React, {useEffect, useState} from 'react'
import Res from '../../Atoms/Res'

function Education() {
    const [ education, setEducation ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/education/')
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
    return (
        <div>
           {education && education.map(ed => {
                return (
                    <Res
                        key={ed.university}
                        title={ed.university}
                        subTitle={ed.course}
                        period={ed.period} />
                )
            })}
        </div>
    )
}

export default Education
