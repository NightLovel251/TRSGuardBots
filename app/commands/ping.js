const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("__PİNG__")
  .setColor("RANDOM")
  .setDescription(`\`${client.ws.ping}\` **Ms**`)
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Bot Pingi',
 usage: '!ping'
};