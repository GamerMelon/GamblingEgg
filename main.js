import 'dotenv/config';
import { REST, Routes, Client, Events, GatewayIntentBits } from 'discord.js';



/*
-connect to discord
-set up inital commands
-respond to slash commands
-respond to messages
*/

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
      name: 'coin-flip',
      description: 'Flip a coin!',
    },
    
  ];
  
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }


  try {
    console.log('Grabbing (/) Commands');

    console.log(await rest.get(Routes.applicationCommands(process.env.APP_ID), { body: commands }));

  } catch (error) {
    console.error(error);
  }

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if(interaction.commandName === 'coin-flip'){
    await interaction.reply(Math.floor(Math.random()*2) ? 'Tails':'Heads');
  }
});

function heads(){
  
}

console.log();
client.login(process.env.DISCORD_TOKEN);