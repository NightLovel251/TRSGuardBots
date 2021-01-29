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

var botid = args[0]

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`**__Bot Koruma Sistemi__**`)
.setDescription(`**__Bot İzin__ Sistem Bilgilendirmesi**\n *Sunucuya Katılması İçin Bota İzin Verir.*\n`)
.addField(`> **Nasıl İzin Vereceğim?**`,"`v!bot-izin ID`\n")
.addField(`> **Nasıl İzin Kaldıracağım?**`,"`v!bot-izin-kaldır ID`\n")

const invex1111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**<a:no:793101866673111040> ${botid} \`ID\`'li botun zaten izni yok.**`)
  .setAuthor(`\`${message.author.tag}\` tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()

if(!args[0]) return message.channel.send(emb)
if(!db.has((`izinlibot_${botid}_${message.guild.id}`))) return message.channel.send(invex1111)

db.delete((`izinlibot_${botid}_${message.guild.id}`))


const invex111 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**<a:no:793101866673111040> ${botid}** \`ID\'li botun izni **${message.guild.name}** sunucusundan **${message.author}** tarafından kaldırıldı.`)
  .setAuthor(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
    .setFooter(client.user.username,client.user.avatarURL({dynamic: true,format: "gif",format: "png",format: "jpg",size: 2048}))
      .setTimestamp()
message.channel.send(invex111)
message.guild.owner.send(invex111)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["bot-izin-kaldır"],
    permLevel: 0
  }
  
  exports.help = {
    name: 'bot-izin-kaldır'
  };