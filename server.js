const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
global.fetch = fetch;

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/main');
const searchRouter = require('./routes/search');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs');

app.use('/', mainRouter);
app.use('/search', searchRouter);

app.listen(PORT, () => {
    console.log(`-----> Server has been started on port ${PORT} <-----`)
})