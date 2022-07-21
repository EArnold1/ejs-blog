const { json } = require('express');
const express = require('express');
const app = express();

// middlware init
app.use(json({ extended: false }));

// set view engine
app.set('view engine', 'ejs')

// home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
});

// add post page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
});

// not found page
app.use((req, res) => {
    res.render('notfound', { title: 'page not found' })
})

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log('app ruuning'));
