//impoert
var express = require('express');
const messageCtrl = require('./routes/messageCtrl');
var usersCtrl = require('./routes/usersCtrl');
var likesCtrl = require('./routes/likesCtrl');
//Router
exports.router = (function () {
    var apiRouter = express.Router();
    //Users routes
    apiRouter.route('/users/register/').post(usersCtrl.register);
    apiRouter.route('/users/login/').post(usersCtrl.login);
    apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/me/').put(usersCtrl.updateUserProfile);
    //Messages routes
    apiRouter.route('/messages/new/').post(messageCtrl.createMessage);
    apiRouter.route('/messages/').get(messageCtrl.listMessage);
    //likes
    apiRouter.route('messages/:messageId/vote/like').post(likesCtrl.likePost);
    return apiRouter;
})();