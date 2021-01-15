const {Tag} = require('../models')

exports.createTag = (req, res, next) => {
    const {name} = req.body

    Tag.create({name: name})
    .then(tag => {
        return res.status(201).json({
            message: 'Tag successfully created!',
            tag: tag
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not create tag.'
        })
    })
}
