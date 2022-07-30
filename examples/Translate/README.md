#### Translate - Translate a text

```js
const HunterAPI = require('hunter-api');
let Translate = HunterAPI.translate('<Language>', '<Text>');
```
#

Discord.js
```js
const HunterAPI = require('hunter-api');
const { EmbedBuilder } = require('discord.js');

await HunterAPI.translate("es", "Hello World").then((data) => {
    let embed = EmbedBuilder()
        .setColor("#00000")
        .setTitle(`Translation`)
        .addFields([
            { name: "Origina Text", value: data.message }
            { name: "Translation", value: data.translation }
        ])
        .setTimestamp()

    message.channel.send({ embeds: [embed] });
}).catch((e) => {
    message.channel.send({ content: "Translation not found" });
})
```

Output:
```json
{
    "message": "Hello",
    "translation": "Hola"
}
```