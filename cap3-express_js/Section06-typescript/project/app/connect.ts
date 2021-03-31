import {connect} from 'mongoose'

const connectToDb = (user: string, password: string, db: string) => {

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
