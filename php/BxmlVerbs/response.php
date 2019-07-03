<?php

namespace BxmlVerbs;

use DOMDocument;
use DOMElement;

class Response {

    public function __construct() {
        $this->verbs = array();
    }
    
    public function addVerb($verb) {
        array_push($this->verbs, $verb);
    }

    public function toXml() {
        /*$xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= "<Response>";

        foreach ($this->verbs as $verb) {
            $xml .= $verb->toXml();
        }

        $xml .= "</Response>";

        return $xml;*/
        $doc = new DOMDocument('1.0', 'UTF-8');
        $responseElement = $doc->createElement("Response");

        foreach ($this->verbs as $verb) {
            $responseElement->appendChild($verb->toXml($doc));
        }

        $doc->appendChild($responseElement);
        return str_replace("\n", '', $doc->saveXML());
    }
}
