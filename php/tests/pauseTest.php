<?php
/**
 * pauseTest.php
 *
 * Test for the BXML Pause verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/pause.php";

use PHPUnit\Framework\TestCase;

class PauseTest extends TestCase {
    /**
     * Validates the creation of a Pause verb
     */
    public function testForward() {
        $pause = new BxmlVerbs\Pause();
        $pause->duration("3");
        $response = new BxmlVerbs\Response();
        $response->addVerb($pause);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Pause duration="3"/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
