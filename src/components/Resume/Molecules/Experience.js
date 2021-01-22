import React, {useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import Res from '../../Atoms/Res'

function Education() {
    const [ experience, setExperience ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/experience1/')
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

    let data = <div style={{textAlign: 'left'}}>
      <div style={{paddingTop: '30px'}}><Skeleton height={40} width={190} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={330} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>

      <div style={{paddingTop: '50px'}}><Skeleton height={40} width={190} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={330} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>
    </div>
    if (experience) {
      data = experience.map(ex => {
                return (
                    <Res
                        key={ex.title}
                        title={ex.company}
                        subTitle={ex.role}
                        period={ex.period}
                        url={ex.url} />
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
