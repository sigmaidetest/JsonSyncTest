let data = require('./data.json');

exports.handler = function(event, context, callback) {
    
    console.log(data);
    callback(null, {"message": "Successfully executed"});
}