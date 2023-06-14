require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const { getWeather } = require("./lib/weather");
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("message", async (msg) => {
  try {
    console.log(msg.text);
    const text = await getWeather(msg.text);
    console.log(text);
    bot.sendMessage(msg.chat.id, text);
  } catch (error) {
    console.log(error);
    bot.sendMessage(msg.chat.id, error.message);
  }
});
