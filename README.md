# bong.wav

This is a silly project to entertain myelf and my friends (OK, mostly myself).

My old Logitech G930 headset used to be a pain to switch on. It would flat-out refuse to turn on in less than 30 seconds of holding the power button over and over again. My friends would be waiting on Discord talking to me, but I wouldn't be able to hear them.

Eventually, the headset would light up! And as the microphone turned on, it would play this annoying sound. This sound became my herald, and everyone would yell 'BONG' at me. After many years of this, when the headset was literally falling apart, I replaced it with a much more boring headset that just worked. 

But not before recording the sound of the old headset. *I had plans...*

## Usage

All interaction with the bot is done via messages. Message the bot with the following commands to interact with it.

### `!bong`

The bot will join the voice channel and play the sound, then leave.  

### `!admin`

The first user to message the bot with this command becomes the admin. The admin can subscribe themselves or others to be heralded on voicechat joins.

### `!sub [user]`

The admin may subscribe themselves, or another user to receive bonging.

### `!unsub [user]`

Users may unsubscribe themselves, and the admin may unsubscribe others.

## Requriements

- [discord.js](https://github.com/discordjs/discord.js)
- [ffmpeg](https://github.com/FFmpeg/FFmpeg)
- [@discordjs/opus](https://github.com/discordjs/opus)
- dotenv