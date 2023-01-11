require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect('mongodb://0.0.0.0:27017/Issue_Tracker');
mongoose.connect(
    process.env.mongodburl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const db = mongoose.connection;

db.on('error',console.log.bind(console,'error on connecting to the database'));
db.once('open', function(){
    console.log('successfully connected to the database...');
});