// Import the discord.js and axios modules
const Discord = require('discord.js');
const axios = require('axios');

// Create an instance of a Discord client
const client = new Discord.Client({ intents: ["Guilds", "GuildMembers"] });

client.once('ready', () => {
  console.log('bot ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Here we assume that the endpoint wants a JSON payload with the username and discriminator of the new member
  axios.post(process.env.MAGIC_HAIKU_WEBHOOK, {
    username: member.user.username,
    discriminator: member.user.discriminator,
  })
    .then(function(response) {
      console.log('webhook sent! ' + response.status)
    })
    .catch(function(error) {
      console.error(error);
    });
});

// Log in the bot with your token
client.login(process.env.DISCORD_BOT_TOKEN);
