import React, {Component} from 'react';

const incrementComponent = WrappedComponent => {
    class IncrementComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                clicks: 0
            }
        }
    
        incrementClicks = () => {
            this.setState((prevState) => (
                {
                    clicks: prevState.clicks + 1
                }
            ))
        }

        render(){
            return (
                <WrappedComponent 
                    clicks={this.state.clicks} 
                    incrementClicks={this.incrementClicks}
                />
            )           
        }
    }
     
    return IncrementComponent;
}

export default incrementComponent