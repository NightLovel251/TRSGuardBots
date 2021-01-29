const Discord = require("discord.js")
const db = require('quick.db');

exports.run = (client, message, args) => {

    const öneri = args.slice(0).join(' ');
    if(!öneri) return message.channel.send("\`\`\`❎ v!suggest (öneriniz)\`\`\`") 
       
  const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir öneride bulundular!")
  .addField("BİR ÖNERİDE BULUNULDU", öneri)
  .addField("KULLANICI BİLGİLERİ:", `**NickName** \`${message.author.tag}\`\n **ID** \`${message.author.id}\``)
  .setColor("BLUE")
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`\`\`\`⚙️ İsteğiniz İletildi Konu Hakkında Yardım Almak İçin (v!bağlantılar) yazınız.\`\`\``)
  client.channels.cache.get("802515449496993792").send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['suggest','Öner','öner','oner','Oner','Öneri','istek','İstek','Istek'],
    permLevel: 0
}

exports.help = {
    name: "suggest",
    description: "öneri bildirirsiniz",
    usage: "öneri <öneri>"
}