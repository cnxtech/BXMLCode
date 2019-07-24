<?php
/**
 * response.php
 *
 * Class that represents the BXML response. Is built by adding verbs to it
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

namespace BxmlVerbs;

use DOMDocument;

class Response {

    /**
     * Creates the Response class with an emty list of verbs
     */
    public function __construct() {
        $this->verbs = array();
    }
    
    /**
     * Adds the verb to the verbs
     *
     * @param Verb $verb The verb to add to the list
     */
    public function addVerb($verb) {
        array_push($this->verbs, $verb);
    }

    /**
     * Converts the Response class into its BXML representation
     *
     * @return string The xml representation of the class
     */
    public function toXml() {
        $doc = new DOMDocument('1.0', 'UTF-8');
        $responseElement = $doc->createElement("Response");

        foreach ($this->verbs as $verb) {
            $responseElement->appendChild($verb->toXml($doc));
        }

        $doc->appendChild($responseElement);
        return str_replace("\n", '', $doc->saveXML());
    }
}
