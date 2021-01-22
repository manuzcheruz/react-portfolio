import React, {useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import Aux from '../../../hoc/Aux'
import Res from '../../Atoms/Res'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    }
]

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

    let data = placeHolder.map((item, i) => {
      return (
        <Res 
          loader={<Aux>
            <h3><Skeleton height={40} width={190} /></h3>
            <h4 className="ex-title"><Skeleton height={30} width={330} /></h4>
            <h4 className="ex-content"><Skeleton height={30} width={250} /></h4> 
          </Aux>}
          />
      )
    })
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
