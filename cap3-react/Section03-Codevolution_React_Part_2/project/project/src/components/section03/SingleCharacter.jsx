import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const SingleCharacter = () => {

    const [state, setState] = useState({character: {}, error: true})
    const [id, setId] = useState(1)

    useEffect(() => {
        Axios.get('https://swapi.dev/api/people/' + id)
            .then(res => {
                setState(prevState => ({...prevState, character: res.data, error: false}))
            })
            .catch(() => {
                setState({error: true})
            })
    }, [id])

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