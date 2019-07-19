package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Gather.TYPE_NAME) @Builder
public class Gather implements Verb {
    public static final String TYPE_NAME = "Gather";

    @XmlElements({@XmlElement(name = PlayAudio.TYPE_NAME, type = PlayAudio.class)})
    private AudioProducer audioProducer;

    @XmlElements({@XmlElement(name = SpeakSentence.TYPE_NAME, type = SpeakSentence.class)})
    private SpeakSentence speakSentence;

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

    public static class GatherBuilder{

        public GatherBuilder gatherUrl(String url){ return this.gatherUrl(URI.create(url)); }

        public GatherBuilder gatherUrl(URI url){
            this.gatherUrl = url;
            return this;
        };

        public GatherBuilder gatherMethod(String method){ return this.gatherMethod(Method.fromValue(method)); }

        public GatherBuilder gatherMethod(Method method){
            this.gatherMethod = method;
            return this;
        }

    }

}
