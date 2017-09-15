'use strict';
var gcmService = require('./gcm-service.js');
var routers = (function () {

    function sendNotification(req, res) {
        let reqBody = req.body;
        if (reqBody.tokens && reqBody.message) {
            console.log(reqBody)
            gcmService.sendNotificationByTokens(reqBody.tokens, { message: reqBody.message, title: reqBody.title },
                (error, responseObj) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(responseObj));
                });
        } else {
            res.send({ status: 'ERROR', message: "Wrong request params" });
        }
    }

    return {
        sendNotification: sendNotification
    };

})();
module.exports = routers;
