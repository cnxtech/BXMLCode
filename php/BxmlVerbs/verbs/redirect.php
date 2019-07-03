<?php
/**
 * redirect.php
 *
 * Implementation of the BXML Redirect verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

namespace BxmlVerbs;

require_once "verb.php";

class Redirect extends Verb {

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

    /**
     * Sets the redirectUrl attribute for PlayAudio
     *
     * @param string $redirectUrl The url to receive the redirect callback 
     */
    public function redirectUrl($redirectUrl) {
        $this->redirectUrl = $redirectUrl;
    }

    /**
     * Sets the redirectMethod attribute for PlayAudio
     *
     * @param string $redirectMethod The http method to send the redirect callback 
     */
    public function redirectMethod($redirectMethod) {
        $this->redirectMethod = $redirectMethod;
    }

    /**
     * Sets the tag attribute for PlayAudio
     *
     * @param string $tag A custom string to be included in callbacks 
     */
    public function tag($tag) {
        $this->tag = $tag;
    }

    public function toXml($doc) {
        $element = $doc->createElement("Redirect");

        if(isset($this->username)) {
            $element->setAttribute("username", $this->username);
        }

        if(isset($this->password)) {
            $element->setAttribute("password", $this->password);
        }

        if(isset($this->tag)) {
            $element->setAttribute("tag", $this->tag);
        }

        if(isset($this->redirectUrl)) {
            $element->setAttribute("redirectUrl", $this->redirectUrl);
        }

        if(isset($this->redirectMethod)) {
            $element->setAttribute("redirectMethod", $this->redirectMethod);
        }

        return $element;
    }
}
