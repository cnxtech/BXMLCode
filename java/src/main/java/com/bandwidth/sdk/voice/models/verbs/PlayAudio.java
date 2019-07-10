package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = PlayAudio.TYPE_NAME)
public class PlayAudio implements Verb, AudioProducer {

    public static final String TYPE_NAME = "PlayAudio";

    @XmlValue
    private URI audioUri;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    public PlayAudio(String audioUrl) {
        this(URI.create(audioUrl));
    }

    public PlayAudio(URI audioUrl) {
        this.audioUri = audioUrl;
    }

    public PlayAudio withCredentials(String username, String password) {
        this.username = username;
        this.password = password;
        return this;
    }
}
