//import router and express
const router = require('express').Router();

const {getIndexPage,getAllMonsPage,getOneMonPage,getCreatePokeForm,getUpdatePokeForm}  = require('../../controllers/client/viewController');

//the index page
//url localhost:8080/
router.get('/', getIndexPage);

//url: localhost:8080/allMons
router.get('/allMons', getAllMonsPage);

//getting one pokemon by it name
//url: localhost:8080/oneMon/:name dynamic name, one pokemon name
router.get('/oneMon/:name', getOneMonPage);

//show the form to create a new pokemon
router.get('/createMon', getCreatePokeForm);

//update pokemon
router.get('/updateMon/:name',getUpdatePokeForm);


//export it
module.exports = router;