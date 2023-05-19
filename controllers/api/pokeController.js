//the api folder is backend, it helps create, read, update and delerte data
//import the pokemon model
const Pokemon = require('../../models/pokeModel');
//getting all the data with find({})
async function getAllPokemons(req,res) {
    try {
        let result = await Pokemon.find({});
        res.json({
            message: 'success',
            payload: result
        })
    } catch (error) {
        let errorObj = {
            message: 'failed to display infos',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
    
};

//get one pokemon
async function getOnePokemon(req,res) {
    try {
        //find one pokemon by it's name
        let foundPokemon = await Pokemon.findOne({Name: req.params.name});

        //since we're not using .ejs, we don't use render, but json
        res.json({
            message: 'success',
            payload: foundPokemon
        })
    } catch (error) {
        let errorObj = {
            message: 'failed to find pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    
    }
};

async function createOnePokemon(req,res) {
    try {
        let newPokemon = {
            // names must be thee same as in the model folder
            PokedexNo: req.body.PokedexNo,
            Name: req.body.Name,
            Type: req.body.Type,
            // the .split make the Moves an array when we enter a name with coma and space
            // "Moves": "barry, Thierno" ==> "Moves": ["barry", "Thierno"] 
            Moves: req.body.Moves.split(', ')
        };

        await Pokemon.create(newPokemon);

        //on the backend test, use json
        // res.json({
        //     message: 'success',
        //     payload: newPokemon
        // });

        //on the front end, we use render or redirect to show it to the ejs files
        
        //this here helps redirect us to the viewRouter
        //http://localhost:8080/oneMon/:name page after making a new data
        res.redirect(`/oneMon/${newPokemon.Name}`);

    } catch (error) {
        let errorObj = {
            message: 'failed to create pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
};

//deleting one pokemon
async function deleteOnePoke(req,res) {
    try {
        //find the pokemon by name
        await Pokemon.deleteOne({Name: req.params.name});

        // res.json({
        //     message: 'success',
        //     payload: req.params.name
        // })

        //show this on the front-end
        //redirect it to see all pokemons page 
        //http://localhost:8080/allMons from viewRouter
        res.redirect('/allMons');

    } catch (error) {
        let errorObj = {
            message: 'failed to delete pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
};

async function updateOnePoke(req,res) {
    try {
        let updatedPokemon = {
            // names must be thee same as in the model folder
            PokedexNo: req.body.PokedexNo,
            Name: req.body.Name,
            Type: req.body.Type,
            // the .split make the Moves an array when we enter a name with coma and space
            // "Moves": "barry, Thierno" ==> "Moves": ["barry", "Thierno"] 
            Moves: req.body.Moves.split(', ')
        };
        //target the pokemon by name
        await Pokemon.updateOne(
            {Name: req.params.name},
            {$set: updatedPokemon},
            {upsert: true}
        )
        
        //this is for the backeend test, postamn
        // res.json({
        //     message: 'success',
        //     payload: updatedPokemon
        // })

        //redirect it to the oneMon page, to get the new update data/pokemon
        //url localhost:8080/oneMon/:name
        res.redirect(`/oneMon/${updatedPokemon.Name}`);
    } catch (error) {
        let errorObj = {
            message: 'failed to update pokemon',
            payload: error
        }

        console.log(errorObj);

        res.json({errorObj});
    }
}

//export it to the api routes
module.exports = {getAllPokemons,getOnePokemon,createOnePokemon,deleteOnePoke,updateOnePoke};