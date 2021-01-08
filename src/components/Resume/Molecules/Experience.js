import React, {useEffect, useState} from 'react'
import Res from '../../Atoms/Res'

function Education() {
    const [ experience, setExperience ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/experience/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setExperience(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])
    return (
        <div>
            {experience && experience.map(ex => {
                return (
                    <Res
                        key={ex.title}
                        title={ex.company}
                        subTitle={ex.role}
                        period={ex.period}
                        url={ex.url} />
                    )
            })}
        </div>
    )
}

export default Education
