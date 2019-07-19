# Java Bandwidth BXML

This package is a Bandwidth BXML builder written for Java

## Installing

TBD

## Usage

### Hangup Response

```
Hangup hangup = = Hangup.builder().build();

Response response = new Response().with(hangup);
System.out.println(response.toXml());
```

### Forward Response

```
Forward forward = Forward.builder()
                         .to("to")
                         .from("from")
                         .callTimeout(10)
                         .build();

Response response = new Response().with(forward);
System.out.println(response.toXml());
```

### Pause Response

```
Pause pause =  Pause.builder()
                    .duration(10)
                    .build();

Response response = new Response().with(pause);
System.out.println(response.toXml());
```

### SendDtmf Response

```
SendDtmf sendDtmf = SendDtmf.builder()
                            .digits("34")
                            .build();

Response response = new Response().with(sendDtmf);
System.out.println(response.toXml());
```

### Redirect Response

```
Redirect redirect =  Redirect.builder()
                             .redirectUrl("http://url.com")
                             .redirectMethod("POST")
                             .tag("tag")
                             .build();

Response response = new Response().with(redirect);
System.out.println(response.toXml());
```

### Transfer Response

```
PhoneNumber number1 = PhoneNumber.builder()
                .transferAnswerMethod("POST")
                .transferAnswerUrl("http://url.com")
                .build();

PhoneNumber number2 = PhoneNumber.builder()
                .transferAnswerMethod("POST")
                .transferAnswerUrl("http://url.com")
                .build();

PhoneNumber number3 = PhoneNumber.builder()
                .transferAnswerMethod("POST")
                .transferAnswerUrl("http://url.com")
                .build();

Transfer transfer = Transfer.builder()
                .phoneNumbers(number1, number2, number3)
                .transferCompleteMethod("POST")
                .transferCompleteUrl("http://url.com")
                .build();

Response response = new Response().with(transfer);
System.out.println(response.toXml());
```

### SpeakSentence Response

```
SpeakSentence speakSentence = SpeakSentence.builder()
                .gender("female")
                .voice("susan")
                .locale("en_US")
                .build();

Response response = new Response().with(speakSentence);
System.out.println(response.toXml());
```

### PlayAudio Response

```
PlayAudio playAudio = PlayAudio.builder()
                .audioUri("http://url.com")
                .build();

Response response = new Response().with(playAudio);
System.out.println(response.toXml());
```

### Gather Response With No Nested Verbs

```
Gather gather = Gather.builder()
                .gatherMethod("POST")
                .terminatingDigits("#")
                .username("userId")
                .password("password")
                .build();

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested SpeakSentence

```
SpeakSentence speakSentence = SpeakSentence.builder()
                .text("Thing to say")
                .build();

Gather gather = Gather.builder()
                .gatherMethod("POST")
                .terminatingDigits("#")
                .username("userId")
                .password("password")
                .speakSentence(speakSentence)
                .build();

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested PlayAudio

```
PlayAudio playAudio = PlayAudio.builder()
                .audioUri("http://uri.com")
                .build();

Gather gather = Gather.builder()
                .gatherMethod("POST")
                .terminatingDigits("#")
                .username("userId")
                .password("password")
                .audioProducer(playAudio)
                .build();

Response response = new Response().with(gather);
System.out.println(response.toXml());
```

## BXML Documentation

Bandwidth's BXML documentation can be found on the [currently non existent docsite](https://dev.bandwidth.com)
