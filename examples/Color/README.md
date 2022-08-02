
#### Color - Get data from a color
```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let data = await hunter.color('Hex color without #');
```
#

##### Discord.js
```js
const { EmbedBuilder } = require('discord.js');
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();

let data = await hunter.color("FF00FF")

let embed = new EmbedBuilder()
    .setColor(data.hex)
    .setTitle("Color")
    .setImage(data.link)
    .addFields([
        { name: "Color Name": value: `${data.name}`, inline: true},
        { name: "Hex Code", value: `${data.hex}`, inline: true },
        { name: "RGB", value: `${data.rgb}`, inline :true}
    ])
    
message.channel.send({ embeds: [embed] });
```
#

#### Output
```json
{
    "hex": "#FF00FF",
    "rgb": "rgba(255,0,255,1)",
    "name": "Magenta",
    "link": "https://hunterapi.sytes.net/colorimg?hex=FF00FF"
}
```