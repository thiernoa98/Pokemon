//import express and router
const router = require('express').Router();
//import the getPokemon function 
const {getAllPokemons,getOnePokemon,createOnePokemon,deleteOnePoke,updateOnePoke} = require('../../controllers/api/pokeController');

//ur: localhost:8080/api/pokemon/allPokemon
router.get('/allPokemon', getAllPokemons);

//ur: localhost:8080/api/pokemon/onePokemon/:name or dynamic name
router.get('/onePokemon/:name',getOnePokemon);

//create pokemon
//http://localhost:8080/api/pokemon/createPoke
router.post('/createPoke', createOnePokemon);

//the detele pokemon by name
//http://localhost:8080/api/pokemon/deleteOnepoke/:name
router.delete('/deleteOnepoke/:name', deleteOnePoke);

//update one pokemon
//http://localhost:8080/api/pokemon/updatePokemon/:name
router.put('/updatePokemon/:name', updateOnePoke);

module.exports = router;