/**
 * forward.js
 *
 * BXML generator for the Forward verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class Forward extends BaseVerb {

    constructor() {
        super();
        this.to = null;
        this.from = null;
        this.callTimeout = null;
        this.diversionTreatment = null;
        this.diversionReason = null;
    }

    /**
     * Sets the to attribute
     *
     * @param {String} to The value to set `to` to
     */
    setTo(to) {
        this.to = to;
    }

    /**
     * Sets the from attribute
     *
     * @param {String} from The value to set `from` to
     */
    setFrom(from) {
        this.from = from;
    }

    /**
     * Sets the callTimeout attribute
     *
     * @param {int} callTimeout The value to set callTimeout to
     */
    setCallTimeout(callTimeout) {
        this.callTimeout = callTimeout;
    }

    /**
     * Sets the diversionTreatment attribute
     *
     * @param {String} diversionTreatment The value to set diversionTreatment to
     */
    setDiversionTreatment(diversionTreatment) {
        this.diversionTreatment = diversionTreatment;
    }  

    /**
     * Sets the diversionReason attribute
     *
     * @param {String} diversionReason The value to set diversionReason to
     */
    setDiversionReason(diversionReason) {
        this.diversionReason = diversionReason;
    }  

    addXml(xmlDocument) {
        var attributes = {};

        if (this.to !== null) {
            attributes["to"] = this.to;
        }

        if (this.from !== null) {
            attributes["from"] = this.from;
        }

        if (this.callTimeout !== null) {
            attributes["callTimeout"] = this.callTimeout;
        }

        if (this.diversionTreatment !== null) {
            attributes["diversionTreatment"] = this.diversionTreatment;
        }

        if (this.diversionReason !== null) {
            attributes["diversionReason"] = this.diversionReason;
        }

        xmlDocument.ele("Forward", attributes);
        return xmlDocument;
    }
}

module.exports = Forward;
