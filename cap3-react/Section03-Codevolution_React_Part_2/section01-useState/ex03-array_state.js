/* 
    Note: this is a bad idea, the code becomes confusing. Perhaps it's better to implement it
by making the state an object with an array attribute, so that the attribute can be freely 
modified 
*/

/* List.jsx */
import React, { useState } from 'react';

const List = () => {

    const [state, setState] = useState([])

    const addItem = () => {
        const input = document.getElementById('item_input')
        const {value} = input

        setState([...state, {id: state.length, value: value} ])

        input.value = ''
        input.focus()
    }

    return (  
        <div>
            <input type="text" placeholder="Item" id="item_input"/>
            <button className='bg-green' onClick={addItem}>Add Item</button>
            
            <ol className='item-list'>
                {state.map(item =>
                    <li key={item.id}>
                        {item.value} 
                    </li>
                )}
            </ol>
        </div>
    );
}
 
export default List;