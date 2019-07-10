# Java Bandwidth BXML

This package is a Bandwidth BXML builder written for Java

## Installing

TBD

## Usage

### Hangup Response

```
Hangup hangup = new Hangup();

Response response = new Response().with(hangup);
System.out.println(response.toXml());
```

### Forward Response

```
Forward forward = new Forward()
                        .withTo("+18888888888")
                        .withFrom("+19999999999")
                        withCallTimeout(10);

Response response = new Response().with(forward);
System.out.println(response.toXml());
```

### Pause Response

```
Pause pause = new Pause()
                    .withDuration(10);

Response response = new Response().with(pause);
System.out.println(response.toXml());
```

### SendDtmf Response

```
SendDtmf sendDtmf = new SendDtmf("123");

Response response = new Response().with(sendDtmf);
System.out.println(response.toXml());
```

### Redirect Response

```
Redirect redirect = new Redirect()
                        .withRedirectUrl("https://test.com")
                        .withRedirectMethod("POST")
                        .withTag("tag")
                        .withCredentials("user", "pass");

Response response = new Response().with(redirect);
System.out.println(response.toXml());
```

### Transfer Response

```
PhoneNumber number1 = new PhoneNumber("+18888888888")
                            .withTransferAnswerUrl("https://test.com")
                            .withTransferAnswerMethod("POST")
                            .withCredentials("user", "pass")
                            .withTag("tag");

PhoneNumber number2 = new PhoneNumber("+17777777777")
                                        .withTransferAnswerUrl("https://test2.com")
                                        .withTransferAnswerMethod("GET")
                                        .withCredentials("user2", "pass2")
                                        .withTag("tag2");

Transfer transfer = new Transfer()
                            .withPhoneNumber(number1, number2)
                            .withTransferCompleteUrl("https://test3.com")
                            .withTransferCompleteMethod("GET")
                            .withCredentials("user3", "pass3")
                            .withTag("tag3")
                            .withTransferCallerId("+16666666666")
                            .withCallTimeout(5);

Response response = new Response().with(transfer);
System.out.println(response.toXml());
```

### SpeakSentence Response

```
SpeakSentence speakSentence = new SpeakSentence("test")
                                    .withVoice("susan")
                                    .withGender("female")
                                    .withLocale("en_US");

Response response = new Response().with(speakSentence);
System.out.println(response.toXml());
```

### PlayAudio Response

```
PlayAudio playAudio = new PlayAudio("https://test.com")
                                .withCredentials("user", "pass");

Response response = new Response().with(playAudio);
System.out.println(response.toXml());
```

### Gather Response With No Nested Verbs

```
Gather gather = new Gather()
                        .withGatherUrl("https://test.com")
                        .withGatherMethod("POST")
                        .withCredentials("user", "pass")
                        .withTag("tag")
                        .withTerminatingDigits("123")
                        .withMaxDigits(3)
                        .withInterDigitTimeout(4)
                        .withFirstDigitTimeout(5);

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested SpeakSentence

```
SpeakSentence speakSentence = new SpeakSentence("test")
                                    .withVoice("susan")
                                    .withGender("female")
                                    .withLocale("en_US");

Gather gather = new Gather(speakSentence)
                        .withGatherUrl("https://test.com")
                        .withGatherMethod("POST")
                        .withCredentials("user", "pass")
                        .withTag("tag")
                        .withTerminatingDigits("123")
                        .withMaxDigits(3)
                        .withInterDigitTimeout(4)
                        .withFirstDigitTimeout(5);

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested PlayAudio

```
PlayAudio playAudio = new PlayAudio("https://test.com")
                                .withCredentials("user", "pass");

Gather gather = new Gather(playAudio)
                        .withGatherUrl("https://test.com")
                        .withGatherMethod("POST")
                        .withCredentials("user", "pass")
                        .withTag("tag")
                        .withTerminatingDigits("123")
                        .withMaxDigits(3)
                        .withInterDigitTimeout(4)
                        .withFirstDigitTimeout(5);

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

## BXML Documentation

Bandwidth's BXML documentation can be found on the [currently non existent docsite](https://dev.bandwidth.com)
