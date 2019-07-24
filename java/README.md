# Java Bandwidth BXML

This package is a Bandwidth BXML builder written for Java

## Installing

TBD

## Usage

### Hangup Response

```java
Hangup hangup = = Hangup.builder().build();

Response response = new Response().add(hangup);
System.out.println(response.toXml());
```

### Forward Response

```java
Forward forward = Forward.builder()
                .to("to")
                .from("from")
                .callTimeout(10)
                .build();

Response response = new Response().add(forward);
System.out.println(response.toXml());
```

### Pause Response

```java
Pause pause =  Pause.builder()
                .duration(10)
                .build();

Response response = new Response().add(pause);
System.out.println(response.toXml());
```

### SendDtmf Response

```java
SendDtmf sendDtmf = SendDtmf.builder()
                .digits("34")
                .build();

Response response = new Response().add(sendDtmf);
System.out.println(response.toXml());
```

### Redirect Response

```java
Redirect redirect =  Redirect.builder()
                .redirectUrl("http://url.com")
                .redirectMethod("POST")
                .tag("tag")
                .build();

Response response = new Response().add(redirect);
System.out.println(response.toXml());
```

### Transfer Response

```java
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

Response response = new Response().add(transfer);
System.out.println(response.toXml());
```

### SpeakSentence Response

```java
SpeakSentence speakSentence = SpeakSentence.builder()
                .text("hello world!")
                .gender("female")
                .locale("en_US")
                .build();

Response response = new Response().add(speakSentence);
System.out.println(response.toXml());
```

### PlayAudio Response

```java
PlayAudio playAudio = PlayAudio.builder()
                .audioUri("http://url.com")
                .build();

Response response = new Response().add(playAudio);
System.out.println(response.toXml());
```

### Gather Response With No Nested Verbs

```java
Gather gather = Gather.builder()
                .gatherMethod("POST")
                .terminatingDigits("#")
                .username("userId")
                .password("password")
                .build();

Response response = new Response().add(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested SpeakSentence

```java

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

Response response = new Response().add(gather);
System.out.println(response.toXml());
```

### Gather Response With A Nested PlayAudio

```java
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

Response response = new Response().add(gather);
System.out.println(response.toXml());
```


### Multi-Verb Response

```java

SpeakSentence speakSentence = SpeakSentence.builder()
                .text("hello world!")
                .gender("female")
                .locale("en_US")
                .build();

Gather gather = Gather.builder()
                .gatherMethod("POST")
                .terminatingDigits("#")
                .username("userId")
                .password("password")
                .build();


Response response = new Response().add(speakSentence).add(gather);
// --- or ---
// Response response = new Response().addAll(speakSentence, gather);

System.out.println(response.toXml());
```


## BXML Documentation

Bandwidth's BXML documentation can be found on the [currently non existent docsite](https://dev.bandwidth.com)
