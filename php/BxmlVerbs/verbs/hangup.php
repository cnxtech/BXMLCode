<?php
  
namespace BxmlVerbs;

use DOMElement;

class Hangup {

    public function __construct() {
    }

    public function toXml($doc) {
        $element = $doc->createElement("Hangup");
        return $element;
    }
}
