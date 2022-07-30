#### Weather - Get weather from a place

```js
const HunterAPI = require('hunter-api');
let Weather = HunterAPI.weather('<City>')
```
#

Discord.js
```js
const HunterAPI = require('hunter-api');
const { EmbedBuilder } = require('discord.js');

let Weather = HunterAPI.weather('New York')

let embed = EmbedBuilder()
    .setColor("#00000")
    .setTitle(`Weather in ${Weather.place}`)
    .addFields([
        { name: "Current Temperature", value: Weather.temperature.celcius.current },
        { name: "Humidity", value: Weather.temperature.celcius.humidity },
        { name: "Wind Speed", value: Weather.temperature.celcius.windSpeed },
        { name: "Sky", value:Weather.temperature.celcius.sky }
    ])
    .setImage(Weather.temperature.celcius.image)
    .setTimestamp()

message.channel.send({ embeds: [embed] });
```

Output:
```json
{
    "place": "New York, NY",
    "placelink": "https://maps.google.com/?q=42.939,-75.62",
    "temperature": {
        "celcius": {
            "current": "15",
            "sky": "Partly Cloudy",
            "feelslike": "15",
            "humidity": "88",
            "windspeed": "3 mph",
            "image": "http://blob.weather.microsoft.com/static/weather4/en-us/law/29.gif"
        },
        "farenheit": {
            "current": "60",
            "sky": "Partly Cloudy",
            "feelslike": "60",
            "humidity": "88",
            "windspeed": "3 mph",
            "image": "http://blob.weather.microsoft.com/static/weather4/en-us/law/29.gif"
        }
    }
}
```