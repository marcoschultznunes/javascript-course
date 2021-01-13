/*
    We'll start to implement the redux global state by defining the buy cake action. The folder
structure of the project will be the following:
    
    Redux
        (Entities)
        Cakes
            Cake Types
            Cake Actions
            Cake Reducer
        Ice Creams
            Ice Cream Types
            Ice Cream Actions
            Ice Cream Reducer
        store.js => the global store
        index.js => file from which types, actions, reducers will be gathered to be exported
*/

/* cake_types.js */
export const BUY_CAKE = 'BUY_CAKE'

/* cake_actions.js */
import {BUY_CAKE} from './cake_types'

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}
