<?php

require 'BxmlVerbs/response.php';
require 'BxmlVerbs/verbs/hangup.php';
require 'BxmlVerbs/verbs/speakSentence.php';

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
