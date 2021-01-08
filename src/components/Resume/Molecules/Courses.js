import React, {useState, useEffect} from 'react'
import Res from '../../Atoms/Res'

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
    return (
        <div>
            {courses && courses.map(course => {
                return (
                    <Res
                        key={course.title}
                        title={course.title}
                        subTitle={course.sub_title}
                        period={course.period}
                        url={course.url} />
                )
            })}

        </div>
    )
}

export default Courses
