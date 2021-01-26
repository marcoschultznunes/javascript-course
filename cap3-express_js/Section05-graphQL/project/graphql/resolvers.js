const users = [
    {id: 1, name: 'Fofanis', email: 'salarioo@gmail.com', password: 'owmoneyyeah'},
    {id: 2, name: 'Régis', email: 'xalapabrava@gaymail.com', password: 'wtfcarai'},
    {id: 3, name: 'Morris', email: 'doors@doormail.com', password: 'ruiders on di strom'},
    {id: 4, name: 'Dagoberto', email: 'saopaulo@gaymail.com', password: 'imbambi'},
    {id: 5, name: 'Jimenez', email: 'mexicanu@meximail.com', password: 'arribamuchachos'}
]

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        
        user: () => {
            return {id: 4, name: 'Régis', email: 'xalapabrava@gaymail.com', password: 'wtfcarai'}
        },
        
        fetchUsers: () => users,
        
        getUserById: (_, {id}) => users[id - 1],
    },

    Mutation: {
        postUser: (_, {name, email, password}) => {
            const user = {id: users.length, name, email, password}

            users.push(user)

            return user
        },

        deleteUserById: (_, {id}) => {
            users[id-1] = null

            return 'Successfully deleted user!'
        },

        updateUserById: (_, {id, name, email, password}) => {
            const oldUser = users[id - 1]

            const newUser = {
                id: oldUser.id,
                name: name ? name : oldUser.name,
                email: email ? email : oldUser.email,
                password: password ? password : oldUser.password,
            }

            users[id - 1] = newUser

            return newUser
        }
    }
}

module.exports = resolvers
