const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  let prefix  = ayarlar.prefix
  
const yardım = new Discord.MessageEmbed()
.setColor('#21ff10')
.setTitle(`${client.user.username}`)
.setDescription(`


<:Wumpus_proton:793094653305028608>  **__GENEL__**

**・| \`${prefix}istatistik\`**
**・| \`${prefix}bağlantılar\`**
**・| \`${prefix}ping\`**


<:7718252402830qwe21363:800080199764148245>  **__AYARLAMALI SİSTEMLER__**

**・| \`${prefix}ayarlar\`**
**・| \`${prefix}giriş-ayarla\`**
**・| \`${prefix}güvenlik-ayarla\`**

<:Guardlog:799979602655182878>  **__GUARD__**

**・|  \`${prefix}kanal-koruma\`**
**・|  \`${prefix}emoji-koruma\`**
**・| \`${prefix}rol-koruma\`** 
**・| \`${prefix}bot-koruma\`**
**・| \`${prefix}dokunulmaz\`**
**・| \`${prefix}yetkili\`**
**・| \`${prefix}serverlog\`**


**・| İnformation**
> Favian Botumuz İle İlgili Herhangi Bir Sorunda \`v!suggest\` Komutunu Kullanabilirsiniz. Ayrıca Premium Sahibi Olmak Veya Komutları Görmek İçin \`v!premium\` Komutunu Kullanınız.
`)

.setThumbnail("https://media.discordapp.net/attachments/801384989073473597/801774179942531082/Favian_Ana_Karakter.png")
.setTimestamp()
message.channel.send(yardım)
  
   
  
}


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};