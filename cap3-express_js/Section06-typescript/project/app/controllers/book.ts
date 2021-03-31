import { Request, Response, NextFunction } from 'express';
import BookModel, { BookType } from '../models/book';

import { check404 } from '../errors/check';
import { Document } from 'mongoose';

export const post = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, numOfPages } = req.body

        const bookDTO: BookType = { title, numOfPages }

        const newBook = await BookModel.create(bookDTO)

        return res.status(201).json({
            message: 'Book created!',
            book: newBook
        })
    } catch(err){
        next(err)
    }
}

export const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookList = await BookModel.find()

        return res.status(200).json({
            message: 'Fetched books!',
            books: bookList
        })
    } catch(err){
        next(err)
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params

        const book = await BookModel.findById(id)

        check404(book, 'Book')

        return res.status(200).json({
            message: 'Book fetched!',
            book
        })

    } catch(err){
        next(err)
    }
}

export const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params

        const book = await BookModel.findByIdAndDelete(id)

        check404(book, 'Book')

        return res.status(200).json({
            message: 'Book deleted!'
        })

    } catch(err){
        next(err)
    }
}

export const put = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const { title, numOfPages } = req.body

        const bookDTO: BookType = { title, numOfPages }

        const book = await BookModel.findByIdAndUpdate(id, bookDTO, {new: true})

        check404(book, 'Book')

        return res.status(200).json({
            message: 'Book updated!',
            book
        })

    } catch(err){
        next(err)
    }
}

export const patch = () => {}
