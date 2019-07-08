/**
 * sendDtmf.js
 *
 * BXML generator for the SendDtmf verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var SendDtmf = function() {

    this.dtmf = null;

    /**
     * Sets the dtmf attribute
     *
     * @param {String} dtmf The value to set dtmf to
     */
    this.setDtmf = function(dtmf, callback) {
        this.dtmf = dtmf;
    }

    this.addXml = function(xmlDocument, callback) {
        xmlDocument.ele("SendDtmf", {}, this.dtmf);
        return xmlDocument;
    }
}

//Sets that SendDtmf inherits from BaseVerb
util.inherits(SendDtmf, BaseVerb);

module.exports = SendDtmf;
