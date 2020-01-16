import * as React from 'react';
//import Discord from 'discord.io'


export default class Discordio extends React.Component {
  render() {
    var Discord = require('discord.io');
    var config = require('./config.json');

    var bot = new Discord.Client({
      autorun: true,
      token: config.bot_token
    });

    bot.on('ready', function(event) {
        console.log('Logged in as %s - %s\n', bot.username, bot.id);
    });

    bot.on('message', function(user, userID, channelID, message, event) {
      if (message === "ping") {
        bot.sendMessage({
          to: channelID,
          message: "pong"
        });
      }
    });
    return (<div></div>);
  }
}