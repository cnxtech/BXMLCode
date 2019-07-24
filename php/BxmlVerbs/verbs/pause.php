<?php
/**
 * pause.php
 *
 * Implementation of the BXML Pause verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

namespace BxmlVerbs;

require_once "verb.php";

class Pause extends Verb {

    /**
     * Sets the duration attribute for Pause
     *
     * @param string $duration The duration in seconds for the pause 
     */
    public function duration($duration) {
        $this->duration = $duration;
    }

    public function toXml($doc) {
        $element = $doc->createElement("Pause");

        if(isset($this->duration)) {
            $element->setAttribute("duration", $this->duration);
        }

        return $element;
    }
}
