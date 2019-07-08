/**
 * playAudio.js
 *
 * BXML generator for the PlayAudio verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var PlayAudio = function() {

    this.url = null;
    this.username = null;
    this.password = null;

    /**
     * Sets the URL attribute
     *
     * @param {String} url The value to set url to
     */
    this.setUrl = function(url, callback) {
        this.url = url;
    }

    /**
     * Sets the username attribute
     *
     * @param {String} username The value to set username to
     */
    this.setUsername = function(username, callback) {
        this.username = username;
    }

    /**
     * Sets the password attribute
     *
     * @param {String} password The value to set password to
     */
    this.setPassword = function(password, callback) {
        this.password = password;
    }

    this.addXml = function(xmlDocument, callback) {
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

//Sets that PlayAudio inherits from BaseVerb
util.inherits(PlayAudio, BaseVerb);

module.exports = PlayAudio;
