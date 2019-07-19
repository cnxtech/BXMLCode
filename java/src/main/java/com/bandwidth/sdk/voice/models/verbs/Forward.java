package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import java.time.Duration;

@XmlType(name = Forward.TYPE_NAME) @Builder
public class Forward implements Verb {

    public static final String TYPE_NAME = "Forward";

    @XmlAttribute
    private String to;

    @XmlAttribute
    private String from;

    @XmlAttribute
    private long callTimeout;

}
