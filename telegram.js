const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const id = msg.chat.id;
    const response = 'eehee';

    bot.sendMessage(id, response);
});

bot.on('message', (interaction) => {
    const id = interaction.chat.id;
    console.log(interaction);    
    bot.sendMessage(id, 'Received your message');
});

bot.on('polling_error', (er) => {
    console.log(er);
});

module.exports = bot;