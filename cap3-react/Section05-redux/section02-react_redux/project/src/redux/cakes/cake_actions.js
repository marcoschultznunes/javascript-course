import {BUY_CAKE} from './cake_types'

export const buyCake = (cakesToBuy = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakesToBuy
    }
}
