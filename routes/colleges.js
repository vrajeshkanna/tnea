var express = require('express');
var router = express.Router();

/*
 * GET collegeList.
 */
router.get('/collegeList', function(req, res) {
    var db = req.db;
    var sql = "SELECT c.*,d.name as d_name, d.id as d_id FROM college c, college_district cd, district d where cd.college_id = c.code and d.id = cd.district_id";

   // Print the records as JSON
    db.all(sql, function(err, rows) {
      res.json(rows);
    });
});

module.exports = router;
