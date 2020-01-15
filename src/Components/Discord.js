import * as React from 'react';
import Discord from 'discord.js';

var auth = require('./auth.json');

export default class DiscordBot extends React.Component {
  render() {
    // Create an instance of a Discord client 
    var bot = new Discord.Client({
      token: auth.token,
      autorun: true
    });
    
    // Create an event listener for messages
    client.on('message', message => {
      // If the message is "ping"
      if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
      }
    });
    
    // Log our bot in using the token from https://discordapp.com/developers/applications/me
    client.login(auth.token);
    return (
      <div>TEST</div>
    );
  }
}