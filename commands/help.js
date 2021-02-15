const Discord = require('discord.js');
module.exports = {
  name: "help",
  description: "toont alle commando's",
  category: "help",
  run: async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#B33C29')
        .setTitle('All commands:')
        .setThumbnail('https://media.discordapp.net/attachments/623228003119398913/747879612092252280/01.png?width=677&height=677')
        .setAuthor('Deanbot', 'https://media.discordapp.net/attachments/623228003119398913/747879612092252280/01.png?width=677&height=677')
        .addFields(
            { name: 'Moderation:', value: '``q/ban <user> <reason>``, ``q/kick <user> <reason>``, ``q/clear <message amount>``, ``q/installbot``' },
            { name: 'NSFW:', value: '``q/anal``, ``q/bdsm``, ``q/bj``, ``q/booty``, ``q/cum``, ``q/dildo``, ``q/gayporn``, ``q/pussy``, ``q/tits``' },
            { name: 'Memes:', value: '``q/cursedcomments``, ``q/cursedimages``, ``q/gtameme``, ``q/metalmeme``, ``q/minecraftmeme``, ``q/pog``' },
            { name: 'Animals:', value: '``q/cuties``, ``q/dikdik``' },
            { name: 'Fun:', value: '``q/8ball <question>``, ``q/simppercentage``, ``q/dice``, ``q/doubledice``, ``q/insta <username>``' },
            { name: 'Server:', value: '``q/serverinfo``' },
            { name: 'Bot testing:', value: '``q/ping``' },
            { name: 'Bot info:', value: '``q/botinfo``, ``q/botdevs``' },
            { name: 'Development:', value: '``q/devboard``' },
        )
        message.channel.send(embed);

  }
}