var BxmlBuilder = require("bandwidthbxml");

//Hangup response
var hangup = new BxmlBuilder.Verbs.Hangup();

var response = new BxmlBuilder.Response();
response.addVerb(hangup);

console.log(response.toXml());

//PlayAudio response
var playAudio = new BxmlBuilder.Verbs.PlayAudio();
playAudio.setUrl("https://test.com");
playAudio.setUsername("user");
playAudio.setPassword("pass");

var response = new BxmlBuilder.Response();
response.addVerb(playAudio);

console.log(response.toXml());

//SpeakSentence response
var speakSentence = new BxmlBuilder.Verbs.SpeakSentence();
speakSentence.setSentence("test");
speakSentence.setVoice("susan");
speakSentence.setGender("female");
speakSentence.setLocale("en_US");

var response = new BxmlBuilder.Response();
response.addVerb(speakSentence);

console.log(response.toXml());

//SendDtmf response
var sendDtmf = new BxmlBuilder.Verbs.SendDtmf();
sendDtmf.setDtmf("123");

var response = new BxmlBuilder.Response();
response.addVerb(sendDtmf);

console.log(response.toXml());

//Forward response
var forward = new BxmlBuilder.Verbs.Forward();
forward.setTo("+18888888888");
forward.setFrom("+19999999999");
forward.setCallTimeout(3);
forward.setDiversionTreatment("none");
forward.setDiversionReason("away");

var response = new BxmlBuilder.Response();
response.addVerb(forward);

console.log(response.toXml());

//Pause response
var hangup = new BxmlBuilder.Verbs.Hangup();

var response = new BxmlBuilder.Response();
response.addVerb(hangup);

console.log(response.toXml());

//Redirect response
var redirect = new BxmlBuilder.Verbs.Redirect();
redirect.setUsername("user");
redirect.setPassword("pass");
redirect.setRedirectUrl("https://test.com");
redirect.setRedirectMethod("GET");
redirect.setTag("tag");

var response = new BxmlBuilder.Response();
response.addVerb(redirect);

console.log(response.toXml());

//Gather response with a nested SpeakSentence
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

console.log(response.toXml());

//Gather response with a nested PlayAudio
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

console.log(response.toXml());

//Gather response with no nested verbs
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

console.log(response.toXml());
