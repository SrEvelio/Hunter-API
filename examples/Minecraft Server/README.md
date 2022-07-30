#### Minecraft Server - Get information from a server

```js
const HunterAPI = require('hunter-api');
let Minecraft = HunterAPI.mcserver('<Server IP>');
```
#

Discord.js
```js
const HunterAPI = require('hunter-api');
const { EmbedBuilder } = require('discord.js');

await HunterAPI.mcserver("hypixe.net").then((data) => {
    if (data.success) {
        let embed = EmbedBuilder()
            .setColor("#00000")
            .setTitle(`Minecraft Server ${data.server.name}`)
            .addFields([
                { name: "Players", value: data.players_online },
                { name: "Max Players", value: data.players_max },
                { name: "Version", value: data.version },
                { name: "MOTD", value: data.motd_clean }
            ])
            .setTimestamp()

        message.channel.send({ embeds: [embed] });
    } else {
        message.channel.send({ content: "Server not found" });
    }
})
```

Output:
```json
{
    "success": true,
    "ip": "hypixel.net",
    "players_online": "47593",
    "players_max": "200000",
    "version": "Requires MC 1.8 / 1.19",
    "motd_colorcodes": "§f                §aHypixel Network §c[1.8-1.19]§f\n       §b§lNEW: DROPPER §7§l| §6§lSUMMER EVENT§7§l+§e§lSALE",
    "motd_clean": "                Hypixel Network [1.8-1.19]\n       NEW: DROPPER | SUMMER EVENT+SALE"
}
```