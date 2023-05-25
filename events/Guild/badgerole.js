const client = require('../../index.js');
const config = require('../../config.json');

client.on('guildMemberAdd', async (member, client) => {

    try {
        let role;
        let user = member.guild.members.cache.get(member.id)
        client.db.query(`SELECT * FROM badgerole WHERE guildId = "${member.guild.id}"`, async (err, req) => {
        if(req.length < 1) return;
        const onoff = req[0].status;
        if(onoff == 'off') return;
       
        var flags = {
            "": "Aucun",
            "DISCORD_EMPLOYEE": req[0].equipediscord,
            "DISCORD_PARTNER": req[0].partenaire,
            "BUGHUNTER_LEVEL_1": req[0].chass1,
            "BUGHUNTER_LEVEL_2": req[0].chass2,
            "HYPESQUAD_EVENTS": req[0].hypesquadevent,
            "HOUSE_BRILLIANCE": req[0].hypesquadbril,
            "HOUSE_BRAVERY": req[0].hypesquadbra,
            "HOUSE_BALANCE": req[0].hypesquadbal,
            "EARLY_SUPPORTER": role = req[0].soutien,
            "EARLY_VERIFIED_DEVELOPER": req[0].dev,
        };

        role = flags[user.user.flags.toArray().join(" ")]

        const gld = client.guilds.cache.get(member.guild.id)
        const a = gld.roles.cache.get(role) ? gld.roles.cache.get(role).id ? "yes" : "no" : "no"
        if(a === "no") return;

        member.roles.add(role)

    })


    } catch(e) {
        console.log(e + 'Je n\'ai pas réussi à mettre le rôle badge /novaworld')
    }
})

 //bot codded by Ruwin#0001 (https://discord.gg/novaworld & https://discord.gg/whitehall)