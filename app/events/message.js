const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const Discord =require("discord.js");
module.exports = (client, message) => { 
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "750319076429135923") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  
  let prefix = ayarlar.prefix;
  let msg = message.content.split(/\s+/g);
  let args = msg.slice(1);
  let command = msg[0];
  let cmd = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
  if (message.author.bot) return;
       if (cmd) {
  let bakım = db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
 return message.channel.send(`**:alet: Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\`\n:yukleniyoo: Lütfen Daha Sonra Tekrar Deneyin.**`)
     }
  }
    }
  if (!command.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;
  if (cmd) {
    if (cmd) {
  /////----VERİFİED SYSTM------//////  
const emoji = ["✅"];
let ne = db.fetch(`kural_${message.author.id}`);
if (ne === null)
return message.channel
      .send(
        new Discord.MessageEmbed().setTitle("Favian")
        .setColor('BLUE')
          .setDescription(`**Merhaba Botumuzu Kullanabilmek İçin Kurallarımızı Kabul Etmelisiniz.** \n\n **__KURALLARIMIZ__** \n\n ・| **Herhangi Bir [\`İstek & Şikayette\`](https://discord.gg/nqH7WDkGt4) (v!suggest) Komutunu Kullanın.** \n ・| **Komutlar Hakkında Detaylı Bilgi İçin [\`v!yardım\`](https://discord.gg/nqH7WDkGt4) Komutunu Kullanın.** \n ・| **Premium Komutları İçin [\`Destek\`](https://discord.gg/nqH7WDkGt4) Sunucumuza Gelebilirsiniz.**\n\n \`\`\`KURALLARIMIZI KABUL EDİYORSANIZ ✅ BASINIZ\`\`\``)
          .setFooter(`Favian Verified`)
          .setTimestamp())

.then(async function(embed) {
  const emoji = ["✅"];
  const filter = (reaction, user) =>
  emoji.includes(reaction.emoji.name) && user.id === message.author.id;
  await embed.react(emoji[0]).catch(function() {});

  var reactions = embed.createReactionCollector(filter);
  reactions.on("collect", async function(reaction) {
    if (reaction.emoji.name === "✅") {
      await embed.reactions.removeAll();
      await db.set(`kural_${message.author.id}`, "nul");
      return embed.edit(
        new Discord.MessageEmbed()
          .setColor('BLUE')
          .setDescription(`<:Verified_proton:793092767491686400> **Kurallarımızı Kabul ettiğiniz İçin Teşekkür Ederiz.** `)
      );
    }
  });
});
///////////////----KARALİSTE SYSTM------/////
        let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
   .setColor("0x36393F")
   .setTitle('Faviandan Engellendiniz.')
   .setDescription(`**Merhabalar \`Favian\`'dan Engellendiniz. Karalisteden Çıkartılmak İçin [\`Destek\`](https://discord.gg/nqH7WDkGt4) Sunucumuza Gelebilirsiniz.** \n\n **Sebep : \`${karalistesebep}\`**`)
   .setFooter(`You are blocked from Favian`)
   .setThumbnail(client.user.avatarURL())
   
   const westrabencanımbro = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Favian Logger`)
   .setDescription("> **Kullanıcı**\n\`"+message.author.tag+"\`\n\n> **Kullanılan Komut**\n\`"+command+"\`\n\n> **Kullanılan Sunucu**\n\`"+message.guild.name+"\` \n\n> **Kullanıcı Karaliste Durumu**\n<:on:797423661836402749>")
   client.channels.cache.get("802542809009356840").send(westrabencanımbro)
  return message.channel.send(karaliste)

        }
       const westrabencanımbrosadadsasd = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Favian Logger`)
   .setDescription("> **Kullanıcı**\n\`"+message.author.tag+"\`\n\n> **Kullanılan Komut**\n\`"+command+"\`\n\n> **Kullanılan Sunucu**\n\`"+message.guild.name+"\` \n\n> **Kullanıcı Karaliste Durumu**\n<:off:797423633596940308> ")
       
       
 client.channels.cache.get("802542809009356840").send(westrabencanımbrosadadsasd)
    cmd.run(client, message, args);
    
  }
  }
}
