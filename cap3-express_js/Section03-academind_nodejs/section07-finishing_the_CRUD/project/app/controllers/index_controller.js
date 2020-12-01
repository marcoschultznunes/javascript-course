exports.getIndexPage = (req, res, next) => {
    return res.status(200).render('index', {
        pageTitle: 'Home'
    })
}