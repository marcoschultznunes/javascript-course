/*
    Pure components are components that do not update when the state is updated but the 
    value does not change. This is good for performance and can help prevent spam.

    Pure component is only for class components, but React.memo() is its equivalent for 
    function components 
*/

 
/* Example component => buttons change color. If a button is pressed and it is already the 
current color, the component will not update, because it is a PureComponent and the state
value did not change */

/* The example */
import React, { PureComponent } from 'react'; // PureComponent import

class Pure extends PureComponent { // Extend from PureComponent is what makes it special
    constructor(props) {
        super(props);
        this.state = {  
            color: 'gray-button'
        }
    }
    
    componentDidUpdate(){
        console.log('Updated the component! New color = ' + this.state.color)
    }

    colorChange = (e) => {
        let newColorClass = [e.target.name] + '-button'

        this.setState({
            color: newColorClass
        })
    }

    render() { 
        return (
            <div>
                <button name="red" className={this.state.color} onClick={this.colorChange}>
                    Red
                </button>
                <button name="green" className={this.state.color} onClick={this.colorChange}>
                    Green
                </button>
                <button name="blue" className={this.state.color} onClick={this.colorChange}>
                    Blue
                </button>
            </div>
        )
    }
}
 
export default Pure;