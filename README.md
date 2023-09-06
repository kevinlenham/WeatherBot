Discord Weather Bot
Overview

The Discord Weather Bot is a simple bot built for Discord servers. It utilizes the OpenWeatherMap API to provide real-time weather updates. This bot allows users in the Discord server to input a command with a location to receive current weather conditions for that location.
Features

    Real-time weather updates.
    Provides weather information such as temperature, humidity, and conditions.
    Uses OpenWeatherMap API for accurate weather data.

Dependencies

    dotenv
    openweather-apis
    discord.js

Setup

    Clone this repository or download the source code.
    Run npm install to install the necessary packages.
    Add your OpenWeatherMap API key and Discord bot token in the .env file.
    Run the bot using node <filename>.js.

Usage

In any Discord server where the bot is active, use the following command to fetch the weather information:

css

!weather [Location]
