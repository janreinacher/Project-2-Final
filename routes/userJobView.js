var express = require('express');
var router = express.Router();
var accountDal   = require('../dal/userJobView');

router.get('/userJobView', function(req, res) {
    accountDal.userJobView(function (err, result) {
            if (err) throw err;
            res.render('userJobView.ejs', {rs: result});
        }
    );
});
module.exports = router;


