import React from 'react';

const Multiplier = (props) => {
    const { operator, factor } = props

    return (
        <React.Fragment>
            <button 
                style={{backgroundColor: 'darkred'}}
                onClick={() => operator(factor)}
            >
                {factor}
            </button> 
        </React.Fragment>
    )
}

export default Multiplier