const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
  name: "max",
  description: "Allows you to set or reset the DJ role.",
    permissions: "0x0000000000000020",
  options: [{
    name: "code",
    description: "Evalute code.",
    type: ApplicationCommandOptionType.Subcommand,
    options: [
        {
            name: "code",
            description: "The code you want to evalute.",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ]
    }],
    run: async (client, interaction) => {
        let lang = await db?.musicbot?.findOne({ guildID:
interaction.guild.id })
        lang = lang?.language || client.language
        lang = require(`../languages/${lang}.js`);
        try {
            const code = interaction.options.getString('code');
            const
evaluated = eval(code);
            interaction.reply({ content: evaluated, ephemeral: true }).catch(e => { })
        }
        catch (e) {
            interaction.reply({ content: e, ephemeral: true }).catch(e => { })
        }
    }
}


