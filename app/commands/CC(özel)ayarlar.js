const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let channel = db.fetch(`channel_${message.guild.id}`);
  let emojlog = db.fetch(`emojlog_${message.guild.id}`);
  let rollog = db.fetch(`rollog_${message.guild.id}`);
  let botkoruma = db.fetch(`botkoruma_${message.guild.id}`);
  let msglog = db.fetch(`msglog_${message.guild.id}`);
  let dokunulmaz = db.fetch(`dokunulmaz.${message.guild.id}`);

  let kanall;
  if (!channel) {
    kanall = "<:off:797423633596940308>";
  } else {
    kanall = `${channel}`;
  }
  let emoji;
  if (!emojlog) {
    emoji = "<:off:797423633596940308>";
  } else {
    emoji = `${emojlog}`;
  }
  let roll;
  if (!rollog) {
    roll = "<:off:797423633596940308>";
  } else {
    roll = `<#${rollog}>`;
  }
  let botk;
  if (!botkoruma) {
    botk = "<:off:797423633596940308>";
  } else {
    botk = `<:on:797423661836402749> `;
  }
  let dokunlmz;
  if (!dokunulmaz) {
    dokunlmz = "<:off:797423633596940308>";
  } else {
    dokunlmz = `<@&${dokunulmaz}>`;
  }

  const ayarlar = new Discord.MessageEmbed()
    .setAuthor(
      message.guild.name + " Sunucusunun Ayarları",
      message.guild.iconURL()
    )
    .setTimestamp()
    .setColor("RED")
    .setThumbnail(message.guild.iconURL())
    .addField("Dokunulmaz Rol", dokunlmz, true)
    .addField("Kanal Koruma", kanall, true)
    .addField("Emoji Koruma", emoji, true)
    .addField("Bot Koruma", botk, true)
    .setFooter("Favian", client.user.avatarURL());
  message.channel.send(ayarlar);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "ayarlar işte amk",
  usage: "v!ayarlar"
};
