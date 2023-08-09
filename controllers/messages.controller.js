const path = require('path');

function getMessages(req,res) {
    res.render('messages',{
        title:'Messages to my friend!',
        friends: 'Elon Musk'
    })
    //const image = path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg');
   //res.send('<ul><li>Hellooooworld</li></ul>');
   //res.sendFile(image);
}

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}