/**
 * hangup.js
 *
 * BXML generator for the Hangup verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class Hangup extends BaseVerb {
    
    addXml(xmlDocument) {
        xmlDocument.ele("Hangup");
        return xmlDocument;
    }
}

module.exports = Hangup;
