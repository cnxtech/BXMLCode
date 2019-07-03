<?php
/**
 * verb.php
 *
 * Abstract class representing BXML verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

namespace BxmlVerbs;

abstract class Verb {

    /**
     * Converts the verb class into a DOMElement to build the complete BXML
     *
     * @param DOMDocument $doc The document that is building the BXML
     * @return DOMElement The element representing the verb
     */
    abstract protected function toXml($doc);

}
