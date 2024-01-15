const express = require('express');
const cors = require('cors')

const connectToDb = require('./config/db')
const app = express();

app.use(express.json({extended: false}));
app.use(cors());

connectToDb();

app.use('/api/register', require('./routes/register'));
app.use('/', require('./routes/welcome'));

app.listen(5000, () => {
    console.log("server is running")
})