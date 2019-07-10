package com.bandwidth.sdk.voice.models.verbs;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Pause.TYPE_NAME)
public class Pause implements Verb {
    public static final String TYPE_NAME = "Pause";

    @XmlAttribute
    private int duration;

    public Pause withDuration(int duration) {
        this.duration = duration;
        return this;
    }
}
