package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Gather.TYPE_NAME)
public class Gather implements Verb {
    public static final String TYPE_NAME = "Gather";

    @XmlElements({@XmlElement(name = PlayAudio.TYPE_NAME, type = PlayAudio.class)})
    private AudioProducer audioProducer;

    @XmlAttribute
    private URI gatherUrl;

    @XmlAttribute
    private Method gatherMethod;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    @XmlAttribute
    private String tag;

    @XmlAttribute
    private String terminatingDigits;

    @XmlAttribute
    private Integer maxDigits;

    @XmlAttribute
    private Double interDigitTimeout;

    @XmlAttribute
    private Double firstDigitTimeout;

    public Gather with(AudioProducer audioProducer) {
        this.audioProducer = audioProducer;
        return this;
    }

    public Gather withGatherUrl(String url) {
        return withGatherUrl(URI.create(url));
    }

    public Gather withGatherUrl(URI url) {
        this.gatherUrl = url;
        return this;
    }

    public Gather withGatherMethod(Method method) {
        this.gatherMethod = method;
        return this;
    }

    public Gather withGatherMethod(String method) {
        return withGatherMethod(Method.fromValue(method));
    }

    public Gather withCredentials(String username, String password) {
        this.username = username;
        this.password = password;
        return this;
    }

    public Gather withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public Gather withTerminatingDigits(String terminatingDigits) {
        this.terminatingDigits = terminatingDigits;
        return this;
    }

    public Gather withMaxDigits(Integer maxDigits) {
        this.maxDigits = maxDigits;
        return this;
    }

    public Gather withInterDigitTimeout(Double interDigitTimeout) {
        this.interDigitTimeout = interDigitTimeout;
        return this;
    }

    public Gather withFirstDigitTimeout(Double timeout) {
        this.firstDigitTimeout = timeout;
        return this;
    }
}
