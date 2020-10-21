import React from 'react'

export default (props) => 
    <div className="card-group">
        <div className="card-group-header">
            <h2 className="card-group-header-title">{props.title}</h2>
        </div>
        <div className="card-group-body">
            {props.children}
        </div>
    </div>