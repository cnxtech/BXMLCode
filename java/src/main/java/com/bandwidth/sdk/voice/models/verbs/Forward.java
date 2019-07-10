package com.bandwidth.sdk.voice.models.verbs;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import java.time.Duration;

@XmlType(name = Forward.TYPE_NAME)
public class Forward implements Verb {

    public static final String TYPE_NAME = "Forward";

    @XmlAttribute
    private String to;

    @XmlAttribute
    private String from;

    @XmlAttribute
    private long callTimeout;

    public Forward withTo(String to) {
        this.to = to;
        return this;
    }

    public Forward withFrom(String from) {
        this.from = from;
        return this;
    }

    public Forward withCallTimeout(long callTimeout) {
        this.callTimeout = callTimeout;
        return this;
    }
}
