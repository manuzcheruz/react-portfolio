import React from 'react'

import Arrow from '../../Utilities/Arrow'

function Res({title, subTitle, period, url}) {
    return (
        <div className="block">
            <a href={url}>
                <h3>
                {title} 
                <span style={{paddingLeft: '10px'}}>
                    <Arrow height={15} />
                </span>
                </h3>
            </a>
            <h4 className="ex-title">{subTitle}</h4>
            <h4 className="ex-content">{period}</h4>
        </div>
    )
}

export default Res
