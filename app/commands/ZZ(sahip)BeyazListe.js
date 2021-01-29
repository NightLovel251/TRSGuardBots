const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== "657925820731621397") if(message.author.id !== "510479430917816340") return message.channel.send("**Bu Komut Sahiplerime Özel.**");
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**Bir \`İD\` Belirtmelisin.**")
    message.channel.send({embed: e})
    return;
  };
  
  
  db.delete(`karalist_${user}`)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**<@${user}>** **Kullanıcısı \`Karalisteden\` Çıkartıldı.**`)
  return message.channel.send({embed: embed})
 if (client.users.cache.get(user).send(`**Karalisteden Çıkartıldınız. İyi Kullanımlar.**`)){
  } else return
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["whitelist", "beyaz-liste"],
  permLevel: 0
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};  