import fetch from "node-fetch";
export const APIEndPoint = "https://hunterapi.sytes.net";

class HunterAPI {

    /**
     * @param {String} song
     */

    static async lyrics(song) {
        if (!song) throw new Error("[Hunter-API] (Lyrics) No song provided");

        let data = await fetch(`${APIEndPoint}/lyrics?song=${song}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} color
     */

    static async color(color) {
        if (!color) throw new Error("[Hunter-API] (Color) No color provided");

        let data = await fetch(`${APIEndPoint}/color?color=${color}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} lang
     * @param {String} text
     */

    static async translate(lang, text) {
        if (!lang || !text) throw new Error("[Hunter-API] (Translate) No lang or text provided");

        let data = await fetch(`${APIEndPoint}/translate?language=${lang}&text=${text}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} city
     */

    static async weather(city) {
        if (!city) throw new Error("[Hunter-API] (Weather) No city provided");

        let data = await fetch(`${APIEndPoint}/weather?p=${city}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} username
     */

    static async github(username) {
        if (!username) throw new Error("[Hunter-API] (Github) No username provided");

        let data = await fetch(`${APIEndPoint}/github?user=${username}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} ip
     */

    static async mcserver(ip) {
        if (!ip) throw new Error("[Hunter-API] (MCServer) No ip provided");

        let data = await fetch(`${APIEndPoint}/minecraft/server?ip=${ip}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} pkg
     */

    static async npm(pkg) {
        if (!pkg) throw new Error("[Hunter-API] (NPM) No package provided");

        let data = await fetch(`${APIEndPoint}/npm?package=${pkg}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {Number} length
     */

    static async password(length) {
        if (!length) throw new Error("[Hunter-API] (Password) No length provided");
        if (!Number(length)) throw new Error("[Hunter-API] (Password) Length must be a number");

        let data = await fetch(`${APIEndPoint}/password?len=${length}`).then((res) => res.json());
        return data.password;
    }

    /**
     * @param {String} date 
     */

    static async timestamp(date) {
        if (!date) throw new Error("[Hunter-API] (Timestamp) No date provided");

        let data = await fetch(`${APIEndPoint}/timestamp?date=${date}`).then((res) => res.json());
        return data.timestamp;
    }

    /**
     * @param {String} iso
     */

    static async iso2country(iso) {
        if (!iso) throw new Error("[Hunter-API] (ISO2Country) No iso provided");

        let data = await fetch(`${APIEndPoint}/iso2country?iso=${iso}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {url} invite_url
     */

    static async disinvite(inviteurl) {
        if (!inviteurl) throw new Error("[Hunter-API] (DiscordInvite) No invite provided");

        let data = await fetch(`${APIEndPoint}/discord/invite?url=${inviteurl}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} video
     */

    static async youtube(video) {
        if (!video) throw new Error("[Hunter-API] (Youtube) No video provided");

        let data = await fetch(`${APIEndPoint}/youtube?vid=${video}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} appid
     */

    static async discordapp(appid) {
        if (!appid) throw new Error("[Hunter-API] (DiscordApp) No appid provided");

        let data = await fetch(`${APIEndPoint}/discord/application?id=${appid}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} app
     */

    static async playstore(app) {
        if (!app) throw new Error("[Hunter-API] (Playstore) No app provided");

        let data = await fetch(`${APIEndPoint}/playstore?app=${app}`).then((res) => res.json());
        return data;
    }

    static async meme() {
        let data = await fetch(`${APIEndPoint}/meme`).then((res) => res.json());
        return data;
    }

    static async fumo() {
        let data = await fetch(`${APIEndPoint}/fumo`).then((res) => res.json());
        return data;
    }

    static async fact() {
        let data = await fetch(`${APIEndPoint}/fact`).then((res) => res.json());
        return data.fact;
    }

    static async randomworld() {
        let data = await fetch(`${APIEndPoint}/random-word`).then((res) => res.json());
        return data;
    }

    static async joke() {
        let data = await fetch(`${APIEndPoint}/joke`).then((res) => res.json());
        return data;
    } 

    /**
     * @param {String} color
     * @param {Number} width
     * @param {Number} height
     */

    static async colorimg(color, width, height) {
        if (!color) throw new Error("[Hunter-API] (ColorImg) No color provided");
        if (!width) width = 1000;
        if (!height) height = 1000;

        let data = await fetch(`${APIEndPoint}/colorimg?color=${color}&width=${width}&height=${height}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} image_url
     */

    static async blur(image_url) {
        if (!image_url) throw new Error("[Hunter-API] (Blur) No image provided");

        let data = await fetch(`${APIEndPoint}/blur?img=${image_url}`);
        console.log(data);
        return data.url;
    }

    /**
     * @param {String} image
     */

    static async wanted(image) {
        if (!image) throw new Error("[Hunter-API] (Wanted) No image url provided");

        let data = await fetch(`${APIEndPoint}/wanted?img=${image}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} txt
     */

    static async qrcode(txt) {
        if (!txt) throw new Error("[Hunter-API] (QRcode) No text, number, link provided");

        let data = await fetch(`${APIEndPoint}/qrcode?txt=${txt}`).then((res) => res.json());
        return data;
    }

    /**
     * @param {String} image
     * @param {String} name
     * @param {String} username
     * @param {String} text
     */

    static async twitter(image, name, username, text) {
        if (!image || !name || !username || !text) throw new Error("[Hunter-API] (Twitter) No image, name, username or text provided");

        let data = await fetch(`${APIEndPoint}/twitter?img=${image}&name=${name}&username=${username}&text=${text}`).then((res) => res.json());
        return data;
    }
}

export default HunterAPI;