<?php
  
namespace BxmlVerbs;

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

    public function toXml() {
        $xml = "<PlayAudio";
        if(isset($this->username)) {
            $xml .= (' username="' . $this->username . '"');
        }
        if(isset($this->password)) {
            $xml .= (' password="' . $this->password . '"');
        }

        $xml .= (">" . $this->url . "</PlayAudio>");
        return $xml;
    }
}
