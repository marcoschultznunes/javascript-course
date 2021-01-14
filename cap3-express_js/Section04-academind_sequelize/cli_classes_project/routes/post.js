const router = require('express').Router()

const postController = require('../controllers/post')

router.get('/', postController.fetchPosts)
router.post('/', postController.createPost)
router.delete('/:uuid', postController.deletePost)

module.exports = router
