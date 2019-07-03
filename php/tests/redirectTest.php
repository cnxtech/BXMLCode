<?php
/**
 * redirectTest.php
 *
 * Test for the BXML Redirect verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

require_once "BxmlVerbs/response.php";
require_once "BxmlVerbs/verbs/redirect.php";

use PHPUnit\Framework\TestCase;

class RedirectTest extends TestCase {
    /**
     * Validates the creation of a Redirect verb
     */
    public function testRedirect() {
        $redirect = new BxmlVerbs\Redirect();
        $redirect->username("user");
        $redirect->password("pass");
        $redirect->redirectUrl("https://test.com");
        $redirect->redirectMethod("GET");
        $redirect->tag("tag");
        $response = new BxmlVerbs\Response();
        $response->addVerb($redirect);
        $expectedXml = '<?xml version="1.0" encoding="UTF-8"?><Response><Redirect username="user" password="pass" tag="tag" redirectUrl="https://test.com" redirectMethod="GET"/></Response>';
        $responseXml = $response->toXml();
        $this->assertEquals($expectedXml, $responseXml);
    }
}
