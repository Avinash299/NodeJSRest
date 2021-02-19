const CONNECTION_URL = "mongodb://localhost:27017/Demo";
const mongoose = require('mongoose');
mongoose.connect(CONNECTION_URL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const express = require('express')
const rentItemRoute = require('./routes/rentItemRoute'); //imports routes
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', rentItemRoute);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});