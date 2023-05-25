//import mongoose
const mongoose = require('mongoose');

//this shema is from the the .json file
const pokemonSchema = new mongoose.Schema(
    {
        PokedexNo: {
            type: Number,
            unique: true,
            required: true
        },
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Type: {
            type: String,
            required: true
        },
        Moves: [{
            type: String
        }]
    }
);

//make the schema
const Pokemon = mongoose.model("Pokemon", pokemonSchema);

//export it to the controllers api folder
module.exports = Pokemon;
