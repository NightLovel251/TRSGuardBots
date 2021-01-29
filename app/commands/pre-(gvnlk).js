const Discord = require('discord.js'); 
const db = require('quick.db');

exports.run = async (bot, message,args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:no:793101866673111040> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`); //yetki ayarladık yoksa rest çek

let logk = message.mentions.channels.first();  
  
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {   
    if(!logkanal) return message.channel.send(`<a:no:793101866673111040> **Güvenlik Sistemi Zaten Kapalı.**`); //log ayarladık
    
   db.delete(`guvenlik${message.guild.id}`)  
    
   message.channel.send(`<a:yes:793101776651681813> **Güvenlik başarıyla Sıfırlandı.**`);   
    
  
    return
  }  
  
if (!logk) return message.channel.send('<a:no:793101866673111040> **Güvenlik kanalı Ayarlamak için \`v!güvenlik #kanal\` Komutunu kullanınız.**');  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`<a:yes:793101776651681813> **Güvenlik başarıyla ${logk} olarak ayarlandı.**`);  

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlik'],
  permLevel: 4
};

module.exports.help = {
  name: 'güvenlik',
  description: 'güvenlik sağlar',
  usage: 'güvenlik'
};