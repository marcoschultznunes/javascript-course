exports.getNotFoundPage = (req, res, next) => {
    return res.status(404).render('not_found', {
        pageTitle: 'Not Found',
        error_message: '404 - Page not found'
    })
}