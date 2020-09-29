const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
require('./customers_model')
const CustomersModel = mongoose.model('customers')

const secrets = require('./secrets')
const { response } = require('express')
const connectionKey = "mongodb+srv://marcola:" + secrets.pw + "@cluster0.p4xhv.mongodb.net/" + secrets.db + "?retryWrites=true&w=majority"

mongoose.connect(connectionKey, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to the Customers database.')
})


app.get('/', (req, res) => {
    res.send('Welcome to the Customers service!')
})

app.get('/customers', (req, res) => {
    CustomersModel.find().then(results => {
        res.json(results)
    }).catch(error => {
        if(error){
            res.status(400).send({message:error.message})
        }
    })
})

app.get('/customers/:id', (req, res) => {
    const id = req.params.id

    CustomersModel.findById(id).then(customer => {
        if(customer){
            res.json(customer)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        if(error){
            res.status(400).send({message: error.message})
        }
    })
})

app.post('/customers', (req, res) => {
    const customerObject = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }

    let customer = new CustomersModel(customerObject)
    
    customer.save().then(() => {
        console.log('Customer created!')
        res.sendStatus(200)
    }).catch((error) => {
        if(error){
            res.status(400).send({message: error.message})
        }
    })
})

app.patch('/customers/:id', (req, res) => {
    const id = req.params.id

    CustomersModel.findOneAndUpdate({_id: id}, req.body).then(success => {
        if(success){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        if(error){
            res.status(400).send({message: error.message})
        }
    })
})

app.delete('/customers/:id', (req, res) => {
    const id = req.params.id

    CustomersModel.findOneAndDelete({_id:id}).then(success => {
        if(success){
            res.sendStatus(200)
        }
        else{
            res.sendStatus(404)
        }
    }).catch(error => {
        if(error){
            res.status(400).send({message: error.message})
        }
    })
})

app.listen(8084, () => {
    console.log('Listening on the port 8084')
})