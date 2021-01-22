import React, {useState, useEffect} from 'react'
import Res from '../../Atoms/Res'
import Skeleton from 'react-loading-skeleton'

function Courses() {
    const [ courses, setCourses ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/courses1/')
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

    let data = <div style={{textAlign: 'left'}}>
      <div style={{paddingTop: '30px'}}><Skeleton height={40} width={190} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={330} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>

      <div style={{paddingTop: '50px'}}><Skeleton height={40} width={190} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={330} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>

      <div style={{paddingTop: '50px'}}><Skeleton height={40} width={190} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={330} /></div>
      <div style={{paddingTop: '20px'}}><Skeleton height={30} width={250} /></div>
    </div>
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
