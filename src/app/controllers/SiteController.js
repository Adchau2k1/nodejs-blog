const Course = require('../models/Course')
const { mongooseToObjectAll } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', { courses: mongooseToObjectAll(courses) })
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }

    test(req, res) {
        Course.find({}, (error, courses) => {
            if (!error) res.json(courses)
            else res.status(500).json({ error: 'Lỗi!' })
        })
    }
}

module.exports = new SiteController()
