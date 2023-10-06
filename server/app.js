const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const port = 4000;

app.use(cors());

app.use('/', routes)
app.use('/get-report', routes)


app.listen(port,() => {
    console.log(`App listening on port ${port}`)
})
