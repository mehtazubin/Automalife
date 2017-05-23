const express = require('express');
const router = express.Router();


router.get('test', function(res,req,next){
	res.end({"work":"Success"});
});

module.exports = router;