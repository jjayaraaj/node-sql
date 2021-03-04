const express = require('express');
const Visitor = require('../models/visitor');


const visitorController = require('./../controller/visitor');

const router = express.Router();


router.post('/', visitorController.visitorCtrl  );

router.get('/', visitorController.getVisitors);



module.exports = router;