<?php

namespace BxmlVerbs;

class Response {

    public function __construct() {
        $this->verbs = array();
    }
    
    public function addVerb($verb) {
        array_push($this->verbs, $verb);
    }

    public function toXml() {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= "<Response>";

        foreach ($this->verbs as $verb) {
            $xml .= $verb->toXml();
        }

        $xml .= "</Response>";

        return $xml;
    }
}
