<?php
/**
 * sendDtmfTest.php
 *
 * Test for the BXML SendDtmf verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/sendDtmf.php";

use PHPUnit\Framework\TestCase;

class SendDtmfTest extends TestCase {
    /**
     * Validates the creation of a SendDtmf verb
     */
    public function testSendDtmf() {
        $sendDtmf = new BxmlVerbs\SendDtmf("123");
        $response = new BxmlVerbs\Response();
        $response->addVerb($sendDtmf);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><SendDtmf>123</SendDtmf></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }
}
