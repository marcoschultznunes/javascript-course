/*
    We can pass CSS styling as a prop attribute to our components
*/

// The component
import React from 'react'

export default (props) => { 
    const styling = {
        backgroundColor: props.color || '#222', //Default color = #222222
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


// The index.js file
const root = document.getElementById('root')
ReactDOM.render(
    <CardGroup title="Shop">
        <Card title="Products" color="#111155">
            <ul>
                <li>Notebooks</li>
                <li>PCs</li>
                <li>Monitors</li>
            </ul>
        </Card>
        <Card title="Services" color="#992222">
            <ul>
                <li>Installation</li>
                <li>Repairs</li>
                <li>Help</li>
                <li>Tutoring</li>
            </ul>
        </Card>
        <Card title="Information"> {/* This one will have the default color */}
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Location</li>
            </ul>
        </Card>
    </CardGroup>
, root)