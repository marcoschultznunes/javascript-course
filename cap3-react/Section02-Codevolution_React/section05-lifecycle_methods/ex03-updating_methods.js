/*
    These methods are called when the state changes and the components must be re-rendered.
    Changing the state in the parent component will also make its child components update
    and trigger these methods.
    
    They are:
        (static) getDerivedStateFromProps(props, state)
        shouldComponentUpdate(nextProps, nextState) 
        render, 
        getSnapshotBeforeUpdate(prevProps, prevState)
        and componentDidUpdate(prevProps, prevState, snapshot) => The most commonly used.

    1 - (static method) getDerivedStateFromProps(props, state):
        - Used when the state depends on the changes in props over time
        - therefore, it is used to set the state
        - since it is a static method, the this keyword does not work, so instead of 
            directly changing the state, it should return the new state value

    2 - shouldComponentUpdate(nextProps, nextState):
        - Creates a conditional logic that decides if the component should be updated based
            on the state and props
        - Returns true or false
        - Should not make any changes, like modifying the state.

    3 - render():
        - Read props and state and then return JSX
        - Do not change, or interact with the DOM, nor send http requests in this method.
        - Before moving on to componentDidMount, all mounting methods of each child child
            component are called.

    4 - getSnapshotBeforeUpdate(prevProps, prevState):
        - Useful for capturing information from the DOM
        - Returns a value that is passed to the componentDidUpdate method as its 3rd param

    5 - componentDidUpdate(prevProps, prevState, snapshot):
        - Called after the component has been fully re-rendered
        - Called only once during each re-render cycles
        - Ideal method to send http requests, fetching or posting data.

    Except for render and componentDidUpdate, the other methods should not be used oten, 
    and used with good understanding.
*/