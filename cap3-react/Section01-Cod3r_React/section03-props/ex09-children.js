/*
    We'll make a card component, and a card group component, which will have many cards 
    inside    
*/

// The card group component
import React from 'react'

export default (props) => 
    <div className="card-group">
        <div className="card-group-header">
            <h2 className="card-group-header-title">{props.title}</h2>
        </div>
        <div className="card-group-body">
            {props.children} {/* The elements passed inside the component's tags */}
        </div>
    </div>

// The card componenet
import React from 'react'

export default (props) => 
    <div className="card">
        <div className="card-header">
            <h2 className="card-header-title">{props.title}</h2>
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>


// The index.js file
import Card from './components/section02/card'
import CardGroup from './components/section02/card_group'
 
const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <CardGroup title="Shop">
            <Card title="Products">
                <ul>
                    <li>Notebooks</li>
                    <li>PCs</li>
                    <li>Monitors</li>
                </ul>
            </Card>
            <Card title="Services">
                <ul>
                    <li>Installation</li>
                    <li>Repairs</li>
                    <li>Help</li>
                    <li>Tutoring</li>
                </ul>
            </Card>
            <Card title="Information">
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Location</li>
                </ul>
            </Card>
            <Card title="Policy">
                <ul>
                    <li>Terms</li>
                    <li>Regulations</li>
                    <li>Issues</li>
                </ul>
            </Card>
            <Card title="User Portal">
                <ul>
                    <li>Chat</li>
                    <li>Forum</li>
                    <li>Reviews</li>
                </ul>
            </Card>
            <Card title="Cities">
                <ul>
                    <li>London</li>
                    <li>Berlin</li>
                </ul>
            </Card>
        </CardGroup>
        
    </div>
, root)


/* The CSS
    
    .card{
        margin: 10px;
        flex-grow: 1;
        flex-basis: 21%;
        border: 6px solid #111111;
        border-radius: 10px;
        display: flex;
        background-color: #111111;
        flex-direction: column;
    }
    .card-header{
        background-color: #111111;
        color: #eeeeee;
        display: flex;
        justify-content: center;
        font-size: 1rem;
    }
    .card-body{
        background-color: #eeeeee;
        padding: 5px;
        color: #444444;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:  1rem;
        flex-grow: 1;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    .card-body>ul{
        list-style: none;
        padding: 0px;
    }

    .card-group{
        margin: 10px; 
    }
    .card-group-header{
        background-color: #111111;
        color: #eeeeee;
        display: flex;
        justify-content: center;
        font-size: 1.3rem;
    }
    .card-group-body{
        background-color: #444444;
        padding: 5px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
*/