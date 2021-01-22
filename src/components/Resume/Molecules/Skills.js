import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import Aux from '../../../hoc/Aux'

const placeHolder = [
    {
        'first': [
            {
                one: '1'
            },
            {
                two: '2'
            },
            {
                three: '3'
            },
            {
                four: '3'
            }
        ],
    },
    {
        'first': [
            {
                one: '1'
            },
            {
                two: '2'
            },
            {
                three: '3'
            },
            {
                four: '3'
            }
        ]
    },
    {
        'first': [
            {
                one: '1'
            },
            {
                two: '2'
            },
            {
                three: '3'
            },
            {
                four: '3'
            }
        ]
    }

]

function Skills() {
    const [ category, setCategory ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/category1/')
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

    console.log(placeHolder);

    let data = placeHolder.map((item ,i)=> {
        return (
        <div className="column">
                            <h3><Skeleton width={200} height={40} /></h3>
                            {item.first.map((item, i)=>{
                                return (
                                    <Aux>
                                        <h4 className="ex-content"><Skeleton width={170} height={30} /></h4>     
                                    </Aux>
                                )
                            })}
                        </div>

        )
    })
    if (category) {
        data = category.map(cat => {
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
            })
    }
    return (
        <div className="row">
            {data}
        </div>
    )
}


export default Skills
