<?php

require 'BxmlVerbs/response.php';
require 'BxmlVerbs/verbs/hangup.php';
require 'BxmlVerbs/verbs/speakSentence.php';
require 'BxmlVerbs/verbs/playAudio.php';
require 'BxmlVerbs/verbs/sendDtmf.php';
require 'BxmlVerbs/verbs/forward.php';
require 'BxmlVerbs/verbs/pause.php';

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

//SendDtmf response
$sendDtmf = new BxmlVerbs\SendDtmf("123");
$response = new BxmlVerbs\Response();
$response->addVerb($sendDtmf);

echo $response->toXml();
echo "\n";

//Forward response
$forward = new BxmlVerbs\Forward();
$forward->to("+18888888888");
$forward->from("+18889999999");
$forward->callTimeout(3);
$forward->diversionTreatment("none");
$forward->diversionReason("away");
$response = new BxmlVerbs\Response();
$response->addVerb($forward);

echo $response->toXml();
echo "\n";

//Pause response
$pause = new BxmlVerbs\Pause();
$pause->duration("3");
$response = new BxmlVerbs\Response();
$response->addVerb($pause);

echo $response->toXml();
echo "\n";
