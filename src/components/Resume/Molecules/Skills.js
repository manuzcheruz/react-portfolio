import React, {useState, useEffect} from 'react'

function Skills() {
    const [ category, setCategory ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/category/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setCategory(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])
    return (
        <div className="row">
            {category && category.map(cat => {
                return (
                    <div className="column">
                        <h3>{cat.title}</h3>
                            {cat.skills.map(skill => {
                                return (
                                    <h4 className="ex-content">{skill.skill}</h4>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}


export default Skills
