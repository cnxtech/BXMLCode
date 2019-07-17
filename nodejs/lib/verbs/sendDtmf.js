/**
 * sendDtmf.js
 *
 * BXML generator for the SendDtmf verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class SendDtmf extends BaseVerb {

    constructor() {
        super();
        this.dtmf = null;
    }

    /**
     * Sets the dtmf attribute
     *
     * @param {String} dtmf The value to set dtmf to
     */
    setDtmf(dtmf) {
        this.dtmf = dtmf;
    }

    addXml(xmlDocument) {
        xmlDocument.ele("SendDtmf", {}, this.dtmf);
        return xmlDocument;
    }
}

module.exports = SendDtmf;
