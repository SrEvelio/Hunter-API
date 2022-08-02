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
const hunter = new HunterAPI();
let Image = await hunter.blur('<Image Link>');
```
#

#### Lyrics - Get the lyrics of a song
```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let Lyrics = await hunter.lyrics('<Song Name>');
```
#

#### Translate - Translate a text
```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let text = await hunter.translate('<lang>', '<Text>');
```
#

#### Meme - Get a random meme
```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let Meme = await hunter.meme();
```
#

#### Weather - Get weather from a place

```js
const HunterAPI = require('hunter-api');
const hunter = new HunterAPI();
let Weather = hunter.weather('<City>')
```
#

#### For more examples and discord.js integration, check the [GitHub](https://https://github.com/SrEvelio/Hunter-API/blob/master/examples/README.md)
