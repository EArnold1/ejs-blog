const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// middlware init
// needed for forms
app.use(bodyParser.urlencoded({ extended: false }))

// set view engine
app.set('view engine', 'ejs')

// home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
});

// add post page
app.get('/add', (req, res) => {
    res.render('add', { title: 'Add Post' })
});

app.post('/add', (req, res) => {
    console.log(req.body.title, req.body.post)
    res.redirect('/')
})

// not found page
app.use((req, res) => {
    res.render('notfound', { title: 'page not found' })
})

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log('app ruuning'));
