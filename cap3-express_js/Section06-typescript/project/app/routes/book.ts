import {Router} from 'express'
import {getById, list, post, deleteById, patch, put} from '../controllers/book'

const router = Router()

router.get('/', list)
router.get('/:id', getById)
router.post('/', post)
router.delete('/:id', deleteById)
router.patch('/:id', patch)
router.put('/:id', put)

export default router
