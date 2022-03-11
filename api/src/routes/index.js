var express = require('express');
var router = express.Router();


// Route to verify thtat the api works
router.get('/', async (req, res) => 
    res.send('Hello World!'))

module.exports = router;
