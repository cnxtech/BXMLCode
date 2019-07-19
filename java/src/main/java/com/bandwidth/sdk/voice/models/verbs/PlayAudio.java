package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = PlayAudio.TYPE_NAME) @Builder
public class PlayAudio implements Verb, AudioProducer {

    public static final String TYPE_NAME = "PlayAudio";

    @XmlValue
    private URI audioUri;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    public static class PlayAudioBuilder{

        public PlayAudioBuilder audioUri(String uri){ return this.audioUri(URI.create(uri)); }

        public PlayAudioBuilder audioUri(URI uri){
            this.audioUri = uri;
            return this;
        }

    }
}
