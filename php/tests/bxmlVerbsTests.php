<?php

require "BxmlVerbs/response.php";
require "BxmlVerbs/verbs/hangup.php";

use PHPUnit\Framework\TestCase;

class BxmlVerbsTest extends TestCase {

    public function testHangup() {
        $hangup = new BxmlVerbs\Hangup();
        $response = new BxmlVerbs\Response();
        $response->addVerb($hangup);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
