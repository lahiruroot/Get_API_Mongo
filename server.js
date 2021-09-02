const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')
const postsRoutes = require('./Routes/api/posts');

const app = express();


// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MONGODB connected!'))
    .catch(err => console.log(err));

app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port ${PORT}'))






// "test": "echo \"Error: no test specified\" && exit 1"