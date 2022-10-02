const Course = require('../models/Course')

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, (error, courses) => {
            if (!error) res.json(courses)
            else res.status(500).json({ error: 'Lỗi!' })
        })
        // res.render('home')
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
