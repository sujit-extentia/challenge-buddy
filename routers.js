'use strict';
var gcmService = require('./gcm-service.js');
var routers = (function () {

    function sendNotification(req, res) {
        console.log(req.body)
        if (req.body.tokens && req.body.message) {
            gcmService.sendNotificationByTokens(req.body.tokens, { message: req.body.message, title: req.body.title },
                (error, responseObj) => {
                    res.send(error, responseObj);
                });
        } else {
            res.send({status:'ERROR',message:"Wrong request params"});
        }
    }

    return {
        sendNotification: sendNotification
    };

})();
module.exports = routers;
