import React, { Component } from 'react';
import UserItem from './UserItem';
import ListHOC from './ListHOC';

class UserList extends Component {

    render() {
        console.log(this.props)

        if(this.props.errors){
            return <h2>Could not fetch from the server!</h2>
        }
        if(this.props.items.length < 1){
            return <h2>Fetching Users...</h2>
        }
        
        return (  
            <table className='product-list'>
                <thead>
                    <tr className='product-list-head'>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(product => {
                        const {_id, name, surname, role} = product

                        return(
                            <UserItem id={_id} name={name} surname={surname} role={role}
                                key={_id}/>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}
 
export default ListHOC(UserList, 'users');