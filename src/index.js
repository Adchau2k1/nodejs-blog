const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan')

const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Kết nối db
db.connect()

// HTTP logger
// app.use(morgan('combined'))

// Template engines
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    })
)
app.set('view engine', 'hbs')
// Dùng: 'resources', 'views' thay cho: 'resources/views' sẽ tự thêm các kí tự
// ngăn cách đường dẫn phù hợp với đường dẫn trên các hệ điều hành khác nhau
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
