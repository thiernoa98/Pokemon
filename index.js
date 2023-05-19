const express = require('express');
const app = express();
const path = require('path');
const connectToMongoDB = require('./database/database');
require('dotenv').config();
const methodOverride = require('method-override');

/*
    middleware
*/
//set the view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

//json middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

/*
    ROUTING
*/
const viewRouter = require('./routes/client/viewRouter');
app.use('/', viewRouter);

const pokemonRouter = require('./routes/api/pokeRouter');
app.use('/api/pokemon', pokemonRouter);

/*
    port
*/ 
const port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
    connectToMongoDB();
})
