const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const routes = require('./routes');
const port = 5000;

app.use(cors());
app.use(bodyParser.json())

app.use('/', routes)
app.use('/get-record', routes)
app.use('/send-record', routes)
app.use('/update-record', routes)
app.use('/delete-record', routes)


app.listen(port,() => {
    console.log(`App listening on port ${port}`)
})

module.exports = app;