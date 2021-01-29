const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 

  if(message.author.id !== '657925820731621397') if(message.author.id !== '510479430917816340')
    
      return;

 const args0 = args[0];
  if(!args0) {
    message.channel.send("<a:no:793101866673111040> **Bir \`ID\` Belirtmelisin.**")
  } else {
  
 
db.delete(`premod_${args0}`,"deaktif")
message.channel.send("<a:yes:793101776651681813> **\`Premium\` Üyelik İptal Edildi.**")
 
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumal',
    description: 'premiumal',
    usage: 'premiumal',

}