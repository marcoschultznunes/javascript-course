// @ts-nocheck

import {Schema, model} from 'mongoose'

export type BookType = {
    title: string,
    numOfPages: string
}

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    numOfPages: {
        type: Number,
        required: true,
        min: [1, 'Book must have at least a page.']
    },
    __v: {type: Number, select: false}, // Omit __v
})

export default model('Books', BookSchema)
