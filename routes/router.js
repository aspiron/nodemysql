const express = require('express')
const router  = express.Router()
const people  = require('../controller/people')

router.get('/people', people.all)
router.post('/people', people.create);
router.get('/people/:id', people.byId);
router.get('/people/search/:name', people.search);
router.put('/people/:id', people.update);
router.delete('/people/:id', people.delete);
module.exports = router