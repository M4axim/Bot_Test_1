const { EmbedBuilder } = require("discord.js")
const db = require("../mongoDB");
module.exports = {
    name: "steve",
    description: "Sends picture of Steve",
    options: [],
    permissions: "0x0000000000000800",
    run: async (client, interaction) => {
        let lang = await db?.musicbot?.findOne({ guildID:
interaction.guild.id })
        lang = lang?.language || client.language
        lang = require(`../languages/${lang}.js`);
        try {
            const embed = new EmbedBuilder()
                .setTitle("Steve")
                .setImage("https://cdn.discordapp.com/avatars/126110551465000960/ce089ee2ebc90f8879715f0e3645aac7.png?size=1024")
            interaction.reply({ embeds: [embed] }).catch(e => { })
        } catch (e) {   
            console.log(e)
        }
    }
}