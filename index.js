const { Client, Collection, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
const config = require("./config.json");
const express = require('express');



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
client.footer = { text: "discord.gg/novaworld", iconURL: "https://media.discordapp.net/attachments/1109405902609592410/1109407365427638362/28530e0218492ddf5bd5d237047926bd.webp?width=1420&height=1420"}


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

    //bot codded by Ruwin#0001 (https://discord.gg/novaworld & https://discord.gg/whitehall)