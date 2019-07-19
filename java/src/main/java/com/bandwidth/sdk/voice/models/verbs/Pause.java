package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Pause.TYPE_NAME) @Builder
public class Pause implements Verb {
    public static final String TYPE_NAME = "Pause";

    @XmlAttribute
    private int duration;
}
