var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'TNEA 2022 | Colleges Ranked By Cutoff' });
});

// parameter middleware that will run before the next routes
router.param('co', function(req, res, next, co) {
    req.co = co;
    next();
});

router.get('/cutoff', function(req, res) {
    var db = req.db;
    var sql = "select c.department, c.bc, c.oc , col.name, col.code from cutoff c, college col where c.college_id = col.code order by 2 desc";

   // Print the records as JSON
    db.all(sql, function(err, rows) {
      res.json(rows);
    });
});

router.get('/cutoff/:co', function(req, res) {
    console.log(req.co);
    var db = req.db;
    var sql = "select c.department, c.bc, c.oc , col.name, col.code from cutoff c, college col where c.college_id = col.code and c.bc < " +req.co+ " order by 2 desc";

   // Print the records as JSON
    db.all(sql, function(err, rows) {
      res.json(rows);
    });
});

/*
 * GET collegeList by dept.
 */
router.get('/dept', function(req, res) {
    var db = req.db;
    var sql = "SELECT c.*,d.name as d_name FROM college c, college_district cd, district d where cd.college_id = c.code and d.id = cd.district_id";

   // Print the records as JSON
    db.all(sql, function(err, rows) {
      res.json(rows);
    });
});

module.exports = router;
