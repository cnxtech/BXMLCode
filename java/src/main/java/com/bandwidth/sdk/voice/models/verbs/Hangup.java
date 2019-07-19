package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import javax.xml.bind.annotation.XmlType;

@XmlType(name = Hangup.TYPE_NAME) @Builder
public class Hangup implements Verb {
    public static final String TYPE_NAME = "Hangup";

}
