require('dotenv').config()
const Discord = require('discord.js');

const bot = new Discord.Client();
if(!process.env.DISCORD_TOKEN) {
  console.log(`No token defined`);
  process.exit(1);
}
bot.login(process.env.DISCORD_TOKEN);

let bongees = new Set();
let admin = null;

function unsub(user) {
  bongees.delete(user.id);
  console.log(`${user.username} unsubbed`);
}

function sub(user) {
  bongees.add(user.id);
  console.log(`${user.username} subbed`);
}

function bongChannel(channel) {
  channel.join().then(connection => {
    console.log(`Bong'd ${channel.name}`);
    const dispatcher = connection.play("bong.wav");
    setTimeout(kbye, 2500, channel);
 }).catch(console.error);
}

bot.on('message', message => {
  let userid = message.author.id;
  let mentionedUser = message.mentions.users.first();
  if (message.content.startsWith('!bong')) {
    let voiceChannel = message.member.voice.channel;
    if(mentionedUser && admin.id === userid) {
      voiceChannel = mentionedUser.voice.channel;
    }
    bongChannel(voiceChannel);
  } else if (message.content.startsWith('!sub') && admin.id === userid) {
    if(mentionedUser) {
      sub(mentionedUser);
      message.reply(`Bongs for ${mentionedUser.username}`);
    } else {
      sub(message.author);
      message.reply("Bongs for you");
    }
  } else if (message.content.startsWith('!unsub')) {
    if(mentionedUser && admin.id === userid) {
      unsub(mentionedUser);
      message.reply(`No bong for ${mentionedUser.username}`);
    } else {
      unsub(message.author);
      message.reply("No bong for you");
    }
  } else if (message.content.startsWith('!admin') && admin == null) {
    admin = message.author;
    message.reply('Superbong');
    console.log(`${message.author.username} became admin`);
  }
});

function kbye(channel) {
  channel.leave();
}

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldUserChannel = oldMember.channel;
  let newUserChannel = newMember.channel;

  // Only bong if joining voice (rather than switching channels)
  if(!oldUserChannel && newUserChannel) {
    if (bongees.has(newMember.id)) {
      bongChannel(newUserChannel);
    }
  } 
});

bot.on('ready', () => {
  console.log('Bong.wav locked and loaded');
});
