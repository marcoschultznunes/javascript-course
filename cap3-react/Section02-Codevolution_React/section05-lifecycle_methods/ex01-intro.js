/*
    Lifecycle methods are methods that are used in class components, that trigger 
    during certain moments of the component's lifecycle. Functional components use hooks
    instead.

    We can classify the lifecycle methods in 4 phases:
        - mounting => component created and inserted into the dom
        - updating => dom re-render (when props or state changes)
        - unmounting => component removed from the dom
        - error handling => errors during rendering, lifecycle methods or in the constructor
    
    The methods:
        - mounting => 
            constructor, 
            (static) getDerivedStateFromProps, 
            render, 
            componentDidMount;
        - updating =>
            (static) getDerivedStateFromProps,
            shouldComponentUpdate,
            render,
            getSnapshotBeforeUpdate,
            componentDidUpdate;
        - unmounting =>
            componentWillUnmount;
        - error handling =>
            (static) getDerivedStateFromError,
            componentDidCatch.


    Some other lifecycle methods were deprecated since v16.4: 
        componentWillMount, 
        componentWillReceiveProps(getDerivedStateFromProps is the replacement),
        and componentWillUpdate(getSnapshotBeforeUpdate is the replacement)

    Do not use these deprecated methods.
    https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d
*/