const {Router} = require('express');
const router = Router();

// CORS
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// Models
const Collection = require('../Models/Collection.model');

// Routing
router.get('/api/colection', cors(corsOptions), (req,res) => {
    const doc = Collection.find().then(allCollection => {
        res.json(allCollection);
    })
});

router.get('/api/colection/detail/:collection_id', cors(corsOptions), (req,res) => {
    const {collection_id} = req.params
   const doc = Collection.findById(collection_id).then(allCollection => {
        res.json(allCollection);
    })
   
});

module.exports = router;