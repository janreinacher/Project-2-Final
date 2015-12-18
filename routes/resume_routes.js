var express = require('express');
var router = express.Router();
var resumeDal   = require('../dal/resume');

router.get('/all', function(req, res) {
    resumeDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAllResume.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    resumeDal.GetByID(req.query.resume_id, function (err, result) {
            if (err) throw err;
            res.render('displayResumeInfoByID.ejs', {rs: result, resume_id: req.query.resume_id});
        }
    );
});

router.get('/update', function(req, res, next) {
    resumeDal.Update(req.query, function(err, result){
        var account_id = req.query.account_id;
        console.log("account_id: " + account_id);
        resumeDal.GetByID(resume_id, function(err, resume_results){

            if(err) {
                var alert_class = 'alert-danger';
                var data = {
                    message: "Error retrieving resume with id " + resume_id + "<p>" + err + "</p>",
                    alert_class: alert_class
                };
                res.render('resume/resume_edit', data);
            }
            else {
                resumeDal.GetAll(function(err, address_results) {

                    var alert_class = 'alert-success';
                    var message = "Successfully Updated!";

                    console.log(resume_results);
                    var data = {
                        message: message,
                        alert_class: alert_class,
                        company: resume_results
                    };
                    res.render('resume/resume_edit', data);
                })
            }
        });
    })
});

router.get('/delete', function(req,res){
    console.log(req.query.resume_id);
    resumeDal.Delete(req.query.account_id, function(err,result){
        res.send(req.query.rName + 'was successfully deleted.');
    });
});




module.exports = router;
