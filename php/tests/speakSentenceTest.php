<?php
/**
 * speakSentenceTest.php
 *
 * Test for the BXML SpeakSentence verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/speakSentence.php";

use PHPUnit\Framework\TestCase;

class SpeakSentenceTest extends TestCase {
    /**
     * Validates the creation of a SpeakSentence verb
     */
    public function testSpeakSentence() {
        $speakSentence = new BxmlVerbs\SpeakSentence("Test");
        $speakSentence->voice("susan");
        $speakSentence->locale("en_US");
        $speakSentence->gender("female");
        $response = new BxmlVerbs\Response();
        $response->addVerb($speakSentence);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><SpeakSentence locale="en_US" gender="female" voice="susan">Test</SpeakSentence></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
