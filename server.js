const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')


const app = express();


// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MONGOSB connected!'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port ${PORT}'))






// "test": "echo \"Error: no test specified\" && exit 1"