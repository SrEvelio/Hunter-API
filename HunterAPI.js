const APIEndPoint = "https://hunterapi.sytes.net";
const fetch = require("node-fetch");

class HunterAPI {

    // Primeras funciones de la API
    /**
     * @param {String} song
     */

    static async lyrics(song) {
        if (!song) throw new Error("[Hunter-API] (Lyrics) No song provided");

        let data = await fetch(`${APIEndPoint}/lyrics?song=${song}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} color
     */

    static async color(color) {
        if (!color) throw new Error("[Hunter-API] (Color) No color provided");

        let data = await fetch(`${APIEndPoint}/color?color=${color}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} lang
     * @param {String} text
     */

    static async translate(lang, text) {
        if (!lang || !text) throw new Error("[Hunter-API] (Translate) No lang or text provided");

        let data = await fetch(`${APIEndPoint}/translate?language=${lang}&text=${text}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} city
     */

    static async weather(city) {
        if (!city) throw new Error("[Hunter-API] (Weather) No city provided");
        
        let data = await fetch(`${APIEndPoint}/weather?p=${city}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} username
     */

    static async github(username) {
        if (!username) throw new Error("[Hunter-API] (Github) No username provided");

        if (!username) return console.log("No username provided (Github)");
        let data = await fetch(`${APIEndPoint}/github?user=${username}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} ip
     */

    static async mcserver(ip) {
        if (!ip) throw new Error("[Hunter-API] (MCServer) No ip provided");

        let data = await fetch(`${APIEndPoint}/minecraft/server?ip=${ip}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} pkg
     */

    static async npm(pkg) {
        if (!pkg) throw new Error("[Hunter-API] (NPM) No package provided");

        let data = await fetch(`${APIEndPoint}/npm?package=${pkg}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {Number} length
     */

    static async password(length) {
        if (!length) throw new Error("[Hunter-API] (Password) No length provided");
        if (!Number(length)) throw new Error("[Hunter-API] (Password) Length must be a number");

        let data = await fetch(`${APIEndPoint}/password?len=${length}`);
        let res = await data.json();
        return res.password;
    }

    /**
     * @param {String} date 
     */

    static async timestamp(date) {
        if (!date) throw new Error("[Hunter-API] (Timestamp) No date provided");

        let data = await fetch(`${APIEndPoint}/timestamp?date=${date}`);
        let res = await data.json();
        return res.timestamp;
    }

    /**
     * @param {String} iso
     */

    static async iso2country(iso) {
        if (!iso) throw new Error("[Hunter-API] (ISO2Country) No iso provided");

        let data = await fetch(`${APIEndPoint}/iso2country?iso=${iso}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {url} inviteurl
     */

    static async discordinvite(inviteurl) {
        if (!inviteurl) throw new Error("[Hunter-API] (DiscordInvite) No invite provided");

        let data = await fetch(`${APIEndPoint}/discordinvite?url=${inviteurl}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} video
     */

    static async youtube(video) {
        if (!video) throw new Error("[Hunter-API] (Youtube) No video provided");

        let data = await fetch(`${APIEndPoint}/youtube?vid=${video}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} app
     */

    static async playstore(app) {
        if (!app) throw new Error("[Hunter-API] (Playstore) No app provided");

        if (!app) return typeofError("");
        let data = await fetch(`${APIEndPoint}/playstore?app=${app}`);
        let res = await data.json();
        return res;
    }

    // No strings 

    static async meme() {
        let data = await fetch(`${APIEndPoint}/meme`);
        let res = await data.json();
        return res;
    }

    static async fumo() {
        let data = await fetch(`${APIEndPoint}/fumo`);
        let res = await data.json();
        return res;
    }

    static async fact() {
        let data = await fetch(`${APIEndPoint}/fact`);
        let res = await data.json();
        return res.fact;
    }

    static async randomworld() {
        let data = await fetch(`${APIEndPoint}/random-word`);
        let res = await data.json();
        return res;
    }

    static async joke() {
        let data = await fetch(`${APIEndPoint}/joke`);
        let res = await data.json();
        return res;
    }

    // Images endpoint 

    /**
     * @param {String} color
     * @param {Number} width
     * @param {Number} height
     */

    static async colorimg(color, width, height) {
        if (!color) throw new Error("[Hunter-API] (ColorImg) No color provided");
        if (!width) width = 1000;
        if (!height) height = 1000;

        let data = await fetch(`${APIEndPoint}/colorimg?color=${color}&width=${width}&height=${height}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} imageurl
     */

    static async blur(imageurl) {
        if (!imageurl) throw new Error("[Hunter-API] (Blur) No image provided");

        let data = await fetch(`${APIEndPoint}/blur?img=${imageurl}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} image
     */

     static async wanted(image) {
        if (!image) throw new Error("[Hunter-API] (Wanted) No image url provided");

        let data = await fetch(`${APIEndPoint}/wanted?img=${image}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} txt
     */

     static async qrcode(txt) {
        if (!txt) throw new Error("[Hunter-API] (QRcode) No text, number, link provided");

        let data = await fetch(`${APIEndPoint}/qrcode?txt=${txt}`);
        let res = await data.json();
        return res;
    }

    /**
     * @param {String} image
     * @param {String} name
     * @param {String} username
     * @param {String} text
     */

     static async twitter(image, name, username, text) {
        if (!image || !name || !username || !text) throw new Error("[Hunter-API] (Twitter) No image, name, username or text provided");

        let data = await fetch(`${APIEndPoint}/twitter?img=${image}&name=${name}&username=${username}&text=${text}`);
        let res = await data.json();
        return res;
    }
}

module.exports = HunterAPI;