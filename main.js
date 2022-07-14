const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = ('!');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready' , () => {
    console.log('BoredomBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
     if (command == 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if (command == 'imbored'){
        client.commands.get('imbored').execute(message, args);
    }else if (command == 'peptalk'){
        client.commands.get('peptalk').execute(message, args);
    }else if (command == 'pleasepeptalk' ){
        client.commands.get('pleasepeptalk').execute(message, args);
    }else if (command == 'helpme'){
        client.commands.get('helpme').execute(message, args);
    }else if (command == 'rules'){
        client.commands.get('rules').execute(message, args);
    }else if (command == 'bored'){
        client.commands.get('bored').execute(message, args);
    }else if (command == 'boredomforall'){
        client.commands.get('boredomforall').execute(message, args);
    }else if(command == 'boringaliens'){
        client.commands.get('boringaliens').execute(message, args);
    }
    

        
        
        

});




client.login('NzUxOTQ1MjUwMjg4OTU5NTcx.GQwuXr.azr4zZKCk5oPhXpMPN2MGSvWGKWgDQwjGHfTgo');