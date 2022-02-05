var express = require('express');
var request = require("request");
const { getContactByEmail } = require('../controllers/getContact');
var router = express.Router();

router.post('/contact', 
async function(req, res, next) {
//   var options = { method: 'GET',
//   url: `https://api.hubapi.com/contacts/v1/contact/email/${req.body.email}/profile`,
//   qs: { hapikey: 'demo' }}
  

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//   res.send(body);
// });
const result = await getContactByEmail(req.body.email)
res.send(result)
}
);


module.exports = router;
