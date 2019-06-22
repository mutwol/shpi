const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/shop';

mongoose.connect(URI, {useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected successfully to', URI);
});

mongoose.on('error', console.error.bind(console, 'Mongodb connection error'));