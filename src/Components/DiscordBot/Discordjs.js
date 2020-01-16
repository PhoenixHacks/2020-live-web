import * as React from 'react';
import Discord from 'discord.js';

var config = require('./config.json');

export default class Discordjs extends React.Component {
  render() {
    // Create an instance of a Discord client 
    var bot = new Discord.Client({
      token: config.bot_token,
      autorun: true
    });
    
    // Create an event listener for messages
    bot.on('message', message => {
      // If the message is "ping"
      if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
      }
    });
    
    // Log our bot in using the token from https://discordapp.com/developers/applications/me
    bot.login(config.bot_token);
    return (
      <div></div>
    );
  }
}