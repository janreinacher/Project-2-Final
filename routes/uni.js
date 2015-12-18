var express = require('express');
var router = express.Router();
var schoolDal = require('../dal/school');

/* GET Schools listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
    res.render('schoolFormCreate.ejs');
});

router.get('/save', function(req, res, next) {
    console.log("street: " + req.query.street);
    console.log("city: ", req.query.city);
    console.log("state: ", req.query.state);
    console.log("zip: ", req.query.zip);

    schoolDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});



module.exports = router;