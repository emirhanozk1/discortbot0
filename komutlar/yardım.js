const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**"komutlarınızı sırayla yazınız")
  .addField("**Yetkili Komutlar**", `KOMUTLARINIZI YAZINIZ`)
  .addField("**Ana Komutlar**", "!yardım = BOT Komutlarını Atar. \!bilgi = BOT Kendisi Hakkında Bilgi Verir. \!!ping = BOT Gecikme Süresini Söyler. \!!davet = BOT Davet Linkini Atar. \!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **ꅄმzɾმἶl_ჩმʂƙმղ♔#4660 ** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};