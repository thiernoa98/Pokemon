// we use the view controller to print anything on the ejs files
//import the pokemon model
const Pokemon = require('../../models/pokeModel');

function getIndexPage(req,res) {
    res.render('index');
}

async function getAllMonsPage(req,res) {
    try {
        let result = await Pokemon.find({});

        res.render('allMons', {pokemon: result});
    } catch (error) {
        let errorObj = {
            message: 'failed to display infos',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
}

//get one pokemon by name
async function getOneMonPage(req,res) {
    try {
        let result = await Pokemon.findOne({Name: req.params.name});

        res.render('oneMon', {pokemon: result});
    } catch (error) {
        let errorObj = {
            message: 'failed to get one pokeemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
}

//create pokemon
async function getCreatePokeForm(req,res) {
    try {
        //createMon is the ejs file, and will show the form
        res.render('createMon');
    } catch (error) {
        let errorObj = {
            message: 'failed to createß one pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
}

//get the pokemon to be updated
async function getUpdatePokeForm(req,res) {
    try {
        // find the pokemon by name first
        let result = await Pokemon.findOne({Name: req.params.name})
        
        //updateMon is an ejs file
        res.render('updateMon', {pokemon: result});

    } catch (error) {
        let errorObj = {
            message: 'failed to update update pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
}
//send over to the client router 
module.exports = {getIndexPage, getAllMonsPage,getOneMonPage,getCreatePokeForm,getUpdatePokeForm}