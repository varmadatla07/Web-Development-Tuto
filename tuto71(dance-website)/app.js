const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// app.use(express.static('static'));
app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

//Endpoints

app.get('/', (req,res)=>{
     const params = {};
     res.status(200).render('home.pug',params);
});

app.get('/contact', (req,res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
});

//Start the Server

app.listen(port, ()=>{
    console.log(`This application is running on port: ${port}`);
});