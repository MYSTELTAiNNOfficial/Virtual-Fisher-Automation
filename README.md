# Virtual Fisher Automation (VFA)

## Table of Contents
- [About](#about)
- [Changelog](#changelog)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Disclaimer](#disclaimer)

## About <a name = "about"></a>

This project is solely for learning purpose and "fun" purpose. It is not intended to be used in any other way.

This project is a automated command for Discord Bot, Virtual Fisher". This project build on NodeJS. Using Puppeteer to automate the process of fishing in the game, by automatically typing a command in Discord chat. And using Discord API to check for the last message, to avoid getting banned by the bot.

## Changelog <a name = "changelog"></a>

> - [10/05/23](https://github.com/MYSTELTAiNNOfficial/Virtual-Fisher-Automation/pull/4) <-- Latest
>   - New function/feature, Auto Click Button.
>   - New error handling.
> - [09/05/23](https://github.com/MYSTELTAiNNOfficial/Virtual-Fisher-Automation/pull/3)
>   - Add checking how much the bait currently

## Getting Started <a name = "getting_started"></a>

To get started, all you need is install NodeJS and then clone this repository to your local machine. After that, run:

```
npm install
``` 

to install all the dependencies. 

## Usage <a name = "usage"></a>

For the usage, check index.js file first and change the value of any variable that you need to change, such as:
```
 email, password and token authorization.
```
If you don't know how to get token authorization, please check this link: https://discordhelp.net/discord-token

After that, run:
```
npm run start
```
And done, the bot will automatically run and fish for you.

## About CAPTHCA Detection
After CAPTCHA Detected, the main code will stop and will tell you on console that CAPTCHA has been detected.
<img src="https://user-images.githubusercontent.com/53290732/236873714-04742a65-0e48-4c4a-b24b-50da69352030.png" width=50% height=50%>

You need to /verify manual on the Chromium where the discord run. After that, you can see notification indicating that you're safe to continue.
<img src="https://user-images.githubusercontent.com/53290732/236873915-f1bbee1d-2775-4377-bf96-0181d515e9d4.png" width=50% height=50%>

After that, you still need 1 more thing to break to cycle. All you need is to type anything on chatbox and just press enter. And bam, the main code will continue to run again.
<img src="https://user-images.githubusercontent.com/53290732/236874231-a3042b73-6f1f-417f-9658-3ee2b0ecd00e.png" width=50% height=50%>

Because, we need to change the last message in channel. If we didn't type anyting, the last message will still a CAPTCHA, so we need to add something to break that cycle.

## Disclaimer <a name = "disclaimer"></a>
Rest assured, this project will not collect any data from you. If you don't trust me, you can check the code yourself. I'm not responsible for any damage that you cause to yourself or to others.

**And, do note:**
```
I'm not responsible for any data leak or any other problem that may occur.

Also, i'm already said in index.js that you can't share any data, like email password and token, to anyone. If you ignore this, I'm not responsible for any damage that may occur.
```
