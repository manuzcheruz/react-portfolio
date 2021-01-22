import React, {useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'

const placeHolder = [
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
    },
    {
        five: '3'
    },
    {
        six: '3'
    }
]

function Tools() {
    const [ tools, setTools ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/tools/')
        .then(res => {
          return res.json()
        })
        .then(response => {
          // console.log(response);
          setTools(response)
        })
        .catch(err => {
          console.log(err);
        })
    }, [])

    let data = placeHolder.map((item, i) => {
      return (
        <h4 className="ex-title"><Skeleton height={30} width={250}/></h4>
      )
    })
    if (tools) {
      data = tools.map(tool => {
                return (
                    <h4 className="ex-title">{tool.tool}</h4>
                )
            })
    }
    return (
        <div>
            {data}
        </div>
    )
}

export default Tools
