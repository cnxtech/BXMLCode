<?php

require 'BxmlVerbs/response.php';
require 'BxmlVerbs/verbs/hangup.php';

$hangup = new BxmlVerbs\Hangup();
$response = new BxmlVerbs\Response();
$response->addVerb($hangup);

echo $response->toXml();
