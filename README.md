# bong.wav

This is a silly project to entertain myelf and my friends (OK, mostly myself).

My old Logitech G930 headset used to be a pain to switch on. It would flat-out refuse to turn on in less than 30 seconds of holding the power button over and over again. My friends would be waiting on Discord talking to me, but I wouldn't be able to hear them.

Eventually, the headset would light up! And as the microphone turned on, it would play this annoying sound. This sound became my herald, and everyone would yell 'BONG' at me. After many years of this, when the headset was literally falling apart, I replaced it with a much more boring headset that just worked. 

But not before recording the sound of the old headset. *I had plans...*

## Setup

1. You will need to create a Discord bot. Discord has [very good docs](https://discord.com/developers/docs/intro) for this.
1. Once you've got this set up, grab the API token and add this to the `.env` file (or directly to the `docker-compose.yml` file)
1. Run docker-compose up -d
1. Add the bot to the target server
1. DM the bot with commands - e.g. become admin with `!admin`


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

- Docker and docker-compose
- Discord account/app

## Demo

![Demo screencapture](/bong.gif)
