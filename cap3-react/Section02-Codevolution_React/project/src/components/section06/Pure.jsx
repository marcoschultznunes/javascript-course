import React, { PureComponent } from 'react';

class Pure extends PureComponent {
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