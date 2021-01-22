import React from 'react'
import Aux from '../../hoc/Aux'
import Arrow from '../../Utilities/Arrow'

function Res({title, subTitle, period, url, loader}) {
    return (
        <div className="block">
            {loader ? loader : 
            <Aux>
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
            </Aux>}
        </div>
    )
}

export default Res
