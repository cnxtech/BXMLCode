<?php

require 'BxmlVerbs/response.php';
require 'BxmlVerbs/verbs/hangup.php';
require 'BxmlVerbs/verbs/speakSentence.php';
require 'BxmlVerbs/verbs/playAudio.php';

//Hangup response
$hangup = new BxmlVerbs\Hangup();
$response = new BxmlVerbs\Response();
$response->addVerb($hangup);

echo $response->toXml();
echo "\n";

//SpeakSentence response
$speakSentence = new BxmlVerbs\SpeakSentence("Test");
$speakSentence->gender("female");
$speakSentence->voice("susan");
$speakSentence->locale("en_US");
$response = new BxmlVerbs\Response();
$response->addVerb($speakSentence);

echo $response->toXml();
echo "\n";

//PlayAudio response
$playAudio = new BxmlVerbs\PlayAudio("https://test.com");
$playAudio->username("user");
$playAudio->password("pass");
$response = new BxmlVerbs\Response();
$response->addVerb($playAudio);

echo $response->toXml();
echo "\n";
