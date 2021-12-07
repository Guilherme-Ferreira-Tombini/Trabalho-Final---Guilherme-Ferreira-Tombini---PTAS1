var express = require('express');
var router = express.Router();


router.use("/admin", require("../admin"))

/* GET home page. */
router.get('/', function (req, res, next) {
  json = { 
    title: 'IFMS', 
    subtitle: 'Instituto Federal de Mato Grosso do Sul' 
  };

  res.render('index', { title: json.title, subtitle: json.subtitle });
});

module.exports = router;