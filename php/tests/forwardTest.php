<?php
/**
 * forwardTest.php
 *
 * Test for the BXML Forward verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/forward.php";

use PHPUnit\Framework\TestCase;

class ForwardTest extends TestCase {
    /**
     * Validates the creation of a Forward verb
     */
    public function testForward() {
        $forward = new BxmlVerbs\Forward();
        $forward->to("+18888888888");
        $forward->from("+18889999999");
        $forward->callTimeout(3);
        $forward->diversionTreatment("none");
        $forward->diversionReason("away");
        $response = new BxmlVerbs\Response();
        $response->addVerb($forward);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Forward to="+18888888888" from="+18889999999" callTimeout="3" diversionTreatment="none" diversionReason="away"/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }
}
