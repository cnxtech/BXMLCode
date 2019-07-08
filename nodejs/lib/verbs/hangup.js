/**
 * hangup.js
 *
 * BXML generator for the Hangup verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Hangup = function() {
    
    this.addXml = function(xmlDocument, callback) {
        xmlDocument.ele("Hangup");
        return xmlDocument;
    }
}

//Sets that Hangup inherits from BaseVerb
util.inherits(Hangup, BaseVerb);

module.exports = Hangup;
