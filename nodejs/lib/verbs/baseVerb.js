/**
 * baseVerb.js
 *
 * Represents the base abstract class for BXML verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

class BaseVerb {

    /**
     * Converts the verb class into its object representation for
     * BXML conversion. To be overwritten
     * by all verb classes
     *
     * @param {XMLDocument} xmlDocument The xml document currently being built
     * @return {XMLDocument} The xml document with the verb added to it
     */
    addXml(xmlDocument) {
        return xmlDocument;
    }
}

module.exports = BaseVerb;
