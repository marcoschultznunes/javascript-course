import {Document} from 'mongoose'

type documentOrNull = Document<any> | null

export const check404 = (document:documentOrNull, modelName:string) => {

    if(!document){
        const err:any = new Error(`${modelName} not found!`)
        err.statusCode = 404
        throw err
    }

}
