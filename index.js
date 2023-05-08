const dc = require('./dc');
const axios = require('axios');

//Variable start

//Put your email, password and token here.
//Also, do not share this to anyone!
const email = "email here";
const password = "password here";
const token = "token here";
//username as in name on your server. If you didn't change your username, just use the default one, example: yourname#0000. use yourname not the number.
const username = "username here";

//Put your channel ID and server ID here.
//if you don't know where to find, look at this example: https://discord.com/channels/serverID/channelID
//Note: You must be only the user in the channel, if there's another user, the bot will not work.
const serverID = "server ID here";
const channelID = "channel ID here";
//Actually, you can use this bot to other discord bot, but idk if it works or not because the main target here is Virtual Fisher.
const botName = "Virtual Fisher";

let run = 0;
const delay = 10000;

//if you want to use this bot to other discord bot, you need to change this captchaTitle and captchaDesc to the captcha title and description of the bot.
const captchaTitle = "Anti-bot\n/verify <result>";
const captchaDesc = ":information_source: To continue, solve the captcha posted above with the **/verify** command.\nIf the code is unreadable, you can use the **/verify regen** command.";
//variable end

(async () => {
    await dc.init();
    await dc.login(email, password);
    await dc.moveTo(serverID, channelID);
    body.init();
})();

const body = {
    init: async () => {
        //Getting last message in channels
        var lastMsg = await axios.get(`http://discord.com/api/v9/channels/${channelID}/messages?limit=1`, { headers: { Authorization: token } })
            .then((response) => {
                if (response.data[0].author.username == botName) {
                    if (response.data[0].embeds[0].title != null) {
                        lastMsg = response.data[0].embeds[0].title;
                    } else {
                        lastMsg = response.data[0].embeds[0].description;
                    }

                } else if (response.data[0].author.username == username) {
                    lastMsg = response.data[0].content;
                }
                return lastMsg;
            });
        //Get last message end

        console.log(lastMsg);

        //Do not change this if..else statement!!. If you know what you're doing, you can change it.
        if (lastMsg != captchaTitle && lastMsg != captchaDesc) {
            //Change this block of code as you want.
            //Block code start
            run++;
            console.log('Run: ' + run);
            currentRun = run % 5;
            if (currentRun != 0) {
                await dc.textMsg('/fish');
                await dc.textMsg('/buy');
                await dc.textMsg('Leeches 1');
            } else {
                await dc.textMsg('/sell');
                await dc.textMsg('all');
            }

            console.log((delay / 1000) + ' seconds delay');
            await dc.page.waitForTimeout(delay);

            body.init();
            //Block code end
        } else {
            //Do not change this block of code!!. If you know what you're doing, you can change it.
            console.log("Captcha Detected!! Finish the captcha and re-run the bot");
            await dc.page.waitForTimeout(delay);
            body.init();
        }
    }
}