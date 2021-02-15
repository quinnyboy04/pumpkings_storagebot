//Verplicht
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
const { options } = require('snekfetch');
require("dotenv").config();

//Terminal bericht
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

bot.on("ready", async () => {
	console.log(`Bot is ready for usage!`);
})

//Command Handler

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("File " + file + " loaded successfully!")
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

fs.readdir('./events/', (err, files) => {
	if (err) console.log(err);
	files.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		console.log("File " + file + " loaded successfully!")
		let eventName = file.split(".")[0];
		bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
	});
});

//Automatische rol

//Verplicht eindveld
bot.login(process.env.TOKEN);
