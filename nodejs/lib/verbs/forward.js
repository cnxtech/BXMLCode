/**
 * forward.js
 *
 * BXML generator for the Forward verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Forward = function() {

    this.to = null;
    this.from = null;
    this.callTimeout = null;
    this.diversionTreatment = null;
    this.diversionReason = null;

    /**
     * Sets the to attribute
     *
     * @param {String} to The value to set `to` to
     */
    this.setTo = function(to, callback) {
        this.to = to;
    }

    /**
     * Sets the from attribute
     *
     * @param {String} from The value to set `from` to
     */
    this.setFrom = function(from, callback) {
        this.from = from;
    }

    /**
     * Sets the callTimeout attribute
     *
     * @param {int} callTimeout The value to set callTimeout to
     */
    this.setCallTimeout = function(callTimeout, callback) {
        this.callTimeout = callTimeout;
    }

    /**
     * Sets the diversionTreatment attribute
     *
     * @param {String} diversionTreatment The value to set diversionTreatment to
     */
    this.setDiversionTreatment = function(diversionTreatment, callback) {
        this.diversionTreatment = diversionTreatment;
    }  

    /**
     * Sets the diversionReason attribute
     *
     * @param {String} diversionReason The value to set diversionReason to
     */
    this.setDiversionReason = function(diversionReason, callback) {
        this.diversionReason = diversionReason;
    }  

    this.addXml = function(xmlDocument, callback) {
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

//Sets that Forward inherits from BaseVerb
util.inherits(Forward, BaseVerb);

module.exports = Forward;
