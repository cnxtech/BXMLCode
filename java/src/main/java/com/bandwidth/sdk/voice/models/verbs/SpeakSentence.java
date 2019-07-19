package com.bandwidth.sdk.voice.models.verbs;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

import lombok.Builder;

@XmlType(name = SpeakSentence.TYPE_NAME) @Builder
public class SpeakSentence implements Verb, AudioProducer {

    public static final String TYPE_NAME = "SpeakSentence";


    @XmlValue
    private String text;

    @XmlAttribute
    private String voice;

    @XmlAttribute
    private String gender;

    @XmlAttribute
    private String locale;

}
