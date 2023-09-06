const dotenv = require('dotenv');
const weather = require('openweather-apis')
const { Client, GatewayIntentBits } = require('discord.js');

dotenv.config();

// Setting up the openweather api
weather.setLang('en');
weather.setUnits('metric');
weather.setAPPID(process.env.weather_api);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('Weather man is active!');
});


client.on('messageCreate', msg => {
    if (msg.content.startsWith('!weather')) {
        const location = msg.content.split(' ')[1];
        if (!location) {
            msg.channel.send("Please provide a location.");
            return;
        }
        weather.setCity(location);
        
        weather.getAllWeather(function (err, data) {
            if (err) {
                msg.channel.send(`Could not get weather for ${location}`);
                return;
            }
            
            const weatherInfo = `
                Weather in ${data.name}:
                - Temperature: ${data.main.temp}°C
                - Humidity: ${data.main.humidity}%
                - Conditions: ${data.weather[0].description}
            `;

            msg.channel.send(weatherInfo);
        });
    }
});

client.login(process.env.discord_key);