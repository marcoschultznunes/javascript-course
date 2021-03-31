// @ts-nocheck

/*
    To handle 404 errors with reusability and unit testing support, i will create a check.ts 
    file with functions that throw errors with the proper status code and message
*/

/* check.ts */
import {Document} from 'mongoose'

type documentOrNull = Document<any> | null

export const check404 = (document:documentOrNull, modelName:string) => {

    if(!document){
        const err:any = new Error(`${modelName} not found!`)
        err.statusCode = 404
        throw err
    }

}


/* On book controller */
import { check404 } from '../errors/check';

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


/*
    Note: don't forget to add the routes!
*/
