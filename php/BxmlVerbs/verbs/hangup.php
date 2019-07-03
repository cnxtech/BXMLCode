<?php
/**
 * hangup.php
 *
 * Implementation of the BXML Hangup verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */
  
namespace BxmlVerbs;

use DOMElement;

require_once "verb.php";

class Hangup extends Verb {

    public function toXml($doc) {
        $element = $doc->createElement("Hangup");
        return $element;
    }
}
