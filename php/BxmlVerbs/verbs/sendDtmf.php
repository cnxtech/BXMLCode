<?php
/**
 * sendDtmf.php
 *
 * Implementation of the BXML SendDtmf verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */
  
namespace BxmlVerbs;

use DOMDocument;
use DOMElement;

require_once "verb.php";

class SendDtmf extends Verb {

    /**
     * Constructor for SendDtmf
     *
     * @param string $digits The dtmf digits
     */
    public function __construct($digits) {
        $this->digits = $digits;
    }

    public function toXml($doc) {
        $element = $doc->createElement("SendDtmf", $this->digits);
        return $element;
    }
}
