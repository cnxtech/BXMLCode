var Hangup = require("./hangup");
var PlayAudio = require("./playAudio");
var SpeakSentence = require("./speakSentence");
var SendDtmf = require("./sendDtmf");

var initializer = function() {

}

initializer.Hangup = Hangup;
initializer.PlayAudio = PlayAudio;
initializer.SpeakSentence = SpeakSentence;
initializer.SendDtmf = SendDtmf;

module.exports = initializer;
