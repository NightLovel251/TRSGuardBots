const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let nemesis = await db.fetch(`premod_${message.guild.id}`)
  let nemesisYazi;
  if (nemesis == null) nemesisYazi = '> <a:no:793101866673111040> **Bu Sunucuda \`Premium\` Mod aktif değil.**'
  if (nemesis == 'aktif') nemesisYazi = '> <a:yes:793101776651681813> **Bu Sunucu İçin Premium Mod Aktif.**'
  if (nemesis == 'deaktif') nemesisYazi = '> <a:no:793101866673111040> **Bu Sunucuda \`Premium\` Mod aktif değil.**'
  const embed = new Discord.MessageEmbed()
  .setTitle('Favian')
  .setColor("BLUE")
  .setDescription(nemesisYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["premiumkontrol"],
    permLevel: 0,
}

exports.help = {
      name: 'premiumkontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}