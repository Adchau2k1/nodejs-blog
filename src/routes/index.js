const siteRouter = require('./site')
const newRouter = require('./news')

function route(app) {
    app.use('/news', newRouter)

    app.use('/', siteRouter)
}

module.exports = route
