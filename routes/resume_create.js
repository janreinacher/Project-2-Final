var express = require('express');
var router = express.Router();
var resumeDal = require('../dal/resume');
var schoolDal = require('../dal/school');
var companyDal = require('../dal/company');
var accountDal = require('../dal/account');


/* GET Resume listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
    res.render('resumeFormCreate.ejs');
});

router.get('/save', function(req, res, next) {
    console.log("rName:" + req.query.rName);
    console.log("account_id:" + req.query.account_id);
    console.log("resume_id:" + req.query.resume_id);


    console.log("fName: " + req.query.fName);
    console.log("lName: " + req.query.lName);
    console.log("email: " + req.query.email);
    console.log("Apassword: " + req.query.Apassword);


    console.log("cName: " + req.query.cName);
    console.log("streetAddress: " + req.query.streetAddress);
    console.log("city: ", req.query.city);
    console.log("state: ", req.query.state);
    console.log("zip: ", req.query.zip);
    console.log("comp_id", req.query.comp_id);


    //console.log("sName: " + req.query.sName);
    //console.log("description: " + req.query.description);
    //console.log("date: " + req.query.date);
    //console.log("jobName: " + req.query.jobName);
    //console.log("gpa: " + req.query.gpa);

    resumeDal.Insert(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully saved the data.");
        }
    });
    accountDal.Insert(req.query, function(err,result) {

    });
    //schoolDal.Insert(req.query, function(err,result) {

    //});
    //companyDal.Insert(req.query, function(err,result) {

    //});
});


module.exports = router;