require('dotenv').config();
function validateInputRequest(req, res, next) {
    if(!req.body.text ) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    
    var aylien = require("aylien_textapi");
    // Aylien API 
    var textapi = new aylien({
        application_id: "2402e9cb",
        application_key: "2ab06fa3076fbac401d65230766ae645" //process.env.APP_KEY
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response);
    }); 
 
}

exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;