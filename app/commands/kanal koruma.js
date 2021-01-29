const Discord = require('discord.js');

exports.run = async (client, message, args,bot) => {

const emb = new Discord.MessageEmbed()
.setColor("BLUE")
.setFooter('Favian 2020')
.setTimestamp()
.setTitle(`<:Guardlog:799979602655182878> **__${client.user.username} Kanal Koruma Sistemi__**`)
.setDescription(`

 [**\`v!eklenen-emoji-koruma\`**](https://discord.gg/qM4wNUyW)
  **Eklenen Emoji Anında Silinir. Kullanıcıda \`v!yetkili\` Rolü Var İse İşlem Uygulanmaz.**
 
 
  [**\`v!emoji-isim-koruma\`**](https://discord.gg/qM4wNUyW)
   **Değiştirilen Emojiyi Eski Haline Getirir. Kullanıcıda \`v!yetkili\` Rolü Var İse İşlem Uygulanmaz.**
     
     
  [**\`v!silinen-emoji-koruma\`**](https://discord.gg/qM4wNUyW)
    **Silinen Emojiyi Tekrardan Ekler. Kullanıcıda \`v!yetkili\` Rolü Var İse İşlem Uygulanmaz.**


\`\`\`v!emoji-log #kanal\`\`\`

`)

if(!args[0]) return message.channel.send(emb)
message.channel.send(emb)


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-koruma"],
  permLevel: 0
}

exports.help = {
  name: 'kanal-koruma'
};