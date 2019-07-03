<?php
  
namespace BxmlVerbs;

use DOMDocument;
use DOMElement;

class PlayAudio {

    public function __construct($url) {
        $this->url = $url;
    }

    public function username($username) {
        $this->username = $username;
    }

    public function password($password) {
        $this->password = $password;
    }

    public function toXml($doc) {
        /*
        $xml = "<PlayAudio";
        if(isset($this->username)) {
            $xml .= (' username="' . $this->username . '"');
        }
        if(isset($this->password)) {
            $xml .= (' password="' . $this->password . '"');
        }

        $xml .= (">" . $this->url . "</PlayAudio>");
        return $xml;*/
        $element = $doc->createElement("PlayAudio", $this->url);

        if(isset($this->username)) {
            $element->setAttribute("username", $this->username);
        }

        if(isset($this->password)) {
            $element->setAttribute("password", $this->password);
        }

        return $element;
    }
}
