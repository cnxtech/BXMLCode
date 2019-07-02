<?php

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/hangup.php";

use PHPUnit\Framework\TestCase;

class HangupTest extends TestCase {
    public function testHangup() {
        $hangup = new BxmlVerbs\Hangup();
        $response = new BxmlVerbs\Response();
        $response->addVerb($hangup);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
