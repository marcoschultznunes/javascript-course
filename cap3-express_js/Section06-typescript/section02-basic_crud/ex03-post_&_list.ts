// @ts-nocheck

/* book controllers */
import { Request, Response } from 'express';
import BookModel, {BookType} from '../models/book'

export const post = async (req: Request, res: Response) => {
    const {title, numOfPages} = req.body

    const bookDTO: BookType = {title, numOfPages}

    const newBook = await BookModel.create(bookDTO)

    return res.status(201).json({
        message: 'Book created!',
        book: newBook
    })
}

export const list = async (req: Request, res: Response) => {
    const bookList = await BookModel.find()

    return res.status(200).json({
        message: 'Fetched books!',
        books: bookList
    })
}
 

/* book router */
import {Router} from 'express'
import {list, post} from '../controllers/book'

const router = Router()

router.get('/', list)
router.post('/', post)

export default router


/* On app.ts */
import bookRoutes from './routes/book'

app.use('/books', bookRoutes)
