//Show current loaded commands
const { ApplicationCommandOptionType, ChannelType, EmbedBuilder } = require('discord.js');
const db = require("../mongoDB");
module.exports = {
    name: "dcc",
    description: "Shows the current loaded commands.",
    permissions: "0x0000000000000020",
    options: [],
    run: async (client, interaction) => {
        let lang = await db?.musicbot?.findOne({ guildID:
interaction.guild.id })
        lang = lang?.language || client.language
        lang = require(`../languages/${lang}.js`);
        try {
            const embed = new EmbedBuilder();
            embed.setColor(0x00FF00);
            embed.setTitle("Loaded Commands");
            embed.setDescription(`\`\`\`js
${client.commands.map(c => c.name).join(", ")}
\`\`\``);
            embed.setTimestamp();
            interaction.reply({ embeds: [embed] }).catch(e => { });
        } catch (e) {
            console.log(e)
        }
    }
}

