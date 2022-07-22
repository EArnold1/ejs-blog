const express = require('express');
const bodyParser = require('body-parser');
const pages = require('./routes/pages');
const app = express();

// middlware init
// needed for forms
app.use(bodyParser.urlencoded({ extended: false }))

// set view engine
app.set('view engine', 'ejs')


app.use('/', pages)

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log('app ruuning'));
