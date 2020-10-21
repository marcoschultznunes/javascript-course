import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/section02/card.css'
import './css/section02/card_group.css'

import Where from './components/section02/where_are_you'
import Dont from './components/section02/dont_waste'
import SizedText from './components/section02/sized_text'

import Card from './components/section02/card'
import CardGroup from './components/section02/card_group'
 
const root = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Hello There</h1>
        <Where />
        <Dont />
        <SizedText h="5" text="Ma Boi"/>
        
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
