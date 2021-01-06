import React, {useEffect, useState} from 'react'

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
    return (
        <div>
            {tools && tools.map(tool => {
                return (
                    <h4 className="ex-title">{tool.tool}</h4>
                )
            })}
        </div>
    )
}

export default Tools
