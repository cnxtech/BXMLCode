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
    
    this.toXmlObject = function(callback) {
        var obj = {
            Hangup: ""
        }

        return obj;
    }
}

//Sets that Hangup inherits from BaseVerb
util.inherits(Hangup, BaseVerb);

module.exports = Hangup;
