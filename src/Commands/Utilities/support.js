const { MessageEmbed } = require("discord.js")
const Command = require("../../Structures/Command");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: 'support',
            category: "Utilities",
        });
    }

    async run(message) {
        const msg = message;

        const e = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(msg.guild.name)
            .setThumbnail(msg.author.avatarURL({ dynamic: true }) ?? msg.guild.iconURL({ dynamic: true }))
            .addField("Support server", [
                `[support](https://discord.gg/BguSraJz8k)`
            ])

        await message.channel.send(e);
    }
};