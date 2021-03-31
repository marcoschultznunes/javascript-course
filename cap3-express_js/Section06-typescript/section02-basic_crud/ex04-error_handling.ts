// @ts-nocheck

/* errorHandler.ts => The global error handler function */
import {Request, Response, NextFunction} from 'express';
import { RequestError } from './errorTypes';

const errorHandler = (error: RequestError, req:Request, res:Response, next:NextFunction) => {
    const status = error.statusCode || 500
    const message = error.message || 'An error has ocurred.'

    const finalError:any = {
        message: message
    }
    if(error.errors && status !== 500){
        finalError.errors = error.errors
    }

    return res.status(status).json(finalError)
}

export default errorHandler


/* On app.ts */
import errorHandler from './errors/errorHandler'

app.use(errorHandler)


/* try/catch on book controller */
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
