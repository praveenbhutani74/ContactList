const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/contacts');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error'));

db.once('open',function(){
    console.log('pass');
    
});