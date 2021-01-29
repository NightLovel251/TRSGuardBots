const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `<a:no:793101866673111040> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`
    );
  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:no:793101866673111040> **Giriş & Çıkış Kanalı Zaten Ayarlı Değil.**`)
      .setColor("RED")
      .setTimestamp(`Ayarlamak İçin ${prefix}giriş-ayarla #kanal`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`<a:yes:793101776651681813> **\`Resimli Giriş & Çıkış\` Kanalı Başarıyla Sıfırlandı.**`)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["giriş-çıkış-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "giriş-sıfırla",
  description: "Giriş çıkışı kapatır",
  usage: "giriş-çıkış-kapat"
};