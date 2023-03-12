const express = require('express');
const app = express();
const port =8000;
const expresslayout = require('express-ejs-layouts');
const db= require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(express.json());

app.use('/',require('./routes/todolist'));
app.set('view engine','ejs');
app.set('views', './views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)


app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server started port: ${port}`);
});