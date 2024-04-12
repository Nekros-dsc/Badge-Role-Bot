const { Client, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
    intents: 32767
});

const loadDatabase = require("./loadDatabase");
client.db = loadDatabase()
client.db.connect()


client.commands = new Collection();
client.slash_commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.categories = fs.readdirSync("./commands");
client.footer = { text: "discord.gg/uhq", iconURL: "https://cdn.discordapp.com/attachments/1227729283691188254/1228404957057650748/Uhq.png?ex=662bec44&is=66197744&hm=51f28c33b7291173b04069162357c43548e27671bf4a9a15019c11a4c1018a42&"}


module.exports = client;


["prefix", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


process.on('unhandledRejection', err => {
    console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
    console.log(err);
});


const AUTH = process.env.TOKEN || config.client.TOKEN;

    client.login(AUTH)