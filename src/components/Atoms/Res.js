import React from 'react'

function Res({title, subTitle, period}) {
    return (
        <div className="block">
            <h3>{title}</h3>
            <h4 className="ex-title">{subTitle}</h4>
            <h4 className="ex-content">{period}</h4>
        </div>
    )
}

export default Res
