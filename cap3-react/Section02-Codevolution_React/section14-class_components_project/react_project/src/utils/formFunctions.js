import React from 'react';
import Axios from 'axios';
import {ucFirst} from './stringUtils';

export const updateStateFromInput = (event, component) => {
    component.setState({
        [event.target.name]: event.target.value
    })
}

export const submitForm = (endpoint, component) => {
    let path = 'http://localhost:8083/' + endpoint 

    if(component.props.method === 'patch'){
        path += '/' + component.props.item.id
    }

    Axios[component.props.method](path, component.state)
        .then(res => {
            if(res){
                alert(res.data.message)
                component.props.changePage(ucFirst(endpoint))
            } else{
                alert('The server did not respond')
            }
        })
        .catch(e => {
            console.log(e.response)
            alert(e.response.data)
        })
}

export const makeIdInput = (component) => {
    if(component.props.method === 'patch'){ 
        return(
            <React.Fragment> 
                <label>ID</label>
                <input type="text" value={component.props.item.id} className='read-only-input' 
                    readOnly />
            </React.Fragment> 
        ) 
    }
    else{
        return ''
    }
}