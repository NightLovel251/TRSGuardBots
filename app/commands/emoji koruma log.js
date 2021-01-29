const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args,bot) => {
let yetkili  =   db.fetch(`yetkili.${message.guild.id}`);

const invex1 = new Discord.MessageEmbed()
.setColor('BLUE')
  .setDescription(`** <a:no:793101866673111040> Bu işlemi Yapabilmek İçin \`Yetkili\` Role Sahip Olmalı Veya \`Sunucu Sahibi\` Olmalısınız!**`)
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
      .setFooter(client.user.username,client.user.avatarURL())
      .setTimestamp()
if((message.author.id !== message.guild.owner.user.id) && !message.member.roles.cache.has(yetkili)) return message.channel.send(invex1);

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`**__Emoji Koruma Sistemi__**`)
.setDescription(`**Emoji-Log Sistem Bilgilendirmesi**\n *Emoji Koruma Sistemi loglarını belirlediğiniz kanala gönderir.*\n`)
.addField(`**Nasıl Ayarlayacağım?**`,"`v!emoji-log #kanal`\n")
.addField(`**Nasıl Kapatacağım?**`,"`v!emoji-log kapat`")



if(!args[0]) return message.channel.send(emb)
let emojlog = message.mentions.channels.first() || message.guild.channels.cache.find(r => r.id == args[0])
db.set(`emojlog_${message.guild.id}`, `${emojlog}`)

const invex11 = new Discord.MessageEmbed()
.setColor('BLUE')
  .setDescription(`<a:yes:793101776651681813> Emoji-Log kanalı başarıyla ${emojlog} olarak ayarlandı.`)
    .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const invex111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`<a:yes:793101776651681813> Emojil-Log sistemi Başarıyla Sonlandırıldı.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

const inve1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`<a:no:793101866673111040> Emoji-Log sistemi zaten kapalı durumda.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()
if(emojlog){
message.channel.send(invex11) 
db.set(`emolog.${message.guild.id}`, emojlog.id)

}else if(args[0] === "kapat"){
if(!db.has(`emolog.${message.guild.id}`)) return message.channel.send(inve1);
db.delete(`emolog.${message.guild.id}`)
message.channel.send(invex111)

}else{
message.channel.send(emb)
}


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["emoji-log"],
  permLevel: 0
}

exports.help = {
  name: 'emoji-log'
};