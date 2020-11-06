/*
    4 Approaches to condional rendering in React:

    1 - if/else
    2 - using a variable (also works inside JSX, so its the preferred)
    3 - ternary operator
    4 - logic operator (it's for toggling visibility)
*/

// 1 - if/else
export class TrueFalseIf extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            color: 'green'
        }
    }

    render() { 
        if(this.state.color === 'green'){
            return <h3 className='green-text'>You can go on!</h3>
        } else{
            return <h3 className='red-text'>You should stop.</h3>
        }
    }
}

// 2 - using a variable
export const TrueFalseVariable = () => {
    const color = 'red'
    let elements = null

    if(color === 'green'){
        elements = <h3 className='green-text'>You can go on!</h3>
    } else{
        elements = <h3 className='red-text'>You should stop.</h3>
    }
    
    return elements
}

// 3 - ternary operator
export const TrueFalseTernary = () => {
    const color = 'green'

    return(
        color === 'green' ? 
            <h3 className='green-text'>You can go on!</h3>:
            <h3 className='red-text'>You should stop.</h3>
    )
}

// 4 - logic operator
export const TrueFalseLogic = () => {
    const color = 'black'

    return(
        color === 'green' && <h3 className='green-text'>You can go on!</h3>
    )
}