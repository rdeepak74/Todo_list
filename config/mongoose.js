const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Todo_list');

const db = mongoose.connection;

db.on('error', console.log.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to MongoDB');
});

module.exports=db;