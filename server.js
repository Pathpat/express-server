const express = require('express');
const messagesControllers = require ('./controllers/messages.controller');
const friendsControllers = require ('./controllers/friends.controller');

const app = express();

const PORT = 3000;



app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends',friendsControllers.postFriends);
app.get('/friends',friendsControllers.getFriends );
app.get('/friends/:friendId',friendsControllers.getFriendsbyId );

app.get('/messages',messagesControllers.getMessages);
app.post('/messages',messagesControllers.postMessage);

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}...`);
});