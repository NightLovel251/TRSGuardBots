const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<a:no:793101866673111040> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("<a:no:793101866673111040> **\`Resimli Giriş & Çıkış\` Kanalı Ayarlamak İçin \`v!giriş-ayarla #kanal\` Komutunu Kullanınız.**");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`<a:yes:793101776651681813> **\`Reismli Giriş & Çıkış\` Kanalı ${channel} Olarak Ayarlandı.** `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};

exports.help = {
  name: "giriş-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};