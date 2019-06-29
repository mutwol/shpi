/**
 * @author mutwol
 */

 /**
  * DB Config, 
  * this should not be here !!
  * @todo move to env
  */

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/shop';

mongoose.connect(URI, {useCreateIndex: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {

    console.log('connected successfully 👍 👍, server', URI);
    
});


db.on('error', console.error.bind(console, 'Mongodb connection error 😲 👎 ' ));