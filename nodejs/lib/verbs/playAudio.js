/**
 * playAudio.js
 *
 * BXML generator for the PlayAudio verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class PlayAudio extends BaseVerb {

    constructor() {
        super();
        this.url = null;
        this.username = null;
        this.password = null;
    }

    /**
     * Sets the URL attribute
     *
     * @param {String} url The value to set url to
     */
    setUrl(url) {
        this.url = url;
    }

    /**
     * Sets the username attribute
     *
     * @param {String} username The value to set username to
     */
    setUsername(username) {
        this.username = username;
    }

    /**
     * Sets the password attribute
     *
     * @param {String} password The value to set password to
     */
    setPassword(password) {
        this.password = password;
    }

    addXml(xmlDocument) {
        var attributes = {};
        
        if (this.username !== null) {
            attributes["username"] = this.username;
        }

        if (this.password !== null) {
            attributes["password"] = this.password;
        }

        xmlDocument.ele("PlayAudio", attributes, this.url);
        return xmlDocument;
    }
}

module.exports = PlayAudio;
