var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/districtList', function(req, res) {
    var db = req.db;
    var sql = "SELECT * FROM district";

   // Print the records as JSON
    db.all(sql, function(err, rows) {
      console.log(JSON.stringify(rows));
      res.json(rows);
    });
});

module.exports = router;
