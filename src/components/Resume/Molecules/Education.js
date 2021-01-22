import React, {useEffect, useState} from 'react'
import Res from '../../Atoms/Res'
import Skeleton from 'react-loading-skeleton'
import Aux from '../../../hoc/Aux'

const placeHolder = [
    {
        one: '1'
    }
]

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
