const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('');

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

bot.on('message', message => {
  let userid = message.author.id;
  let mentionedUser = message.mentions.users.first();
  if (message.content.startsWith('!bong')) {
    if(mentionedUser && admin === userid) {
      sub(mentionedUser);
      message.reply(`Ready to bong ${mentionedUser.username}`);
    } else {
      sub(message.author);
      message.reply("Get ready to bong");
    }
  } else if (message.content.startsWith('!nobong')) {
    if(mentionedUser && admin === userid) {
      unsub(mentionedUser);
      message.reply(`No bong for ${mentionedUser.username}`);
    } else {
      unsub(message.author);
      message.reply("No bong for you");
    }
  } else if (message.content.startsWith('!admin') && admin == null) {
    admin = userid;
    message.reply('Superbong');
    console.log(`${message.author.username} became admin`);
  }
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldUserChannel = oldMember.channel;
  let newUserChannel = newMember.channel;

  if(!oldUserChannel && newUserChannel) {
    if (bongees.has(newMember.id)) {   
       newUserChannel.join().then(connection => {
          console.log(`Bong'd`);
          const dispatcher = connection.play("bong.wav");

          dispatcher.on("end", end => {newUserChannel.leave()});
       }).catch(console.error);
    }
  } 
});

bot.on('ready', () => {
  console.log('Bong.wav locked and loaded');
});