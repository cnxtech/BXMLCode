<?php
/**
 * gatherTest.php
 *
 * Tests for the BXML Gather verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/gather.php";
require_once "BxmlVerbs/verbs/speakSentence.php";
require_once "BxmlVerbs/verbs/playAudio.php";

use PHPUnit\Framework\TestCase;

class GatherTest extends TestCase {
    /**
     * Validates the creation of a Gather verb with no nested tag
     */
    public function testGatherNoNestedTag() {
        $gather = new BxmlVerbs\Gather();
        $gather->gatherUrl("https://test.com");
        $gather->gatherMethod("GET");
        $gather->username("user");
        $gather->password("pass");
        $gather->tag("tag");
        $gather->terminatingDigits("123");
        $gather->maxDigits(3);
        $gather->interDigitTimeout(4);
        $gather->firstDigitTimeout(5);
        $response = new BxmlVerbs\Response();
        $response->addVerb($gather);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Gather username="user" password="pass" tag="tag" gatherUrl="https://test.com" gatherMethod="GET" terminatingDigits="123" maxDigits="3" interDigitTimeout="4" firstDigitTimeout="5"/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }

    /**
     * Validates the creation of a Gather verb with a nested speak sentence
     */
    public function testGatherNestedSpeakSentence() {
        $speakSentence = new BxmlVerbs\SpeakSentence("Test");
        $speakSentence->voice("susan");
        $speakSentence->locale("en_US");
        $speakSentence->gender("female");
        $gather = new BxmlVerbs\Gather();
        $gather->gatherUrl("https://test.com");
        $gather->gatherMethod("GET");
        $gather->username("user");
        $gather->password("pass");
        $gather->tag("tag");
        $gather->terminatingDigits("123");
        $gather->maxDigits(3);
        $gather->interDigitTimeout(4);
        $gather->firstDigitTimeout(5);
        $gather->speakSentence($speakSentence);
        $response = new BxmlVerbs\Response();
        $response->addVerb($gather);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Gather username="user" password="pass" tag="tag" gatherUrl="https://test.com" gatherMethod="GET" terminatingDigits="123" maxDigits="3" interDigitTimeout="4" firstDigitTimeout="5"><SpeakSentence locale="en_US" gender="female" voice="susan">Test</SpeakSentence></Gather></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }

    /**
     * Validates the creation of a Gather verb with a nested play audio
     */
    public function testGatherNestedPlayAudio() {
        $playAudio = new BxmlVerbs\PlayAudio("https://test.com");
        $playAudio->username("user");
        $playAudio->password("pass");
        $response = new BxmlVerbs\Response();
        $gather = new BxmlVerbs\Gather();
        $gather->gatherUrl("https://test.com");
        $gather->gatherMethod("GET");
        $gather->username("user");
        $gather->password("pass");
        $gather->tag("tag");
        $gather->terminatingDigits("123");
        $gather->maxDigits(3);
        $gather->interDigitTimeout(4);
        $gather->firstDigitTimeout(5);
        $gather->playAudio($playAudio);
        $response = new BxmlVerbs\Response();
        $response->addVerb($gather);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Gather username="user" password="pass" tag="tag" gatherUrl="https://test.com" gatherMethod="GET" terminatingDigits="123" maxDigits="3" interDigitTimeout="4" firstDigitTimeout="5"><PlayAudio username="user" password="pass">https://test.com</PlayAudio></Gather></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }
}
