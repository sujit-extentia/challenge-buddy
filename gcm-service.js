'user strict';
var gcm = require('node-gcm');
// var SERVER_API_KEY = "AIzaSyB4_pRldZlFT-NECAx6SfrLs8Z2B986AZs";
var SERVER_API_KEY = "AIzaSyA7NxgkN-Ume3goQjJ2tg0YoWfJyrJOZjQ";
var gcmService = (function () {
    // Set up the sender with you API key, prepare your recipients' registration tokens.
    var sender = new gcm.Sender(SERVER_API_KEY);

    function sendNotificationByTokens(regTokens, msgObj, callback) {
        var message = new gcm.Message();

        message.addNotification('title', msgObj.title);
        message.addNotification('message', msgObj.message);

        sender.send(message, {
            registrationTokens: regTokens
        }, function (err, response) {
            if (err) console.error(err);
            else console.log(response);
            if (callback) {
                callback(err, response);
            }
        });
    };

    return {
        sendNotificationByTokens: sendNotificationByTokens
    };
})();


module.exports = gcmService;
