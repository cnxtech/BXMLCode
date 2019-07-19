/*
 * response.js
 *
 * This class is responsible for building BXML response objets. It is created
 * by attaching various BXML verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var xmlbuilder = require("xmlbuilder");

class Response {
    constructor() {    
      this.verbs = [];
    }

    /**
     * Converts the Response object into an XML string based on its verbs
     *
     * @return {String} The XML representation of the object
     */
    toXml() {
        var xml = xmlbuilder.create("Response", {
            version: "1.0",
            encoding: "UTF-8"
        })

        for (var i = 0; i < this.verbs.length; i++) {
            xml = this.verbs[i].addXml(xml);
        }
        return xml.end();
    }

    /**
     * Adds the Verb object to the list of verbs
     *
     * @param {Verb} verb The verb object to add to the list of verbs
     */
    addVerb(verb) {
        this.verbs.push(verb);
    }
}

module.exports = Response;
