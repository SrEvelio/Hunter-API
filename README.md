## Hunter-API

With this package you can easily interact with the [HunterAPI](https://hunterapi.sytes.net/)

- HunterAPI Web Page: [Click here](https://hunterapi.sytes.net/)
- HunterAPI Discord Server: [Click here](https://discord.com/invite/Fb8Yuyhezn)


### Installation

```bash
npm install hunter-api
```
#

#### Some Examples:

##### Blur - Blur your image
```js
const HunterAPI = require('hunter-api');
let Image = await HunterAPI.blur('<Image Link>');
```
#

#### Lyrics - Get the lyrics of a song
```js
const HunterAPI = require('hunter-api');
let Lyrics = await HunterAPI.lyrics('<Song Name>');
```
#

#### Translate - Translate a text
```js
const HunterAPI = require('hunter-api');
let text = await HunterAPI.translate('<lang>', '<Text>');
```
#

#### Meme - Get a random meme
```js
const HunterAPI = require('hunter-api');
let Meme = await HunterAPI.meme();
```
#

#### Weather - Get weather from a place

```js
const HunterAPI = require('hunter-api');
let Weather = HunterAPI.weather('<City>')
```
#

#### For more examples and discord.js integration, check the [GitHub](https://https://github.com/SrEvelio/Hunter-API/blob/master/examples/README.md)
