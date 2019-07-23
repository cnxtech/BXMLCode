/**
 * pause.js
 *
 * BXML generator for the Pause verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class Pause extends BaseVerb {

    constructor() {
        super();
        this.duration = null;
    }

    /**
     * Sets the duration attribute
     *
     * @param {int} duration The value to set duration to
     */
    setDuration(duration) {
        this.duration = duration;
    }

    addXml(xmlDocument) {
        var attributes = {};

        if (this.duration !== null) {
            attributes["duration"] = this.duration;
        }

        xmlDocument.ele("Pause", attributes);
        return xmlDocument;
    }

}

module.exports = Pause;
