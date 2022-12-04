const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "dm",
  description: "Dm someone.",
    permissions: "0x8",
  options: [{
    name: "user",
    description: "The user you want to dm.",
    type: ApplicationCommandOptionType.User,
    required: true
    }, {
    name: "message",
    description: "The message you want to send.",
    type: ApplicationCommandOptionType.String,
    required: true
    }],
    run: async (client, interaction) => {
        let lang = await db?.musicbot?.findOne({ guildID:
interaction.guild.id })
        lang = lang?.language || client.language
        lang = require(`../languages/${lang}.js`);
        try {
            const user = interaction.options.getUser('user');
            const message = interaction.options.getString('message');
            user.send(message).catch(e => {
                interaction.reply({ content: `${lang.msg1}`, ephemeral: true }).catch(e => { })
            })
            interaction.reply({ content: `Sended dm :)`, ephemeral: true }).catch(e => { })
        }
        catch (e) {
            interaction.reply({ content: `Sended dm :)`, ephemeral: true }).catch(e => { })
        }
    }
}
