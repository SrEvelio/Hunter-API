const axios = require('axios').default;
const APIEndPoint = "https://hunterapi.sytes.net";

class HunterAPI {
    constructor() {
        this.apimethods = [
            "lyrics",
            "color",
            "translate",
            "weather",
            "github",
            "mcserver",
            "npm",
            "password",
            "timestamp",
            "iso2country",
            "disinvite",
            "youtube",
            "discordapp",
            "playstore",
            "meme",
            "fumo",
            "fact",
            "randomworld",
            "joke",
            "wanted"
        ]
    }

    /**
     * @param {String} song
     */

    async lyrics(song) {
        if (!song) throw new Error("[Hunter-API] (Lyrics) No song provided");

        let data = await axios.get(`${APIEndPoint}/lyrics?song=${song}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} color
     */

    async color(color) {
        if (!color) throw new Error("[Hunter-API] (Color) No color provided");

        let data = await axios.get(`${APIEndPoint}/color?color=${color}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} lang
     * @param {String} text
     */

    async translate(lang, text) {
        if (!lang || !text) throw new Error("[Hunter-API] (Translate) No lang or text provided");

        let data = await axios.get(`${APIEndPoint}/translate?language=${lang}&text=${text}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} city
     */

    async weather(city) {
        if (!city) throw new Error("[Hunter-API] (Weather) No city provided");

        let data = await axios.get(`${APIEndPoint}/weather?p=${city}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} username
     */

    async github(username) {
        if (!username) throw new Error("[Hunter-API] (Github) No username provided");

        let data = await axios.get(`${APIEndPoint}/github?user=${username}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} ip
     */

    async mcserver(ip) {
        if (!ip) throw new Error("[Hunter-API] (MCServer) No ip provided");

        let data = await axios.get(`${APIEndPoint}/minecraft/server?ip=${ip}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} pkg
     */

    async npm(pkg) {
        if (!pkg) throw new Error("[Hunter-API] (NPM) No package provided");

        let data = await axios.get(`${APIEndPoint}/npm?package=${pkg}`).then(res => res.data);
        return data;
    }

    /**
     * @param {Number} length
     */

    async password(length) {
        if (!length) throw new Error("[Hunter-API] (Password) No length provided");
        if (!Number(length)) throw new Error("[Hunter-API] (Password) Length must be a number");

        let data = await axios.get(`${APIEndPoint}/password?len=${length}`).then(res => res.data);
        return data.password;
    }

    /**
     * @param {String} date 
     */

    async timestamp(date) {
        if (!date) throw new Error("[Hunter-API] (Timestamp) No date provided");

        let data = await axios.get(`${APIEndPoint}/timestamp?date=${date}`).then(res => res.data);
        return data.timestamp;
    }

    /**
     * @param {String} iso
     */

    async iso2country(iso) {
        if (!iso) throw new Error("[Hunter-API] (ISO2Country) No iso provided");

        let data = await axios.get(`${APIEndPoint}/iso2country?iso=${iso}`).then(res => res.data);
        return data;
    }

    /**
     * @param {url} invite_url
     */

    async disinvite(inviteurl) {
        if (!inviteurl) throw new Error("[Hunter-API] (DiscordInvite) No invite provided");

        let data = await axios.get(`${APIEndPoint}/discord/invite?url=${inviteurl}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} video
     */

    async youtube(video) {
        if (!video) throw new Error("[Hunter-API] (Youtube) No video provided");

        let data = await axios.get(`${APIEndPoint}/youtube?vid=${video}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} appid
     */

    async discordapp(appid) {
        if (!appid) throw new Error("[Hunter-API] (DiscordApp) No appid provided");

        let data = await axios.get(`${APIEndPoint}/discord/application?id=${appid}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} app
     */

    async playstore(app) {
        if (!app) throw new Error("[Hunter-API] (Playstore) No app provided");

        let data = await axios.get(`${APIEndPoint}/playstore?app=${app}`).then(res => res.data);
        return data;
    }

    async meme() {
        let data = await axios.get(`${APIEndPoint}/meme`).then(res => res.data);
        return data;
    }

    async fumo() {
        let data = await axios.get(`${APIEndPoint}/fumo`).then(res => res.data);
        return data;
    }

    async fact() {
        let data = await axios.get(`${APIEndPoint}/fact`).then(res => res.data);
        return data.fact;
    }

    async randomworld() {
        let data = await axios.get(`${APIEndPoint}/random-word`).then(res => res.data);
        return data;
    }

    async joke() {
        let data = await axios.get(`${APIEndPoint}/joke`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} color
     * @param {Number} width
     * @param {Number} height
     */

    async colorimg(color, width, height) {
        if (!color) throw new Error("[Hunter-API] (ColorImg) No color provided");
        if (!width) width = 1000;
        if (!height) height = 1000;

        let data = await axios.get(`${APIEndPoint}/colorimg?color=${color}&width=${width}&height=${height}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} image_url
     */

    async blur(image_url) {
        if (!image_url) throw new Error("[Hunter-API] (Blur) No image provided");

        let data = await axios.get(`${APIEndPoint}/blur?img=${image_url}`).then(res => res.data);
        return data.url;
    }

    /**
     * @param {String} image
     */

    async wanted(image) {
        if (!image) throw new Error("[Hunter-API] (Wanted) No image url provided");

        let data = await axios.get(`${APIEndPoint}/wanted?img=${image}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} txt
     */

    async qrcode(txt) {
        if (!txt) throw new Error("[Hunter-API] (QRcode) No text, number, link provided");

        let data = await axios.get(`${APIEndPoint}/qrcode?txt=${txt}`).then(res => res.data);
        return data;
    }

    /**
     * @param {String} image
     * @param {String} name
     * @param {String} username
     * @param {String} text
     */

    async twitter(image, name, username, text) {
        if (!image || !name || !username || !text) throw new Error("[Hunter-API] (Twitter) No image, name, username or text provided");

        let data = await axios.get(`${APIEndPoint}/twitter?img=${image}&name=${name}&username=${username}&text=${text}`).then(res => res.data);
        return data;
    }
}

module.exports = HunterAPI;