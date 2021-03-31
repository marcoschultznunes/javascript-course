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
