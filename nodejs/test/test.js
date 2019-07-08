/**
 * test.js
 *
 * Contains unit tests for the BXML builder
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var assert = require("assert");
var BxmlBuilder = require("..");

//Tests for Response
describe("Response", function() {
    describe("#toXml()", function() {
        it("should return empty response tag with no verbs", function() {
            var response = new BxmlBuilder.Response()
            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response/>";
            assert.equal(response.toXml(), expectedString);
        });
    });
});

//Tests for Hangup
describe("Hangup", function() {
    describe("#toXml()", function() {
        it("should generate a proper Hangup tag", function() {
            var hangup = new BxmlBuilder.Verbs.Hangup();
            var response = new BxmlBuilder.Response();
            response.addVerb(hangup);
            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Hangup/></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
});
