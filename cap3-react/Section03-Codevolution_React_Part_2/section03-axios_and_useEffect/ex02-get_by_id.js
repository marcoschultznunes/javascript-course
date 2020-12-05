/*
    In this example, an input will control the displayed element 
*/
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const SingleCharacter = () => {

    const [state, setState] = useState({character: {}, error: true})
    const [id, setId] = useState(1) 
    /* I used a different state for the ID because if it was an attribute on the state object,
    i could not pass it as a param to useEffect to watch for when it changes. */

    useEffect(() => {
        Axios.get('https://swapi.dev/api/people/' + id)
            .then(res => {
                console.log(res)
                setState(prevState => ({...prevState, character: res.data, error: false}))
            })
            .catch(() => {
                setState({error: true})
            })
    }, [id]) // Updates when the input id changes

    const updateSelectedId = (e) => {
        setId(e.target.value)
    }

    const mappedCharacter = state.error ? <h3>Could not fetch character</h3> : 
        <ul className='unstyled-list'>
            <h2>{state.character.name}</h2>
            <ul>
                <li>Height: {state.character.height}</li>
                <li>Mass: {state.character.mass}</li>
                <li>Hair Color: {state.character.hair_color}</li>
            </ul>
        </ul>

    return (  
        <div>
            <input type="text" value={id} onChange={updateSelectedId} placeholder='ID'/>
            {mappedCharacter}
        </div>
    );
}
 
export default SingleCharacter;