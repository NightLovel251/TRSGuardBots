const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter(client.user.username,client.user.avatarURL())
.setTimestamp()
.setTitle(`**__${client.user.username} Rol Koruma Sistemi__**`)
.setDescription(`**Detaylı Rol Koruma Sistem Bilgilendirmesi**`)
.addField(`**Açılan Rol Koruma**`,"*Açılan rolleri otomatik olarak kapatır.*\n*Rolü açan yetkiliye işlem uygulamaz.* \n\n `v!açılan-rol-koruma`")
.addField(`**Düzenlenen Rol Koruma**`,"*Düzenlenen rolleri eski haline getirir.*\n*Düzenleyen yetkiliye işlem uygulamaz.* \n\n `v!duzenlenen-rol-koruma`")
.addField(`**Silinen Rol Koruma**`,"*Silinen rolleri otomatik olarak tekrar açar.*\n*Silen yetkiliden tüm rollerini alır.* \n\n `v!silinen-rol-koruma`")
.addField(`**Rol Log**`,"*Yukarıda belirtilen işlemlerin kayıtlarını belirtilen kanala gönderir.*\n\n `t!rol-log`")



if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'rol-koruma'
};