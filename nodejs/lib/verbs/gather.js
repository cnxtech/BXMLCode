/**
 * gather.js
 *
 * BXML generator for the Gather verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class Gather extends BaseVerb {

    constructor() {
        super();
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
        this.repeatCount = null;
    }

    /**
     * Sets the gatherUrl attribute
     *
     * @param {String} gatherUrl The value to set gatherUrl to
     */
    setGatherUrl(gatherUrl) {
        this.gatherUrl = gatherUrl;
    }

    /**
     * Sets the gatherMethod attribute
     *
     * @param {String} gatherMethod The value to set gatherMethod to
     */
    setGatherMethod(gatherMethod) {
        this.gatherMethod = gatherMethod;
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

    /**
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    setTag(tag) {
        this.tag = tag;
    }

    /**
     * Sets the terminatingDigits attribute
     *
     * @param {String} terminatingDigits The value to set terminatingDigits to
     */
    setTerminatingDigits(terminatingDigits) {
        this.terminatingDigits = terminatingDigits;
    }

    /**
     * Sets the maxDigits attribute
     *
     * @param {String} maxDigits The value to set maxDigits to
     */
    setMaxDigits(maxDigits) {
        this.maxDigits = maxDigits;
    }

    /**
     * Sets the interDigitTimeout attribute
     *
     * @param {int} interDigitTimeout The value to set interDigitTimeout to
     */
    setInterDigitTimeout(interDigitTimeout) {
        this.interDigitTimeout = interDigitTimeout;
    }

    /**
     * Sets the firstDigitTimeout attribute
     *
     * @param {int} firstDigitTimeout The value to set firstDigitTimeout to
     */
    setFirstDigitTimeout(firstDigitTimeout) {
        this.firstDigitTimeout = firstDigitTimeout;
    }

    /**
     * Sets the speakSentence attribute
     *
     * @param {SpeakSentence} speakSentence The object to set speakSentence to
     */
    setSpeakSentence(speakSentence) {
        this.speakSentence = speakSentence;
    }

    /**
     * Sets the playAudio attribute
     *
     * @param {PlayAudio} playAudio The object to set playAudio to
     */
    setPlayAudio(playAudio) {
        this.playAudio = playAudio;
    }

    /**
     * Sets the repeatCount attribute
     *
     * @param {int} repeatCount The value to set repeatCount to
     */
    setRepeatCount(repeatCount) {
        this.repeatCount = repeatCount;
    }

    addXml(xmlDocument) {
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

        if (this.repeatCount !== null) {
            attributes["repeatCount"] = this.repeatCount;
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

module.exports = Gather;
