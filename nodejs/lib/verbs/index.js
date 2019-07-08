var Hangup = require("./hangup");
var PlayAudio = require("./playAudio");
var SpeakSentence = require("./speakSentence");

var initializer = function() {

}

initializer.Hangup = Hangup;
initializer.PlayAudio = PlayAudio;
initializer.SpeakSentence = SpeakSentence;

module.exports = initializer;
