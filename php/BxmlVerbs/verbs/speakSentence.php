<?php
  
namespace BxmlVerbs;

class SpeakSentence {

    public function __construct($sentence) {
        $this->sentence = $sentence;
    }

    public function voice($voice) {
        $this->voice = $voice;
    }

    public function locale($locale) {
        $this->locale = $locale;
    }

    public function gender($gender) {
        $this->gender = $gender;
    }

    public function toXml($doc) {
        $element = $doc->createElement("SpeakSentence", $this->sentence);

        if(isset($this->locale)) {
            $element->setAttribute("locale", $this->locale);
        }

        if(isset($this->gender)) {
            $element->setAttribute("gender", $this->gender);
        }

        if(isset($this->voice)) {
            $element->setAttribute("voice", $this->voice);
        }

        return $element;
    }
}
