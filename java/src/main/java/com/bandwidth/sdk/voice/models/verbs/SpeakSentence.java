package com.bandwidth.sdk.voice.models.verbs;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = SpeakSentence.TYPE_NAME)
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

    public SpeakSentence(String text) {
        this.text = text;
    }

    public SpeakSentence withVoice(String voice) {
        this.voice = voice;
        return this;
    }

    public SpeakSentence withGender(String gender) {
        this.gender = gender;
        return this;
    }

    public SpeakSentence withLocale(String locale) {
        this.locale = locale;
        return this;
    }
}
