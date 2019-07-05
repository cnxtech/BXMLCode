/*
 * response.js
 *
 * This class is responsible for building BXML response objets. It is created
 * by attaching various BXML verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var Response = function() {
    
    /**
     * Converts the Response object into an XML string
     *
     * @return {String} The XML representation of the object
     */
    this.toXml = function(callback) {
        return "Response";
    }
}

module.exports = Response;
