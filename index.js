const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('');

let bongees = new Set();
let admin = null;

function unsub(userid) {
  bongees.delete(userid);
  console.log(`${userid} unsubbed`);
}

function sub(userid) {
  bongees.add(userid);
  console.log(`${userid} subbed`);
}

bot.on('message', message => {
  let userid = message.author.id;
  let mentionedUser = message.mentions.users.first();
  if (message.content.startsWith('!bong')) {
    if(mentionedUser && admin === userid) {
      sub(mentionedUser.id);
      message.reply(`Ready to bong ${mentionedUser.username}`);
    } else {
      sub(userid);
      message.reply("Get ready to bong");
    }
  } else if (message.content.startsWith('!nobong')) {
    if(mentionedUser && admin === userid) {
      unsub(mentionedUser.id);
      message.reply(`No bong for ${mentionedUser.username}`);
    } else {
      unsub(userid);
      message.reply("No bong for you");
    }
  } else if (message.content.startsWith('!admin') && admin == null) {
    admin = userid;
    message.reply('Superbong');
    console.log(`${message.author.username} became admin`);
  }
});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldUserChannel = oldMember.channel
  let newUserChannel = newMember.channel

  if(!oldUserChannel && newUserChannel) {
    if (bongees.includes(newMember.id)) {   
       newUserChannel.join().then(connection => {
          console.log(`Bong'd ${newMember.id}`);
          const dispatcher = connection.play("bong.wav");

          dispatcher.on("end", end => {newUserChannel.leave()});
       }).catch(console.error);
    }
  } 
});

bot.on('ready', () => {
  console.log('Bong.wav locked and loaded');
});