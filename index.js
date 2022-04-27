const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] }
)

client.login(process.env.token)

client.on("ready", () => {
  console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
    if (message.content == "wb!cattafino") {
        message.channel.send("ESERI BOLENTI COMO SALAMI PICANTI")
    }
  
    if (message.content == "wb!cattambed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Cattafino Last Words")
            .setDescription("ESERI BOLENTI COMO SALAMI PICANTI")
            .setThumbnail("https://www.salumificiogalliremo.it/wp-content/uploads/2015/12/strolghino.png")
  
        message.channel.send({ embeds: [embed] })
    }
  })