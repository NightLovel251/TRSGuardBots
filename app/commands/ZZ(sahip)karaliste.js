const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if(message.author.id !== "657925820731621397") if(message.author.id !== "510479430917816340") return message.channel.send("**Bu Komut Sahiplerime Özel.**");
  let user = args[0]
      let sebep = args.slice(1).join(' ')
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**Bir \`İD\` Belirtmelisin.**")
    message.channel.send({embed: e})
    return;
  };
  if(!sebep){
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**Bir \`Sebep\` Belirtmelisin.**")
    message.channel.send({embed: e})
    return;
  }
  
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**<@${user}>** **Kullanıcısı \`Karaliste\`'ye Eklendi Sebep:\`${sebep}\`**`)
    message.channel.send({embed: embed})
  const westrabumm = new Discord.MessageEmbed()
  .setColor("RED")
  .setFooter("Favian") 
  .setTimestamp()
  .setDescription(`**Favian'ın Karalistesine Alındınız. İyi Günler.** \n **Sebep:\`${sebep}\`**`)
  if (client.users.cache.get(user).send(westrabumm)){
  } else return
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};