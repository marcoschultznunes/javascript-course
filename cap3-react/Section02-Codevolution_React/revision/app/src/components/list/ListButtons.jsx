import React, { Component } from 'react';
import ListControlContext from './ListControlContext';

class ListButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static contextType = ListControlContext

    render() { 
        const {hidden, sorted, toggleList, sortList, shuffleList} = this.context

        return (
            <div>
                <button 
                    className={hidden ? 'bg-red' : 'bg-green'} 
                    onClick={toggleList}
                >  
                    Toggle List
                </button>

                <button
                    className={sorted === 'desc' ? 'bg-orange' : 'bg-blue'}
                    onClick={sortList}
                >
                    Sort {sorted === 'desc' ? 'DESC.' : 'ASC.'}
                </button>
                
                <button
                    className={'bg-purple'}
                    onClick={shuffleList}
                >
                    Shuffle
                </button>
            </div>
            
        );
    }
}
 
export default ToggleListButton;
