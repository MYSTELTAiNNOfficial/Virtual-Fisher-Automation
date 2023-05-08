const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.discord.com';

const discord = {
    init: async () => {
        discord.browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1366, height: 768 }, args: ['--start-maximized'] });
        discord.page = await discord.browser.newPage();
        await discord.page.setViewport({ width: 1366, height: 768 });
        await discord.page.setUserAgent('UA-TEST');
        await discord.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
    },
    login: async (username, password) => {
        let loginButton = await discord.page.$x('//a[contains(text(), "Login")]');
        await loginButton[0].evaluate(el => el.click());
        await discord.page.waitForNavigation({ waitUntil: 'networkidle2' });

        await discord.page.type('input[name="email"]', username, { delay: 100 });
        await discord.page.type('input[name="password"]', password, { delay: 100 });
        let submitButton = await discord.page.$x('//div[contains(text(), "Log In")]');
        await submitButton[0].click();
        await discord.page.waitForNavigation({ waitUntil: 'networkidle2' });
    },
    moveTo: async (serverID, channelID) => {
        await discord.page.goto(`${BASE_URL}/channels/${serverID}/${channelID}`, { waitUntil: 'networkidle2' });
        await discord.page.waitForTimeout(5000);
    },
    textMsg: async (msg) => {
        await discord.page.type('div[data-slate-node="element"]', msg, { delay: 100 });
        await discord.page.waitForTimeout(1500);
        await discord.page.keyboard.press('Enter');
        await discord.page.waitForTimeout(500);
        await discord.page.keyboard.press('Enter');
        await discord.page.waitForTimeout(1500);
    }
}

module.exports = discord;