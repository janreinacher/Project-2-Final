var express = require('express');
var router = express.Router();
var adminDal   = require('../dal/admin');
var accountDal = require('../dal/account');

router.get('/admin', function(req, res) {
    accountDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAdmin.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    accountDal.GetByID(req.query.account_id, function (err, result) {
            if (err) throw err;
            res.render('displayAdmin.ejs', {rs: result, account_id: req.query.account_id});
        }
    );
});



module.exports = router;