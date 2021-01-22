import React, {useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'

function Tools() {
    const [ tools, setTools ] = useState('')
    useEffect(() => {
      fetch('https://kipkemoi-backend.herokuapp.com/tools1/')
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

    let data = <div>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
      <h4 className="ex-title"><Skeleton height={30} width={170}/></h4>
    </div>
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
