import React, {Component} from 'react';
import incrementComponent from './incrementComponent';

class ClickComponent extends Component{
    
    render(){
        const {clicks, incrementClicks} = this.props 
        
        return (  
            <div>
                <h3>{clicks}</h3>
                <button className='green-button' onClick={incrementClicks}>Increment</button>
            </div>
        );
    }
}
 
export default incrementComponent(ClickComponent);