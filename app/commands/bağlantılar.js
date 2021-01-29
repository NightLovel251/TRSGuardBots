const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username}`)
.setDescription(`


**__BAĞLANTILARIM__**

**・| [\`Youtube\`](https://www.youtube.com/channel/UCd61VLw9Fldnp6949vCZzGQ)**

**・| [\`Discord\`](https://discord.gg/nqH7WDkGt4)**

**・| [\`İnvite URL\`](https://discord.com/oauth2/authorize?client_id=786943091864240168&permissions=8&scope=bot)**

`)

.setThumbnail("")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "bağlantılar",
  description: 'bağlantılar',
  usage: 'bağlantılar'
};