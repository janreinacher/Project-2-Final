var express = require('express');
var router = express.Router();
var companyDal = require('../dal/company');

/* GET Schools listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
    res.render('companyFormCreate.ejs');
});

router.get('/save', function(req, res, next) {
    console.log("cName: " + req.query.cName);
    console.log("Street: ", req.query.streetAddress);
    console.log("City: ", req.query.city);
    console.log("State: ", req.query.state);
    console.log("zip: ", req.query.zip);
    console.log("comp_id: ", req.query.zip);

    companyDal.Insert(req.query, function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
});



module.exports = router;