<?php

require 'BxmlVerbs/response.php';
require 'BxmlVerbs/verbs/hangup.php';
require 'BxmlVerbs/verbs/speakSentence.php';
require 'BxmlVerbs/verbs/playAudio.php';
require 'BxmlVerbs/verbs/sendDtmf.php';
require 'BxmlVerbs/verbs/forward.php';
require 'BxmlVerbs/verbs/pause.php';
require 'BxmlVerbs/verbs/redirect.php';
require 'BxmlVerbs/verbs/phoneNumber.php';
require 'BxmlVerbs/verbs/transfer.php';

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

//Redirect response
$redirect = new BxmlVerbs\Redirect();
$redirect->username("user");
$redirect->password("pass");
$redirect->redirectUrl("https://test.com");
$redirect->redirectMethod("GET");
$redirect->tag("tag");
$response = new BxmlVerbs\Response();
$response->addVerb($redirect);

echo $response->toXml();
echo "\n";

//Transfer response
$number1 = new BxmlVerbs\PhoneNumber("+17777777777");
$number1->transferAnswerUrl("https://test.com");
$number1->transferAnswerMethod("GET");
$number1->username("user");
$number1->password("pass");
$number1->tag("tag");
$number2 = new BxmlVerbs\PhoneNumber("+17777777779");
$number2->transferAnswerUrl("https://test2.com");
$number2->transferAnswerMethod("GET");
$number2->username("user2");
$number2->password("pass2");
$number2->tag("tag2");
$transfer = new BxmlVerbs\Transfer();
$transfer->transferCallerId("+18999999999");
$transfer->transferCompleteUrl("https://test.com");
$transfer->transferCompleteMethod("GET");
$transfer->username("user");
$transfer->password("pass");
$transfer->tag("tag");
$transfer->callTimeout(3);
$transfer->diversionTreatment("none");
$transfer->diversionReason("away");
$transfer->phoneNumbers(array($number1, $number2));
$response = new BxmlVerbs\Response();
$response->addVerb($transfer);

echo $response->toXml();
echo "\n";
