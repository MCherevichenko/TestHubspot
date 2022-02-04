var express = require('express');
var request = require("request");
var router = express.Router();

router.post('/', function(req, res, next) {
  var options = { method: 'GET',
  url: `https://api.hubapi.com/contacts/v1/contact/email/${req.body.email}/profile`,
  qs: { hapikey: 'demo' }}
  

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send(body);
});
});


module.exports = router;
