/**
 * speakSentence.js
 *
 * BXML generator for the SpeakSentence verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class SpeakSentence extends BaseVerb {

    constructor() {
        super();
        this.sentence = null;
        this.voice = null;
        this.locale = null;
        this.gender = null;
    }

    /**
     * Sets the sentence attribute
     *
     * @param {String} sentence The value to set sentence to
     */
    setSentence(sentence) {
        this.sentence = sentence;
    }

    /**
     * Sets the voice attribute
     *
     * @param {String} voice The value to set voice to
     */
    setVoice(voice) {
        this.voice = voice;
    }

    /**
     * Sets the locale attribute
     *
     * @param {String} locale The value to set locale to
     */
    setLocale(locale) {
        this.locale = locale;
    }

    /**
     * Sets the gender attribute
     *
     * @param {String} gender The value to set gender to
     */
    setGender(gender) {
        this.gender = gender;
    }

    addXml(xmlDocument) {
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

module.exports = SpeakSentence;
