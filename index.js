const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
});

bot.onEvent(async context => {
  await context.sendText('你好！請問有什麼可以幫忙的嗎!', {
  quick_replies: [
    {
      content_type: 'text',
      title: '我想問問題',
      payload:'ask_question'
    },
    {
      content_type: 'text',
      title: '常見問題',
      payload:'choose_question_type'
    },
    {
      content_type: 'text',
      title: '客服資訊',
      payload: 'information'
    }
  ],
});
  if (context.event.message ==='我想問問題'){
   await context.sendText('test') 
  };

});

const server = createServer(bot, { verifyToken: config.verifyToken });

server.listen(process.env.PORT || 5000, () => {
  console.log('server is running');
});
