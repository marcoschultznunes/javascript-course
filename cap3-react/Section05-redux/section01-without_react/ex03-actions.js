/*
    First we'll create an action. An action must be an oject with a type attribute,
    the type attribute is a string which will tell the reducer what needs to be done
    by the means of a switch structure.

    There are two peculiar things about actions:
        1 - We declare actions by making a constant with its own name as its value =>
            This is to avoid the mistake of miss typing the action type
        2 - We make a function, called action creator, which returns the action object =>
            This is to help with code maintenance, because we'll only need to write any changes
            on the action creator function
*/

const BUY_CAKE = 'BUY_CAKE'

const buyCake = () => { 
    return {
        type: BUY_CAKE
    }
}

/*
    Note: actions can have more properties than just type, such as payload, which is used for
    storing fetched data.
*/
