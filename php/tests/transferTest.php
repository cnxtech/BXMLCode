<?php
/**
 * transferTest.php
 *
 * Test for the BXML Transfer verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/transfer.php";
require_once "BxmlVerbs/verbs/phoneNumber.php";

use PHPUnit\Framework\TestCase;

class TransferTest extends TestCase {
    /**
     * Validates the creation of a Transfer verb
     */
    public function testTransfer() {
        $number1 = new BxmlVerbs\PhoneNumber("+17777777777");
        $number1->transferAnswerUrl("https://test.com");
        $number1->transferAnswerMethod("GET");
        $number1->username("user");
        $number1->password("pass");
        $number1->tag("tag");
        $number2 = new BxmlVerbs\PhoneNumber("+17777777779");
        $number2->transferAnswerUrl("https://test2.com");
        $number2->transferAnswerMethod("GET");
        $number2->username("user2");
        $number2->password("pass2");
        $number2->tag("tag2");
        $transfer = new BxmlVerbs\Transfer();
        $transfer->transferCallerId("+18999999999");
        $transfer->transferCompleteUrl("https://test.com");
        $transfer->transferCompleteMethod("GET");
        $transfer->username("user");
        $transfer->password("pass");
        $transfer->tag("tag");
        $transfer->callTimeout(3);
        $transfer->diversionTreatment("none");
        $transfer->diversionReason("away");
        $transfer->phoneNumbers(array($number1, $number2));
        $response = new BxmlVerbs\Response();
        $response->addVerb($transfer);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Transfer username="user" password="pass" tag="tag" transferCompleteUrl="https://test.com" transferCompleteMethod="GET" transferCallerId="+18999999999" callTimeout="3" diversionTreatment="none" diversionReason="away"><PhoneNumber username="user" password="pass" tag="tag" transferAnswerUrl="https://test.com" transferAnswerMethod="GET">+17777777777</PhoneNumber><PhoneNumber username="user2" password="pass2" tag="tag2" transferAnswerUrl="https://test2.com" transferAnswerMethod="GET">+17777777779</PhoneNumber></Transfer></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
        //Validate against schema
        $doc = new DOMDocument();
        $doc->loadXML($responseXml);
        $this->assertTrue($doc->schemaValidate("schema.xsd"));
    }
}
