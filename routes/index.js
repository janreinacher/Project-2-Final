var express = require('express');
var router = express.Router();
var accountDal = require('../dal/account');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { subtitle: 'Lab 8' });
});



/* GET Template Example */
router.get('/templatelink', function(req, res, next) {
  res.render('templateexample.ejs');
});

/* GET Template Example */
router.get ('/templatelink', function(req, res, next) {
  res.render('templateexample.ejs');
});

router.get('/authenticate', function(req, res) {
    accountDal.GetByEmail(req.query.email, function (err, account_info) {
        if (err) {
            res.render('authentication/login.ejs', { msg: err});
        }
        else if (account_info == null) {
            res.render('authentication/login.ejs', { msg: "User not found."});
        }
        else {
            res.send('User successfully logged in.');
        }
    });
});

router.get('/login', function(req, res) {
    res.render('authentication/login.ejs');
});


router.get('/logout', function(req, res) {
    req.session.destroy( function(err) {
        res.render('authentication/logout.ejs');
    });
});





module.exports = router;
