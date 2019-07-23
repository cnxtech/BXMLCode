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
var validator = require("xsd-schema-validator");

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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
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
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
    });
});

//Tests for Redirect
describe("Redirect", function() {
    describe("#toXml()", function() {
        it("should generate a proper Redirect tag", function() {
            var redirect = new BxmlBuilder.Verbs.Redirect();
            redirect.setUsername("user");
            redirect.setPassword("pass");
            redirect.setRedirectUrl("https://test.com");
            redirect.setRedirectMethod("GET");
            redirect.setTag("tag");

            var response = new BxmlBuilder.Response();
            response.addVerb(redirect);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Redirect username=\"user\" password=\"pass\" redirectUrl=\"https://test.com\" redirectMethod=\"GET\" tag=\"tag\"/></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
    });
});

//Tests for Gather
describe("Gather", function() {
    describe("#toXml()", function() {
        it("should generate a proper Gather tag with a nested SpeakSentence", function() {
            var speakSentence = new BxmlBuilder.Verbs.SpeakSentence();
            speakSentence.setSentence("test");
            speakSentence.setVoice("susan");
            speakSentence.setGender("female");
            speakSentence.setLocale("en_US");

            var gather = new BxmlBuilder.Verbs.Gather();
            gather.setGatherUrl("https://test.com");
            gather.setGatherMethod("GET");
            gather.setUsername("user");
            gather.setPassword("pass");
            gather.setTag("tag");
            gather.setTerminatingDigits("123");
            gather.setMaxDigits(3);
            gather.setInterDigitTimeout(4);
            gather.setFirstDigitTimeout(5);
            gather.setSpeakSentence(speakSentence);

            var response = new BxmlBuilder.Response();
            response.addVerb(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\"><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Gather></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
        it("should generate a proper Gather tag with a nested PlayAudio", function() {
            var playAudio = new BxmlBuilder.Verbs.PlayAudio();
            playAudio.setUrl("https://test.com");
            playAudio.setUsername("user");
            playAudio.setPassword("pass");

            var gather = new BxmlBuilder.Verbs.Gather();
            gather.setGatherUrl("https://test.com");
            gather.setGatherMethod("GET");
            gather.setUsername("user");
            gather.setPassword("pass");
            gather.setTag("tag");
            gather.setTerminatingDigits("123");
            gather.setMaxDigits(3);
            gather.setInterDigitTimeout(4);
            gather.setFirstDigitTimeout(5);
            gather.setPlayAudio(playAudio);

            var response = new BxmlBuilder.Response();
            response.addVerb(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\"><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Gather></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
        it("should generate a proper Gather tag with no nested tags", function() {
            var gather = new BxmlBuilder.Verbs.Gather();
            gather.setGatherUrl("https://test.com");
            gather.setGatherMethod("GET");
            gather.setUsername("user");
            gather.setPassword("pass");
            gather.setTag("tag");
            gather.setTerminatingDigits("123");
            gather.setMaxDigits(3);
            gather.setInterDigitTimeout(4);
            gather.setFirstDigitTimeout(5);

            var response = new BxmlBuilder.Response();
            response.addVerb(gather);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Gather gatherUrl=\"https://test.com\" gatherMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\" terminatingDigits=\"123\" maxDigits=\"3\" interDigitTimeout=\"4\" firstDigitTimeout=\"5\"/></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
    });
});

//Tests for Transfer
describe("Transfer", function() {
    describe("#toXml()", function() {
        it("should generate a proper Transfer tag", function() {
            var number1 = new BxmlBuilder.Verbs.PhoneNumber();
            number1.setNumber("+17777777777");
            number1.setTransferAnswerUrl("https://test.com");
            number1.setTransferAnswerMethod("GET");
            number1.setUsername("user");
            number1.setPassword("pass");
            number1.setTag("tag");
            
            var number2 = new BxmlBuilder.Verbs.PhoneNumber();
            number2.setNumber("+17777777779");
            number2.setTransferAnswerUrl("https://test2.com");
            number2.setTransferAnswerMethod("POST");
            number2.setUsername("user2");
            number2.setPassword("pass2");
            number2.setTag("tag2");

            var transfer = new BxmlBuilder.Verbs.Transfer();
            transfer.setTransferCallerId("+18888888888");
            transfer.setCallTimeout(3);
            transfer.setTag("tagTransfer");
            transfer.setTransferCompleteUrl("https://testtransfer.com");
            transfer.setTransferCompleteMethod("GET");
            transfer.setUsername("usertransfer");
            transfer.setPassword("passtransfer");
            transfer.setDiversionTreatment("none");
            transfer.setDiversionReason("away");
            transfer.addPhoneNumber(number1);
            transfer.addPhoneNumber(number2);

            var response = new BxmlBuilder.Response();
            response.addVerb(transfer);

            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Transfer transferCallerId=\"+18888888888\" callTimeout=\"3\" tag=\"tagTransfer\" transferCompleteUrl=\"https://testtransfer.com\" transferCompleteMethod=\"GET\" username=\"usertransfer\" password=\"passtransfer\" diversionTreatment=\"none\" diversionReason=\"away\"><PhoneNumber transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"GET\" username=\"user\" password=\"pass\" tag=\"tag\">+17777777777</PhoneNumber><PhoneNumber transferAnswerUrl=\"https://test2.com\" transferAnswerMethod=\"POST\" username=\"user2\" password=\"pass2\" tag=\"tag2\">+17777777779</PhoneNumber></Transfer></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
    });
});

//Tests for PlayAudio and SpeakSentence combined
describe("PlayAudioSpeakSentence", function() {
    describe("#toXml()", function() {
        it("should generate a proper PlayAudio and SpeakSentence tag combined", function() {
            var playAudio = new BxmlBuilder.Verbs.PlayAudio();
            playAudio.setUrl("https://test.com");
            playAudio.setUsername("user");
            playAudio.setPassword("pass");

            var speakSentence = new BxmlBuilder.Verbs.SpeakSentence();
            speakSentence.setSentence("test");
            speakSentence.setVoice("susan");
            speakSentence.setGender("female");
            speakSentence.setLocale("en_US");

            var response = new BxmlBuilder.Response();
            response.addVerb(playAudio);
            response.addVerb(speakSentence);
            var expectedString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio><SpeakSentence voice=\"susan\" locale=\"en_US\" gender=\"female\">test</SpeakSentence></Response>";
            assert.equal(response.toXml(), expectedString);
            //validate against xsd
            validator.validateXML(response.toXml(), "schema.xsd", function(err, result) {
                if (err) {
                    throw err;
                }

            });
        });
    });
});
