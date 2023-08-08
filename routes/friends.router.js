const express = require('express');

const friendsControllers = require ('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
    console.log('Ip Address', req.ip);
    next();
})
friendsRouter.post('/',friendsControllers.postFriends);
friendsRouter.get('/',friendsControllers.getFriends );
friendsRouter.get('/:friendId',friendsControllers.getFriendsbyId );

module.exports = friendsRouter;