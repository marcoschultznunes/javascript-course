import React from 'react'

export default (props) => { 
    const styling = {
        backgroundColor: props.color || '#222',
        borderColor: props.color || '#222'
    }

    return (
        <div className="card" style={styling}>
            <div className="card-header" style={styling}>
                <h2 className="card-header-title">{props.title}</h2>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}