var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
  // Setting the prefix for commands used in chat
  let prefix = "-";
  // input used to receive any case of capitalization, Ping - ping - pinG etc
  let input = msg.content.toUpperCase();

  // If command doesn't start with the prefix, return
  if(!msg.content.startsWith(prefix)) 
	  return;
  // If command was sent by the bot (ex !help, that shows !help in commands), prevents bot of going into a loop
  if(msg.author.bot) 
	  return;  
  
  // Simple messages returning from commands
  if (input.startsWith(prefix + "PING")) {
    msg.channel.sendMessage("pong!");
  } 
  if (input.startsWith(prefix + "JAPA")) {
    msg.channel.sendMessage("Ward?");
  }
  if (input.startsWith(prefix + "KAPPA")) {
    msg.channel.sendFile("https://i.ytimg.com/vi/8kBurd4ce0A/maxresdefault.jpg");
  }
  if (input.startsWith(prefix + "KEPPO")) {
    msg.channel.sendMessage("PRIDO");
  }
    if (input.startsWith(prefix + "VI")) {
    msg.channel.sendMessage("Lee Sin?");
  }
  if (input.startsWith(prefix + "SYPH")) {
    msg.channel.sendMessage("TROLL");
  }
  if (input.startsWith(prefix + "MYAK")) {
    msg.channel.sendMessage("GOD");
  }
  if (input.startsWith(prefix + "ERIN")) {
    msg.channel.sendMessage("Biblioteca?");
  }
  if (input.startsWith(prefix + "NICKDOG")) {
    msg.channel.sendMessage("Ta com a Dessa");
  }
  if (input.startsWith(prefix + "KRALE")) {
    msg.channel.sendMessage("Visualizado");
  }
});
/*	if (input === "-KAPPA") 
	{
		bot.sendFile(message, "http://i3.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large");
	}
*/
bot.login("MjM2ODk0MzMzMTg4NDQwMDY1.CuP5xQ.mieuJRAJl9PsmbQwVKey6LlHJqA");