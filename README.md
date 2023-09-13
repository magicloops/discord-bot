# Magic Loops Discord Bot

This is a simple bot. It creates a haiku whenever a new user joins the server. 

## Requirements

You will need the following:

- Node.js
- npm
- A Discord Bot Token
- Your Magic Haiku Webhook URL


## Setting up your Magic Loop

You can copy this example [Discord Haiku loop](https://magicloops.dev/loop/534dff72-7582-402f-8c9e-8e78c4cb901b).

Make sure to add your `BOT_TOKEN` and `DISCORD_WEBHOOK`.

## Dependencies

```bash
npm install discord.js axios
```

## Environment Variables

- `DISCORD_BOT_TOKEN`: Your bot's token, used to authenticate your bot with Discord's servers.
- `MAGIC_HAIKU_WEBHOOK`: Your Magic Loop Webhook, the endpoint where the bot sends a POST request when a new member joins.


## Running the Bot

To run the bot, simply use the command:

```bash
node bot.js
```

Given all the settings are correct, your bot should now be operational!
