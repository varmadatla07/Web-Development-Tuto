var mongoose = require('mongoose');
const express = require('express');
const app = express()
mongoose.connect('mongodb://localhost:27017/VarmaKart', (err)=>{
    if(err){
        console.log(`There is an error: ${err}`);
    }
    else{
        console.log("Connection is done")
    }
});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//     //we are connected !!
//     console.log("We are connected ")
// });

app.listen(3000, ()=>{
    console.log("Server is running");
})
