//import eexpress
const express = require('express');
const app = express();
const path = require('path');

//import the database connection
const connectToMongoDB = require('./database/database');
require('dotenv').config();
const methodOverride = require('method-override');

/*
    middleware
*/
//set the view engine
app.set("view engine", "ejs");
//getting the views folder
app.set('views', path.join(__dirname, 'views'));
//to access css, images ...
app.use(express.static(path.join(__dirname,'public')));

//json middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//this allowes to use html with backend
app.use(methodOverride('_method'));

/*
    ROUTING
*/
const viewRouter = require('./routes/client/viewRouter');
//localhost:8080/
app.use('/', viewRouter);

//ur: localhost:8080/api/pokemon/allPokemon
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