let Discord = require("discord.js")
let bot = new Discord.Client()
let prefix = "!"
const client = new Discord.Client();
client.login(process.env.token)

bot.on("ready",() => {
  
console.log("Misspoken's MassDM Bot is online!")
  console.log(`${bot.user.id}`)
console.log(`${bot.user.tag}`)
})

client.on('message', (client, message, args) => {
   if(message.content.toLowerCase().startsWith(prefix + "massdmall")){
      args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
     
             message.guild.members.cache.forEach(member => {
               member.send(argresult).catch(e => console.error(`Couldn't DM member ${member.user.tag}`)).then(console.log(`DM'd ${member.user.tag}`));
          });
             
    }
