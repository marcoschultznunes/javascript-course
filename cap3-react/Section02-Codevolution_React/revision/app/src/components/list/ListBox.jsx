import React, { Component } from 'react';
import List from './List';
import ListButtons from './ListButtons';
import shuffle from './utils/shuffle';
import { ListControlProvider } from './ListControlContext';

class ListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            hidden: true,
            sorted: 'desc',
            list: [
                'Oasis', 'Nirvana', 'Blind Guardian', 'Megadeth', 'Radiohead', 'Blur'
            ]
        }
    }

    toggleList = () => {
        this.setState(prevState => ({hidden: !prevState.hidden}))
    }

    sortList = () => {
        if(this.state.sorted === 'desc'){
            this.state.list.sort()
        } else {
            this.state.list.reverse()
        }

        this.setState(prevState => ({sorted: prevState.sorted === 'desc' ? 'asc' : 'desc'}))
    }

    shuffleList = () => {
        this.setState(prevState => ({list: shuffle(prevState.list)}))
    }

    render() { 
        return (  
            <div>
                <ListControlProvider 
                    value={{
                        list:this.state.list,
                        hidden: this.state.hidden,
                        sorted: this.state.sorted,
                        toggleList: this.toggleList,
                        sortList: this.sortList,
                        shuffleList: this.shuffleList,  
                    }}
                >
                    <ListButtons />
                    <List />
                </ListControlProvider>
            </div>
        );
    }
}
 
export default ListBox;
