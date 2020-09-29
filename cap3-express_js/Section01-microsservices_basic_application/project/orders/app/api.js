const express = require('express')
const app = express()

const axios = require('axios')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
require('./orders_model')
const OrdersModel = mongoose.model('orders')

const secrets = require('./secrets')
const connectionKey = "mongodb+srv://marcola:" + secrets.pw + "@cluster0.p4xhv.mongodb.net/" + secrets.db + "?retryWrites=true&w=majority"

mongoose.connect(connectionKey, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to the Orders database.')
})


app.get('/', (req, res) => {
    res.send('Welcome to the Orders service!')
})

app.get('/orders', (req, res) => {
    OrdersModel.find().then(results => {
        if(results){
            res.json(results)
        } else {
            res.sendStatus(404)
        }
    }).catch(error => {
        if(error){
            res.status(404).send({message: error.message})
        }
    })
})

app.get('/orders/:id', (req, res) => {
    const id = req.params.id

    OrdersModel.findById({_id: id}).then(order => {
        if(order){
            let mountedOrder = {}

            axios.get('http://localhost:8084/customers/' + order.customerID).then(customer => {
                mountedOrder.customer = customer.data
                
                axios.get('http://localhost:8083/books/' + order.bookID).then(book => {
                    mountedOrder.book = book.data
                    mountedOrder.initialDate = order.initialDate
                    mountedOrder.deliveryDate = order.deliveryDate

                    res.json(mountedOrder)  
                }).catch(error => {
                    res.send({message: error.message})
                })
            }).catch(error => { 
                res.send({message: error.message})
            })

        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        if(error){
            res.status(400).send({message:error.message})
        }
    })
})

app.post('/orders', (req, res) => {
    const orderObject = {
        customerID: mongoose.Types.ObjectId(req.body.customerID),
        bookID: mongoose.Types.ObjectId(req.body.bookID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    }

    let order = new OrdersModel(orderObject)

    order.save().then(() => {
        console.log('Order created!')
        res.sendStatus(200)
    }).catch(error => {
        if(error){
            res.status(400).send({message: error.message})
        }
    })
})

app.patch('/orders/:id', (req, res) => {
    const id = req.params.id

    OrdersModel.findOneAndUpdate({_id: id}, req.body).then(success => {
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

app.delete('/orders/:id', (req, res) => {
    const id = req.params.id

    OrdersModel.findOneAndDelete(id).then(success => {
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

app.listen(8085, () => {
    console.log('Listening on the port 8085.')
})