// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const express = require('express');
const { BotFrameworkAdapter } = require('botbuilder');
const { TeamsBot } = require("./teamsBot");
const app = express();
const serverlessExpress = require('aws-serverless-express');
const server = serverlessExpress.createServer(app);

// lambda entrypoint
exports.lambdaHandler = (event, context) => serverlessExpress.proxy(server, event, context)

const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

adapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError]: ${ error }`);
    await context.sendActivity(`Oops. Something went wrong!`);
};

const bot = new TeamsBot();
// Listen for incoming requests.
app.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});



