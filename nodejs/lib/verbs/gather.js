/**
 * gather.js
 *
 * BXML generator for the Gather verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Gather = function() {

    this.gatherUrl = null;
    this.gatherMethod = null;
    this.username = null;
    this.password = null;
    this.tag = null;
    this.terminatingDigits = null;
    this.maxDigits = null;
    this.interDigitTimeout = null;
    this.firstDigitTimeout = null;
    this.speakSentence = null;
    this.playAudio = null;

    /**
     * Sets the gatherUrl attribute
     *
     * @param {String} gatherUrl The value to set gatherUrl to
     */
    this.setGatherUrl = function(gatherUrl, callback) {
        this.gatherUrl = gatherUrl;
    }

    /**
     * Sets the gatherMethod attribute
     *
     * @param {String} gatherMethod The value to set gatherMethod to
     */
    this.setGatherMethod = function(gatherMethod, callback) {
        this.gatherMethod = gatherMethod;
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

    /**
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    this.setTag = function(tag, callback) {
        this.tag = tag;
    }

    /**
     * Sets the terminatingDigits attribute
     *
     * @param {String} terminatingDigits The value to set terminatingDigits to
     */
    this.setTerminatingDigits = function(terminatingDigits, callback) {
        this.terminatingDigits = terminatingDigits;
    }

    /**
     * Sets the maxDigits attribute
     *
     * @param {String} maxDigits The value to set maxDigits to
     */
    this.setMaxDigits = function(maxDigits, callback) {
        this.maxDigits = maxDigits;
    }

    /**
     * Sets the interDigitTimeout attribute
     *
     * @param {int} interDigitTimeout The value to set interDigitTimeout to
     */
    this.setInterDigitTimeout = function(interDigitTimeout, callback) {
        this.interDigitTimeout = interDigitTimeout;
    }

    /**
     * Sets the firstDigitTimeout attribute
     *
     * @param {int} firstDigitTimeout The value to set firstDigitTimeout to
     */
    this.setFirstDigitTimeout = function(firstDigitTimeout, callback) {
        this.firstDigitTimeout = firstDigitTimeout;
    }

    /**
     * Sets the speakSentence attribute
     *
     * @param {SpeakSentence} speakSentence The object to set speakSentence to
     */
    this.setSpeakSentence = function(speakSentence, callback) {
        this.speakSentence = speakSentence;
    }

    /**
     * Sets the playAudio attribute
     *
     * @param {PlayAudio} playAudio The object to set playAudio to
     */
    this.setPlayAudio = function(playAudio, callback) {
        this.playAudio = playAudio;
    }

    this.addXml = function(xmlDocument, callback) {
        var attributes = {};

        if (this.gatherUrl !== null) {
            attributes["gatherUrl"] = this.gatherUrl;
        }

        if (this.gatherMethod !== null) {
            attributes["gatherMethod"] = this.gatherMethod;
        }

        if (this.username !== null) {
            attributes["username"] = this.username;
        }

        if (this.password !== null) {
            attributes["password"] = this.password;
        }

        if (this.tag !== null) {
            attributes["tag"] = this.tag;
        }

        if (this.terminatingDigits !== null) {
            attributes["terminatingDigits"] = this.terminatingDigits;
        }

        if (this.maxDigits !== null) {
            attributes["maxDigits"] = this.maxDigits;
        }

        if (this.interDigitTimeout !== null) {
            attributes["interDigitTimeout"] = this.interDigitTimeout;
        }

        if (this.firstDigitTimeout !== null) {
            attributes["firstDigitTimeout"] = this.firstDigitTimeout;
        }

        //Generating the element allows the SpeakSentence and PlayAudio
        //tags to be added easily
        var ele = xmlDocument.ele("Gather", attributes);

        if (this.speakSentence !== null) {
            this.speakSentence.addXml(ele);
        }

        if (this.playAudio !== null) {
            this.playAudio.addXml(ele);
        }

        return xmlDocument;
    }

}

//Sets that Gather inherits from BaseVerb
util.inherits(Gather, BaseVerb);

module.exports = Gather;
