<?php

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/speakSentence.php";

use PHPUnit\Framework\TestCase;

class SpeakSentenceTest extends TestCase {
    public function testHangup() {
        $speakSentence = new BxmlVerbs\SpeakSentence("Test");
        $speakSentence->voice("susan");
        $speakSentence->locale("en_US");
        $speakSentence->gender("female");
        $response = new BxmlVerbs\Response();
        $response->addVerb($speakSentence);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><SpeakSentence voice="susan" locale="en_US" gender="female">Test</SpeakSentence></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
