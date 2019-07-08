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
     * @return {object} The object representing the verb
     */
    this.toXmlObject = function(callback) {
        return null;
    }
}

module.exports = BaseVerb;
