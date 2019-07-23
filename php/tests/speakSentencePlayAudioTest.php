<?php
/**
 * speakSentencePlayAudioTest.php
 *
 * Test for the BXML SpeakSentence and Play Audio verbs
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/speakSentence.php";
require_once "BxmlVerbs/verbs/playAudio.php";

use PHPUnit\Framework\TestCase;

class SpeakSentencePlayAudioTests extends TestCase {
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
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }

    /**
     * Validates the creation of a PlayAudio verb
     */
    public function testPlayAudio() {
        $playAudio = new BxmlVerbs\PlayAudio("https://test.com");
        $playAudio->username("user");
        $playAudio->password("pass");
        $response = new BxmlVerbs\Response();
        $response->addVerb($playAudio);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><PlayAudio username="user" password="pass">https://test.com</PlayAudio></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }

    /**
     * Validates the creation of a response with both PlayAudio and SpeakSentence
     */
    public function testPlayAudioSpeakSentence() {
        $playAudio = new BxmlVerbs\PlayAudio("https://test.com");
        $playAudio->username("user");
        $playAudio->password("pass");

        $speakSentence = new BxmlVerbs\SpeakSentence("Test");
        $speakSentence->voice("susan");
        $speakSentence->locale("en_US");
        $speakSentence->gender("female");

        $response = new BxmlVerbs\Response();
        $response->addVerb($playAudio);
        $response->addVerb($speakSentence);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><PlayAudio username="user" password="pass">https://test.com</PlayAudio><SpeakSentence locale="en_US" gender="female" voice="susan">Test</SpeakSentence></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }
}
