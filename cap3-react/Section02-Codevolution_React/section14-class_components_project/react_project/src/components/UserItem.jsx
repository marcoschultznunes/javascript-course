import React, { Component } from 'react';
import ItemHOC from './ItemHOC';

class UserItem extends Component{

    render(){
        const {id, name, surname, role} = this.props

        return (
            <tr className='list-product' ref={this.props.selfRef}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{role}</td>
                <td>
                    {this.props.renderButtons()}
                </td>
            </tr>
        )
    }
}

export default ItemHOC(UserItem, 'users')