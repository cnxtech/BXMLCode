var Hangup = require("./hangup");
var PlayAudio = require("./playAudio");
var SpeakSentence = require("./speakSentence");
var SendDtmf = require("./sendDtmf");
var Forward = require("./forward");
var Pause = require("./pause");
var Redirect = require("./redirect");

var initializer = function() {

}

initializer.Hangup = Hangup;
initializer.PlayAudio = PlayAudio;
initializer.SpeakSentence = SpeakSentence;
initializer.SendDtmf = SendDtmf;
initializer.Forward = Forward;
initializer.Pause = Pause;
initializer.Redirect = Redirect;

module.exports = initializer;
