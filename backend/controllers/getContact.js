var request = require("request");

function getContactByEmail(email) {
  var options = {
    method: 'GET',
    url: `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`,
    qs: { hapikey: 'demo' }
  }

  return new Promise((res, rej) => {
    request(options, function (error, response, body) {
      if (error) rej();
      res(body);
    });
  })
}

module.exports = {
  getContactByEmail,
} 