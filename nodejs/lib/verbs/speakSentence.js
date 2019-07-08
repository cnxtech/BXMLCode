/**
 * speakSentence.js
 *
 * BXML generator for the SpeakSentence verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var SpeakSentence = function() {

    this.sentence = null;
    this.voice = null;
    this.locale = null;
    this.gender = null;

    /**
     * Sets the sentence attribute
     *
     * @param {String} sentence The value to set sentence to
     */
    this.setSentence = function(sentence, callback) {
        this.sentence = sentence;
    }

    /**
     * Sets the voice attribute
     *
     * @param {String} voice The value to set voice to
     */
    this.setVoice = function(voice, callback) {
        this.voice = voice;
    }

    /**
     * Sets the locale attribute
     *
     * @param {String} locale The value to set locale to
     */
    this.setLocale = function(locale, callback) {
        this.locale = locale;
    }

    /**
     * Sets the gender attribute
     *
     * @param {String} gender The value to set gender to
     */
    this.setGender = function(gender, callback) {
        this.gender = gender;
    }

    this.addXml = function(xmlDocument, callback) {
        var attributes = {};

        if (this.voice !== null) {
            attributes["voice"] = this.voice;
        }

        if (this.locale !== null) {
            attributes["locale"] = this.locale;
        }

        if (this.gender !== null) {
            attributes["gender"] = this.gender;
        }

        xmlDocument.ele("SpeakSentence", attributes, this.sentence);
        return xmlDocument;
    }
}

//Sets that SpeakSentence inherits from BaseVerb
util.inherits(SpeakSentence, BaseVerb);

module.exports = SpeakSentence;
