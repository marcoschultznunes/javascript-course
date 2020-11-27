import React, {Component} from 'react';
import Axios from 'axios';

const ListHOC = (WrappedComponent, endpoint) => {
    class ListHOC extends Component {
        constructor(props) {
            super(props);
            this.state = {  
                items: [],
                errors: false
            }
        }
    
        componentDidMount = () => {
            Axios.get('http://localhost:8083/' + endpoint)
                .then(fetched => {
                    this.setState({
                        items: fetched.data[endpoint],
                        errors: false
                    })
                })
                .catch(e => {
                    console.log(e)
                    this.setState({errors: true})
                })
        }

        render(){
            return (
                <WrappedComponent 
                    items={this.state.items} 
                    errors={this.state.errors}
                />
            )           
        }
    }
     
    return ListHOC;
}

export default ListHOC