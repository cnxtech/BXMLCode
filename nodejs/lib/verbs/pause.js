/**
 * pause.js
 *
 * BXML generator for the Pause verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Pause = function() {

    this.duration = null;

    /**
     * Sets the duration attribute
     *
     * @param {int} duration The value to set duration to
     */
    this.setDuration = function(duration, callback) {
        this.duration = duration;
    }

    this.addXml = function(xmlDocument, callback) {
        var attributes = {};

        if (this.duration !== null) {
            attributes["duration"] = this.duration;
        }

        xmlDocument.ele("Pause", attributes);
        return xmlDocument;
    }

}

//Sets that Pause inherits from BaseVerb
util.inherits(Pause, BaseVerb);

module.exports = Pause;
