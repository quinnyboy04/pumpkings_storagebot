const Discord = require('discord.js');
const message = new Discord.Client();

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",

    run: async (client, message, args) => {
        message.delete();
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Ping!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} milliseconds
        API latency is ${Math.round(client.ws.ping)} milliseconds.`);
    }
            
}

