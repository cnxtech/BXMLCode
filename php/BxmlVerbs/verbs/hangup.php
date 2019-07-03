<?php
  
namespace BxmlVerbs;

use DOMElement;

require_once "verb.php";

class Hangup extends Verb {

    public function toXml($doc) {
        $element = $doc->createElement("Hangup");
        return $element;
    }
}
