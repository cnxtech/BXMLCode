<?php
/**
 * playAudioTest.php
 *
 * Test for the BXML PlayAudio verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/playAudio.php";

use PHPUnit\Framework\TestCase;

class PlayAudioTest extends TestCase {
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
}
