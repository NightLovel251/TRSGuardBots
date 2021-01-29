const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('761275133939286058') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#00ff0c')
       .setTitle(`Premium Sistemi`)
	   .setDescription(`
    
    
**\`Favian\` Premium Sistemine Sahip Olup Özel Komutlarımızı Kullanmak İçin** [**\`TIKLA\`**](https://discord.gg/nqH7WDkGt4)
    
    
**<:7718252402830qwe21363:800080199764148245> **  **__SEVİYE SİSTEMİ__**

**・|  v!seviye-kanal-ayarla \`#kanal\`** 
 
**・| v!seviye-msg-ayarla \`<mesajınız>\`**

**・| v!rank \`@member\`**


**__DEĞİŞKENLER__**

> \`-member-\` **@kullanıcı**

> \`-server-\` **Sunucu Adı**

> \`-seviye-\` **Kullanıcı Seviyesi**

> \`-totalxp-\` **Levele Kalan Oran**

> \`-seviyexp-\` **Level Xp'si**


**__ÖRNEK METİN__**

\`\`\`
v!seviye-msg-ayarla **-member-, -server-, Sunucusunda , \`-seviye-\` Seviyeye Ulaştın Bir Sonraki Levele -totalxp- Xp Kaldı Şuanki Xp Sayın -seviyexp-!**
\`\`\`

    `)
             .setFooter(`Favian Premium`)
    return message.channel.send(embed);

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'premium',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};