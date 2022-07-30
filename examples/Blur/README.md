
#### Blur - Blur your image
```js
const HunterAPI = require('hunter-api');
let Image = await HunterAPI.blur('<Image Link>');
```
#

##### Discord.js
```js
const HunterAPI = require('hunter-api');
const { EmbedBuilder } = require('discord.js');

let Image = await HunterAPI.blur( message.author.displayAvatarURL({ format: "png", dynamic: false }) );

let embed = new EmbedBuilder()
    .setColor("#00000")
    .setTitle("Blur")
    .setImage(Image)
    
message.channel.send({ embeds: [embed] });
```