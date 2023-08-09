const path = require('path');

function getMessages(req,res) {
    const image = path.join(__dirname, '..', 'public', 'skimountain.jpg');
   // res.send('<ul><li>Hellooooworld</li></ul>');
   res.sendFile(image);
}

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}