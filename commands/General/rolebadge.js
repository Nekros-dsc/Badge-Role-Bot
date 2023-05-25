const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')

 //bot codded by Ruwin#0001 (https://discord.gg/novaworld & https://discord.gg/whitehall)

module.exports = {
	name: 'rolebadge',
	aliases: ["rb"],
	category: "General",
	description: "Rolebadge",
	usage: "rolebadge",
	examples: [],
	run: async (client, message, args, prefix) => {
		const guild = message.guild

       if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('pAS LES PERMS !!!!!! https://discord.gg/novaworld')

        //bot codded by Ruwin#0001 (https://discord.gg/novaworld & https://discord.gg/whitehall)

       client.db.query(`SELECT * FROM badgerole WHERE guildId = "${message.guild.id}"`, async (err, req) => {
                    let onemoji
                    let textonoff;
                    let onoff;
                    let status;
                    let equipediscord;
                    let partenaire;
                    let ancienmodo;
                    let hypesquadevent;
                    let chass2;
                    let chass1;
                    let hypesquadbal;
                    let hypesquadbril;
                    let hypesquadbra;
                    let dev;
                    let soutien;
                    if(req.length >= 1) {
                     status = req[0].status;
                     equipediscord = `<@&${req[0].equipediscord}>`
                     if (equipediscord == `<@&${null}>`) equipediscord = "Non configuré."
                     partenaire = `<@&${req[0].partenaire}>`
                     if (partenaire == `<@&${null}>`) partenaire = "Non configuré."
                     ancienmodo = `<@&${req[0].ancienmodo}>`
                     if (ancienmodo == `<@&${null}>`) ancienmodo = "Non configuré."
                     hypesquadevent = `<@&${req[0].hypesquadevent}>`
                     if (hypesquadevent == `<@&${null}>`) hypesquadevent = "Non configuré."
                     hypesquadbra = `<@&${req[0].hypesquadbra}>`
                     if (hypesquadbra == `<@&${null}>`) hypesquadbra = "Non configuré."
                     hypesquadbril = `<@&${req[0].hypesquadbril}>`
                     if (hypesquadbril == `<@&${null}>`) hypesquadbril = "Non configuré."
                     hypesquadbal = `<@&${req[0].hypesquadbal}>`
                     if (hypesquadbal == `<@&${null}>`) hypesquadbal = "Non configuré."
                     chass1 = `<@&${req[0].chass1}>`
                     if (chass1 == `<@&${null}>`) chass1 = "Non configuré."
                     chass2 = `<@&${req[0].chass2}>`
                     if (chass2 == `<@&${null}>`) chass2 = "Non configuré."
                     dev = `<@&${req[0].dev}>`
                     if (dev == `<@&${null}>`) dev = "Non configuré."
                     soutien = `<@&${req[0].soutien}>`
                     if (soutien == `<@&${null}>`) soutien = "Non configuré."
                    }
                    if(req.length < 1) {
                     status = 'off';
                     equipediscord = 'Non configuré.';
                     partenaire = 'Non configuré.';
                     ancienmodo = 'Non configuré.';
                     hypesquadevent = 'Non configuré.';
                     hypesquadbra = 'Non configuré.';
                     hypesquadbril = 'Non configuré.';
                     hypesquadbal = 'Non configuré.';
                     chass1 = 'Non configuré.';
                     chass2 = 'Non configuré.';
                     dev = 'Non configuré.';
                     soutien = 'Non configuré.';
                    }
            if(status == 'on') statusemoji = '<a:loadingGreen:1109779997331304468>'
            if(status == 'off') statusemoji = '<a:loadingRed:1109779995758440549>'


           

       const embed_badge = new MessageEmbed()
       .setTitle(`Role Badge`)
       .setColor('PURPLE')
       .setDescription(`
        Statut: ${statusemoji}
        > <:DiscordEmployee:1109520664949424229> - ${equipediscord}
        > <:PartneredServerOwner:1109520663343009884> - ${partenaire}
        > <:DiscordCertifiedModerator:1109520659756892290> - ${ancienmodo}
        > <:HypeSquadEvents:1109520666199326800> - ${hypesquadevent}
        > <:HouseBravery:1109520662252507258> - ${hypesquadbra}
        > <:HouseBrilliance:1109520655214456883> - ${hypesquadbril}
        > <:HouseBalance:1109520651917721643> - ${hypesquadbal}
        > <:BugHunterLevel1:1109520653670944778> - ${chass1}
        > <:BugHunterLevel2:1109520660977430619> - ${chass2}
        > <:EarlyVerifiedBotDeveloper:1109520650613313707> - ${dev}
        > <:soutien:1109528537280553060> - ${soutien}
        `)
        .setFooter(client.footer)

        let rolebadged = new MessageSelectMenu()
        .setCustomId('rolebadge')
        .setPlaceholder("Choisis une option")
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions([
            {
                label: 'Activer/desactiver',
                value: `rolebadgeonoff`,
                emoji: '<a:loadingGreen:1109779997331304468>',
            },
            {
                label: 'Configuration automatique des rôles',
                value: `rolebadgeconf`,
                emoji: "<:hammerandwrench_1f6e0fe0f:1106912178625327165>",
            },
            {
                label: 'Configuration manuelle des rôles',
                value: "rolebadgemaj",
                emoji: "<:counterclockwisearrowsbutton_1f5:1104418794740392049>"
            },
        ])
    const menumsg = await message.channel.send({embeds: [embed_badge], components: [new MessageActionRow().addComponents([rolebadged])]})
    let msg = menumsg
          
          
    let filter1 = (i) => i.user.id === message.author.id;

    const col = await msg.createMessageComponentCollector({
      filter: filter1,
      componentType: "SELECT_MENU"
  })
  

        col.on("collect", async (i) => {
            await i.deferUpdate()
            if (i.values[0] === "rolebadgeonoff") {

              

                client.db.query(`SELECT * FROM badgerole WHERE guildId = "${message.guild.id}"`, async (err, req) => {
                    if(err) throw err;
                
                    if(req.length < 1){
                        client.db.query(`INSERT INTO badgerole (guildId, status) VALUES ("${message.guild.id}", "on")`)
                        const embed_badge2 = new MessageEmbed()
              .setTitle(`Role Badge`)
              .setColor('PURPLE')
              .setDescription(`
               Statut: <a:loadingGreen:1109779997331304468>
               > <:DiscordEmployee:1109520664949424229> - ${equipediscord}
               > <:PartneredServerOwner:1109520663343009884> - ${partenaire}
               > <:DiscordCertifiedModerator:1109520659756892290> - ${ancienmodo}
               > <:HypeSquadEvents:1109520666199326800> - ${hypesquadevent}
               > <:HouseBravery:1109520662252507258> - ${hypesquadbra}
               > <:HouseBrilliance:1109520655214456883> - ${hypesquadbril}
               > <:HouseBalance:1109520651917721643> - ${hypesquadbal}
               > <:BugHunterLevel1:1109520653670944778> - ${chass1}
               > <:BugHunterLevel2:1109520660977430619> - ${chass2}
               > <:EarlyVerifiedBotDeveloper:1109520650613313707> - ${dev}
               > <:soutien:1109528537280553060> - ${soutien}
               `)
               .setFooter(client.footer)
                        menumsg.edit({embeds: [embed_badge2], components: [new MessageActionRow().addComponents([rolebadged])]})
                    } else {
                        let stat = req[0].status
                        
                        if(stat == 'on') onoff = 'off'
                        if(stat == 'off') onoff = 'on'
                        if (stat == 'on') onemoji = '<a:loadingRed:1109779995758440549>'
                        if (stat == 'off') onemoji = '<a:loadingGreen:1109779997331304468>'     
                        
                        

                        const embed_badge2 = new MessageEmbed()
                        .setTitle(`Role Badge`)
                        .setColor('PURPLE')
                        .setDescription(`
                         Statut: ${onemoji}
                         > <:DiscordEmployee:1109520664949424229> - ${equipediscord}
                         > <:PartneredServerOwner:1109520663343009884> - ${partenaire}
                         > <:DiscordCertifiedModerator:1109520659756892290> - ${ancienmodo}
                         > <:HypeSquadEvents:1109520666199326800> - ${hypesquadevent}
                         > <:HouseBravery:1109520662252507258> - ${hypesquadbra}
                         > <:HouseBrilliance:1109520655214456883> - ${hypesquadbril}
                         > <:HouseBalance:1109520651917721643> - ${hypesquadbal}
                         > <:BugHunterLevel1:1109520653670944778> - ${chass1}
                         > <:BugHunterLevel2:1109520660977430619> - ${chass2}
                         > <:EarlyVerifiedBotDeveloper:1109520650613313707> - ${dev}
                         > <:soutien:1109528537280553060> - ${soutien}
                         `)
                         .setFooter(client.footer)


                client.db.query(`UPDATE badgerole SET status = '${onoff}' WHERE guildId = ${message.guild.id}`)


                menumsg.edit({embeds: [embed_badge2], components: [new MessageActionRow().addComponents([rolebadged])]})
            }
        })

            }
            if (i.values[0] === "rolebadgeconf") {

              client.db.query(`SELECT * FROM badgerole WHERE guildId = "${message.guild.id}"`, async (err, req) => {
                if(req.length < 1) {

                    //equipe discord /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Équipe Discord',
                          color: '#5865f2',
                     
                        reason: 'création du rôle equipe discord',
                      }).then(role => {
                                client.db.query(`INSERT INTO badgerole (guildId, equipediscord) VALUES ("${message.guild.id}", "${role.id}")`)
                    })
                    //Propriétaire d'un serveur partenaire /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Propriétaire d\'un serveur partenaire',
                          color: '#5865f2',
                      
                        reason: 'création du rôle Propriétaire d\'un serveur partenaire',
                      }).then(role => {
                                client.db.query(`UPDATE badgerole SET partenaire = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Brilliance de la HypeSquad /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Brilliance de la HypeSquad',
                          color: '#f47b67',
                    
                        reason: 'création du rôle Brilliance de la HypeSquad',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET hypesquadbril = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Chasseur de bugs Discord 1 /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Chasseur de bugs Discord',
                          color: '#3ba55c',
                      
                        reason: 'création du rôle Chasseur de bugs Discord',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET chass1 = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Chasseur de bugs Discord 2 /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Chasseur de bugs Discord',
                          color: '#ffd56c',
                      
                        reason: 'création du rôle Chasseur de bugs Discord 2',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET chass2 = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Développeur de bot certifié de la première heure /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Développeur de bot certifié de la première heure',
                          color: '#5865f2',
                       
                        reason: 'création du rôle Développeur de bot certifié de la première heure',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET dev = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Soutien de la première heure /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Soutien de la première heure',
                          color: '#9cb8ff',
                       
                        reason: 'création du rôle Soutien de la première heure',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET soutien = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Ancien des programmes de modération /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Ancien des programmes de modération',
                          color: '#fc964b',
                    
                        reason: 'création du rôle Ancien des programmes de modération',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET ancienmodo = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Événements HypeSquad /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Événements HypeSquad',
                          color: '#fbb848',
                   
                        reason: 'création du rôle Événements HypeSquad',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET hypesquadevent = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Bravery de la HypeSquad /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Bravery de la HypeSquad',
                          color: '#9c84ef',
                        
                        reason: 'création du rôle Bravery de la HypeSquad',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET hypesquadbra = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                    })
                    //Balance de la HypeSquad /novaworld & /whitehall
                    message.guild.roles.create({
                        
                          name: 'Balance de la HypeSquad',
                          color: '#45ddc0',
                    
                        reason: 'création du rôle Balance de la HypeSquad',
                      }).then(role => {
                        client.db.query(`UPDATE badgerole SET hypesquadbal = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                        menumsg.edit({embeds: [embed_badge], components: [new MessageActionRow().addComponents([rolebadged])]})
                    })



                }

                if(req.length >= 1) {

                  
      
                  guild.roles.cache.find(role => role.name === 'Équipe Discord')?.delete();
                  guild.roles.cache.find(role => role.name === 'Propriétaire d\'un serveur partenaire')?.delete();
                  guild.roles.cache.find(role => role.name === 'Brilliance de la HypeSquad')?.delete();
                  guild.roles.cache.find(role => role.name === 'Chasseur de bugs Discord')?.delete();
                  guild.roles.cache.find(role => role.name === 'Chasseur de bugs Discord')?.delete();
                  guild.roles.cache.find(role => role.name === 'Développeur de bot certifié de la première heure')?.delete();
                  guild.roles.cache.find(role => role.name === 'Soutien de la première heure')?.delete();
                  guild.roles.cache.find(role => role.name === 'Ancien des programmes de modération')?.delete();
                  guild.roles.cache.find(role => role.name === 'Événements HypeSquad')?.delete();
                  guild.roles.cache.find(role => role.name === 'Bravery de la HypeSquad')?.delete();
                  guild.roles.cache.find(role => role.name === 'Balance de la HypeSquad')?.delete()

               

             
                    //equipe discord /novaworld & /whitehall
                    message.guild.roles.create({
                        
                      name: 'Équipe Discord',
                      color: '#5865f2',
                 
                    reason: 'création du rôle equipe discord',
                  }).then(role => {
                          
                            client.db.query(`UPDATE badgerole SET equipediscord = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Propriétaire d'un serveur partenaire /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Propriétaire d\'un serveur partenaire',
                      color: '#5865f2',
                  
                    reason: 'création du rôle Propriétaire d\'un serveur partenaire',
                  }).then(role => {
                            client.db.query(`UPDATE badgerole SET partenaire = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Brilliance de la HypeSquad /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Brilliance de la HypeSquad',
                      color: '#f47b67',
                
                    reason: 'création du rôle Brilliance de la HypeSquad',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET hypesquadbril = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Chasseur de bugs Discord 1 /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Chasseur de bugs Discord',
                      color: '#3ba55c',
                  
                    reason: 'création du rôle Chasseur de bugs Discord',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET chass1 = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Chasseur de bugs Discord 2 /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Chasseur de bugs Discord',
                      color: '#ffd56c',
                  
                    reason: 'création du rôle Chasseur de bugs Discord 2',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET chass2 = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Développeur de bot certifié de la première heure /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Développeur de bot certifié de la première heure',
                      color: '#5865f2',
                   
                    reason: 'création du rôle Développeur de bot certifié de la première heure',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET dev = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Soutien de la première heure /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Soutien de la première heure',
                      color: '#9cb8ff',
                   
                    reason: 'création du rôle Soutien de la première heure',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET soutien = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Ancien des programmes de modération /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Ancien des programmes de modération',
                      color: '#fc964b',
                
                    reason: 'création du rôle Ancien des programmes de modération',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET ancienmodo = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Événements HypeSquad /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Événements HypeSquad',
                      color: '#fbb848',
               
                    reason: 'création du rôle Événements HypeSquad',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET hypesquadevent = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Bravery de la HypeSquad /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Bravery de la HypeSquad',
                      color: '#9c84ef',
                    
                    reason: 'création du rôle Bravery de la HypeSquad',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET hypesquadbra = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))
                })
                //Balance de la HypeSquad /novaworld & /whitehall
                message.guild.roles.create({
                    
                      name: 'Balance de la HypeSquad',
                      color: '#45ddc0',
                
                    reason: 'création du rôle Balance de la HypeSquad',
                  }).then(role => {
                    client.db.query(`UPDATE badgerole SET hypesquadbal = '${role.id}' WHERE guildId = ${message.guild.id}`.replace("<@&", "").replace(">", ""))

					client.db.query(`SELECT * FROM badgerole WHERE guildId = "${message.guild.id}"`, async (err, req) => {

					
						const embed_badge3 = new MessageEmbed()
								.setTitle(`Role Badge`)
								.setColor('PURPLE')
								.setDescription(`
								 Statut: ${onemoji}
								 > <:DiscordEmployee:1109520664949424229> - ${equipediscord}
								 > <:PartneredServerOwner:1109520663343009884> - ${partenaire}
								 > <:DiscordCertifiedModerator:1109520659756892290> - ${ancienmodo}
								 > <:HypeSquadEvents:1109520666199326800> - ${hypesquadevent}
								 > <:HouseBravery:1109520662252507258> - ${hypesquadbra}
								 > <:HouseBrilliance:1109520655214456883> - ${hypesquadbril}
								 > <:HouseBalance:1109520651917721643> - ${hypesquadbal}
								 > <:BugHunterLevel1:1109520653670944778> - ${chass1}
								 > <:BugHunterLevel2:1109520660977430619> - ${chass2}
								 > <:EarlyVerifiedBotDeveloper:1109520650613313707> - ${dev}
								 > <:soutien:1109528537280553060> - ${soutien}
								 `)
								 .setFooter(client.footer)
						
						menumsg.edit({embeds: [embed_badge3], components: [new MessageActionRow().addComponents([rolebadged])]})

					})

					
                })
         
             
              

 
                }



              })
            }

            if (i.values[0] === "rolebadgemaj") {
              i.reply('***Soon*** https://discord.gg/novaworld')

            }
        
        
        
        
        })

       })
	}
}

 //bot codded by Ruwin#0001 (https://discord.gg/novaworld & https://discord.gg/whitehall)
