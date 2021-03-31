// @ts-nocheck


/* 
    In this example we'll connect to mongoose.
        npm i --save mongoose
        npm i --save-dev @types/mongoose
*/


/* secrets.ts (don't forget to gitignore it AND THE COMPILED .JS FILE IN THE DIST FOLDER) */
export default {
    db: 'Typescript_Test_Db',
    user: 'marcola',
    password: 'FaXAhDnD7ecnyk8'
}


/* connect.ts */
import {connect} from 'mongoose'

const connectToDb = (user: string, password: string, db: string) => { // Can be unit tested

    connect(`mongodb+srv://${user}:${password}@cluster0.p4xhv.mongodb.net/${db}?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    })
    .then(() => {
        console.log('Connected to database!')
        return true
    })
    .catch((e: Error) => {
        console.log('Could not connect to database. ' + e)
        return false
    })
}

export default connectToDb


/* On app.ts */
import secrets from './secrets'
connect(secrets.user, secrets.password, secrets.db) // TS will make sure strings are passed
