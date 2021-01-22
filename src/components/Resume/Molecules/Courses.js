import React, {useState, useEffect} from 'react'
import Res from '../../Atoms/Res'
import Skeleton from 'react-loading-skeleton'
import Aux from '../../../hoc/Aux'

const placeHolder = [
    {
        one: '1'
    },
    {
        two: '2'
    },
    {
        three: '2'
    }
]

function Courses() {
    const [ courses, setCourses ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/courses/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          setCourses(response)
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
    if (courses) {
      data = courses.map(course => {
                return (
                    <Res
                        key={course.title}
                        title={course.title}
                        subTitle={course.sub_title}
                        period={course.period}
                        url={course.url} />
                )
            })
    }
    return (
        <div>
            {data}
        </div>
    )
}

export default Courses
