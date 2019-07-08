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

//Tests for PlayAudio
describe("PlayAudio", function() {
    describe("#toXml()", function() {
        it("should generate a proper PlayAudio tag", function() {
            var playAudio = new BxmlBuilder.Verbs.PlayAudio();
            playAudio.setUrl("https://test.com");
            playAudio.setUsername("user");
            playAudio.setPassword("pass");
            
            var response = new BxmlBuilder.Response();
            response.addVerb(playAudio);
            
            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
});

//Tests for SpeakSentence
describe("SpeakSentence", function() {
    describe("#toXml()", function() {
        it("should generate a proper SpeakSentence tag", function() {
            var speakSentence = new BxmlBuilder.Verbs.SpeakSentence();
            speakSentence.setSentence("test");
            speakSentence.setVoice("susan");
            speakSentence.setGender("female");
            speakSentence.setLocale("en_US");

            var response = new BxmlBuilder.Response();
            response.addVerb(speakSentence);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
});

//Tests for SendDtmf
describe("SendDtmf", function() {
    describe("#toXml()", function() {
        it("should generate a proper SendDtmf tag", function() {
            var sendDtmf = new BxmlBuilder.Verbs.SendDtmf();
            sendDtmf.setDtmf("123");

            var response = new BxmlBuilder.Response();
            response.addVerb(sendDtmf);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><SendDtmf>123</SendDtmf></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
});

//Tests for Forward
describe("Forward", function() {
    describe("#toXml()", function() {
        it("should generate a proper Forward tag", function() {
            var forward = new BxmlBuilder.Verbs.Forward();
            forward.setTo("+18888888888");
            forward.setFrom("+19999999999");
            forward.setCallTimeout(3);
            forward.setDiversionTreatment("none");
            forward.setDiversionReason("away");

            var response = new BxmlBuilder.Response();
            response.addVerb(forward);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Forward to=\"+18888888888\" from=\"+19999999999\" callTimeout=\"3\" diversionTreatment=\"none\" diversionReason=\"away\"/></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
})

//Tests for Pause
describe("Pause", function() {
    describe("#toXml()", function() {
        it("should generate a proper Pause tag", function() {
            var pause = new BxmlBuilder.Verbs.Pause();
            pause.setDuration(3);

            var response = new BxmlBuilder.Response();
            response.addVerb(pause);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Pause duration=\"3\"/></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
        });
    });
});
