
#### Blur - Blur your image
```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let Image = await hunter.blur('<Image Link>');
```
#

##### Discord.js
```js
const { EmbedBuilder } = require('discord.js');
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();

let Image = await hunter.blur( message.author.displayAvatarURL({ format: "png", dynamic: false }) );

let embed = new EmbedBuilder()
    .setColor("#00000")
    .setTitle("Blur")
    .setImage(Image)
    
message.channel.send({ embeds: [embed] });
```