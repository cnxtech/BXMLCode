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

    public function toXml() {
        $xml = "<SpeakSentence";
        if(isset($this->voice)) {
            $xml .= (' voice="' . $this->voice . '"');
        }
        if(isset($this->locale)) {
            $xml .= (' locale="' . $this->locale . '"');
        }
        if(isset($this->gender)) {
            $xml .= (' gender="' . $this->gender . '"');
        }

        $xml .= (">" . $this->sentence . "</SpeakSentence>");
        return $xml;
    }
}
