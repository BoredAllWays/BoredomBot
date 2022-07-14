const fs = require('fs');
const files = fs.readdirSync("commands");

module.exports = {
    name: 'rules',
    description: "I need some help  !!!",
    execute(message, args){
        message.channel.send('Hi im Boredom Bot I guess well that is what i`m called. So i take it you need to know how to use me well i will tell you since i have to but whatever.');
        message.channel.send('My Commands are ' + files);

    }
}