<?php
/**
 * playAudio.php
 *
 * Implementation of the BXML PlayAudio verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

namespace BxmlVerbs;

require_once "verb.php";

class PlayAudio extends Verb {

    /**
     * Constructor for PlayAudio
     *
     * @param string $url The URL of the audio to be played
     */
    public function __construct($url) {
        $this->url = $url;
    }

    /**
     * Sets the username attribute for PlayAudio
     *
     * @param string $username The username for http authentication on the audio url
     */
    public function username($username) {
        $this->username = $username;
    }

    /**
     * Sets the password attribute for PlayAudio
     *
     * @param string $password The password for http authentication on the audio url
     */
    public function password($password) {
        $this->password = $password;
    }

    public function toXml($doc) {
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
