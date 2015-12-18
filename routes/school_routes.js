var express = require('express');
var router = express.Router();
var schoolDal   = require('../dal/school');

router.get('/all', function(req, res) {
    schoolDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAllSchoolsInfo.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    schoolDal.GetByID(req.query.school_id, function (err, result) {
            if (err) throw err;
            res.render('displaySchoolInfoByID.ejs', {rs: result, school_id: req.query.school_id});
        }
    );
});

module.exports = router;