/**
 * baseVerb.js
 *
 * Represents the base abstract class for BXML verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = function() {

    /**
     * Converts the verb class into its object representation for
     * BXML conversion. To be overwritten
     * by all verb classes
     *
     * @param {XMLDocument} xmlDocument The xml document currently being built
     * @return {XMLDocument} The xml document with the verb added to it
     */
    this.addXml = function(xmlDocument, callback) {
        return xmlDocument;
    }
}

module.exports = BaseVerb;
