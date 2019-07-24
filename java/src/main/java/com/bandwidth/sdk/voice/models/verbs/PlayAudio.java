package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

/**
 * The PlayAudio verb is used to play an audio file in the call. The URL of an audio file should be included in the body of the <PlayAudio> tag. If a relative URL is given, it is resolved relative to the endpoint that returned the BXML.
 *<br/>
 * <b>NOTE:</b> .wav files encoded as PCM or G711 are supported.
 */
@Builder
@XmlType(name = PlayAudio.TYPE_NAME)
public class PlayAudio implements Verb, AudioProducer {

    public static final String TYPE_NAME = "PlayAudio";

    /**
     * URL of audio to play
     * @param audioUri URI that the audio file is located
     */
    @XmlValue
    private URI audioUri;

    /**
     * username to authenticate at the audioUri endpoint
     * @param uername String username
     */
    @XmlAttribute
    protected String username;

    /**
     * password to use to authenticate at the audioUri endpoint
     * @param password String
     */
    @XmlAttribute
    protected String password;

    public static class PlayAudioBuilder{

        /**
         * URL of audio to play
         * @param uri String URI representation that the audio file is located.  Converts the String to URI using URI.create(uri).
         * @return PlayAudoBuilder
         */
        public PlayAudioBuilder audioUri(String uri){
            return this.audioUri(URI.create(uri));
        }

        /**
         * URL of audio to play
         * @param uri URI that the audio file is located
         * @return PlayAudoBuilder
         */
        public PlayAudioBuilder audioUri(URI uri){
            this.audioUri = uri;
            return this;
        }

    }
}
