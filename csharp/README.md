# C# Bandwidth BXML

This package is a Bandwidth BXML builder written for C#

## Installing

TBD

## Usage

### Hangup Response

```
Response response = new Response(new Hangup());
string response_xml = response.ToXml();
```

### Pause Response

```
Pause pause = new Pause();
pause.Duration = 3;

Response response = new Response(pause);
string response_xml = response.ToXml();
```

### PlayAudio Response

```
PlayAudio playAudio = new PlayAudio();
playAudio.Url = "https://test.com";
playAudio.Username = "user";
playAudio.Password = "pass";

Response response = new Response(playAudio);
string response_xml = response.ToXml();
```

### SpeakSentence Response

```
SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "test";
speakSentence.Locale = "en_US";
speakSentence.Voice = "susan";
speakSentence.Gender = "female";

Response response = new Response(speakSentence);
string response_xml = response.ToXml();
```

### SendDtmf Response

```
SendDtmf sendDtmf = new SendDtmf();
sendDtmf.Digits = "123";

Response response = new Response(sendDtmf);
string response_xml = response.ToXml();
```

### Forward Response

```
Forward forward = new Forward();
forward.To = "+18888888888";
forward.From = "+17777777777";
forward.DiversionTreatment = "none";
forward.DiversionReason = "away";
forward.CallTimeout = 3;

Response response = new Response(forward);
string response_xml = response.ToXml();
```

### Transfer Response

```
PhoneNumber phoneNumber1 = new PhoneNumber();
phoneNumber1.Number = "+18888888888";
phoneNumber1.TransferAnswerUrl = "https://test.com";
phoneNumber1.TransferAnswerMethod = "POST";
phoneNumber1.Username = "user";
phoneNumber1.Password = "pass";
phoneNumber1.Tag = "tag";

PhoneNumber phoneNumber2 = new PhoneNumber();
phoneNumber2.Number = "+18888888888";
phoneNumber2.TransferAnswerUrl = "https://test.com";
phoneNumber2.TransferAnswerMethod = "POST";
phoneNumber2.Username = "user";
phoneNumber2.Password = "pass";
phoneNumber2.Tag = "tag";

Transfer transfer = new Transfer();
transfer.TransferCallerId = "+17777777777";
transfer.CallTimeout = 3;
transfer.Tag = "tag";
transfer.TransferCompleteUrl = "https://test.com";
transfer.TransferCompleteMethod = "GET";
transfer.Username = "user";
transfer.Password = "pass";
transfer.DiversionTreatment = "none";
transfer.DiversionReason = "away";
transfer.PhoneNumbers = new PhoneNumber[] {phoneNumber1, phoneNumber2};

Response response = new Response(transfer);
string response_xml = response.ToXml();
```

### Gather Response No Nested Verbs

```
Gather gather = new Gather();
gather.GatherUrl = "https://test.com";
gather.GatherMethod = "POST";
gather.TerminatingDigits = "123";
gather.Tag = "tag";
gather.MaxDigits = 3;
gather.InterDigitTimeout = 3;
gather.Username = "user";
gather.Password = "pass";
gather.FirstDigitTimeout = 3;

Response response = new Response(gather);
string response_xml = response.ToXml();
```

### Gather Response With Nested SpeakSentence

```
Gather gather = new Gather();
gather.GatherUrl = "https://test.com";
gather.GatherMethod = "POST";
gather.TerminatingDigits = "123";
gather.Tag = "tag";
gather.MaxDigits = 3;
gather.InterDigitTimeout = 3;
gather.Username = "user";
gather.Password = "pass";
gather.FirstDigitTimeout = 3;

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Test";
gather.SpeakSentence = speakSentence;

Response response = new Response(gather);
string response_xml = response.ToXml();
```

### Gather Response With Nested PlayAudio

```
Gather gather = new Gather();
gather.GatherUrl = "https://test.com";
gather.GatherMethod = "POST";
gather.TerminatingDigits = "123";
gather.Tag = "tag";
gather.MaxDigits = 3;
gather.InterDigitTimeout = 3;
gather.Username = "user";
gather.Password = "pass";
gather.FirstDigitTimeout = 3;

PlayAudio playAudio = new PlayAudio();
playAudio.Url = "https://test.com";
gather.PlayAudio = playAudio;

Response response = new Response(gather);
string response_xml = response.ToXml();
```

### Redirect Response

```
Redirect redirect = new Redirect();
redirect.RedirectUrl = "https://test.com";
redirect.RedirectMethod = "GET";
redirect.Tag = "Tag";
redirect.Username = "user";
redirect.Password = "pass";

Response response = new Response(redirect);
string response_xml = response.ToXml();
``` 

### SpeakSentence and PlayAudio Response

```
SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "test";
speakSentence.Locale = "en_US";
speakSentence.Voice = "susan";
speakSentence.Gender = "female";

PlayAudio playAudio = new PlayAudio();
playAudio.Url = "https://test.com";
playAudio.Username = "user";
playAudio.Password = "pass";

Response response = new Response();
response.Add(speakSentence);
response.Add(playAudio);
string response_xml = response.ToXml();
```

## BXML Documentation

Bandwidth's BXML documentation can be found on the [currently non existent docsite](https://dev.bandwidth.com)
