package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlType;

/**
 * The Gather verb is used to collect digits for some period of time.
 */
@Builder
@XmlType(name = Gather.TYPE_NAME)
public class Gather implements Verb {
    public static final String TYPE_NAME = "Gather";


    /**
     * <i>(optional)</i> Using the SpeakSentence inside the Gather verb will speak the text until a digit is received.
     * @param speakSentence
     */
    @XmlElements({@XmlElement(name = SpeakSentence.TYPE_NAME, type = SpeakSentence.class)})
    private List<SpeakSentence> speakSentence;

    /**
     * <i>(optional)</i> Using the PlayAudio inside the Gather verb will play the media until a digit is received.
     * @param playAudio
     */
    @XmlElements({@XmlElement(name = PlayAudio.TYPE_NAME, type = PlayAudio.class)})
    private List<PlayAudio> playAudio;

    /**
     * <i>(optional)</i> Using the SpeakSentence inside the Gather verb will speak the text until a digit is received.
     * @param speakSentence SpeakSentence verb to next

    @XmlElements({@XmlElement(name = SpeakSentence.TYPE_NAME, type = SpeakSentence.class)})
    private SpeakSentence speakSentence;
     */


    /**
     * <i>(optional)</i> URL to send <i>Gather event</i> to and request new BXML.
     * @param gatherUrl URI to send the <i>Gather event</i>
     */
    @XmlAttribute
    private URI gatherUrl;

    /**
     * <i>(optional)</i> he HTTP method to use for the request to gatherUrl. GET or POST. Default value is POST.
     * @param gatherMethod Method to use;
     */
    @XmlAttribute
    private Method gatherMethod;

    /**
     * <i>(optional)</i> The username to send in the HTTP request to gatherUrl.
     * @param username String username
     */
    @XmlAttribute
    protected String username;

    /**
     * <i>(optional)</i> The password to send in the HTTP request to gatherUrl.
     * @param password String the password to use
     */
    @XmlAttribute
    protected String password;

    /**
     * <i>(optional)</i> A custom string that will be sent with this and all future callbacks unless overwritten by a future tag attribute or cleared.
     * <br/>
     * May be cleared by setting tag=""
     * <br/>
     * Max length 256 characters.
     * @param tag String tag to set for all future callbacks
     */
    @XmlAttribute
    private String tag;

    /**
     * <i>(optional)</i> When any of these digits are pressed, it will terminate the Gather. Default value is none.
     * @param terminatingDigits String digit to terminate the Gather
     */
    @XmlAttribute
    private String terminatingDigits;

    /**
     * <i>(optional)</i> Max number of digits to collect. Default value is 50.
     * @param maxDigits Integer the max number of digits to collect
     */
    @XmlAttribute
    private Integer maxDigits;

    /**
     * <i>(optional)</i> Time (in seconds) allowed between digit presses before automatically terminating the Gather. Default value is 5. Range: decimal values between 1 - 60.
     * @param interDigitTimeout Double time in seconds
     */
    @XmlAttribute
    private Double interDigitTimeout;

    /**
     * <i>(optional)</i> Time (in seconds) to pause after any audio from nested <SpeakSentence> or <PlayAudio> verb is played (in seconds) before terminating the Gather. Can use decimal values.
     * @param firstDigitTimeout Double time in seconds
     */
    @XmlAttribute
    private Double firstDigitTimeout;

    /**
     * <i>(optional)</i> The number of times the audio prompt should be repeated if no digits are pressed. For example, if this value is 3, the nested audio clip will be played a maximum of three times. The delay between repetitions will be equal to firstDigitTimeout. Default value is 1. Range: 1-25.
     * @param repeatCount Double time in seconds
     */
    @XmlAttribute
    private Double repeatCount;

    public static class GatherBuilder{

        /**
         * <i>(optional)</i> URL to send <i>Gather event</i> to and request new BXML. Converts string using URI.create(url).
         * @param url String to send the <i>Gather event</i>
         */
        public GatherBuilder gatherUrl(String url){
            return this.gatherUrl(URI.create(url));
        }

        /**
         * <i>(optional)</i> URL to send <i>Gather event</i> to and request new BXML.
         * @param url URI to send the <i>Gather event</i>
         */
        public GatherBuilder gatherUrl(URI url){
            this.gatherUrl = url;
            return this;
        }

        /**
         * <i>(optional)</i> he HTTP method to use for the request to gatherUrl. GET or POST. Default value is POST. Converts String to Method using Method.fromValue(method)
         * @param method Method to use;
         */
        public GatherBuilder gatherMethod(String method){
            return this.gatherMethod(Method.fromValue(method));
        }

        /**
         * <i>(optional)</i> he HTTP method to use for the request to gatherUrl. GET or POST. Default value is POST.
         * @param method Method to use;
         */
        public GatherBuilder gatherMethod(Method method){
            this.gatherMethod = method;
            return this;
        }

        /**
         * <i>(optional)</i> Using the SpeakSentence inside the Gather verb will speak the text until a digit is received.
         * @param speakSentences
         * @return GatherBuilder
         */
        public GatherBuilder speakSentence(SpeakSentence ... speakSentences){
            this.speakSentence = Arrays.asList(speakSentences);
            return this;
        }

        /**
         * <i>(optional)</i> Using the SpeakSentence inside the Gather verb will speak the text until a digit is received.
         * @param speakSentences
         * @return GatherBuilder
         */
        public GatherBuilder speakSentence(List<SpeakSentence> speakSentences){
            this.speakSentence = speakSentences;
            return this;
        }

        /**
         * <i>(optional)</i> Using the PlayAudio inside the Gather verb will play the media until a digit is received.
         * @param playAudios
         * @return GatherBuilder
         */
        public GatherBuilder playAudio(PlayAudio ... playAudios){
            this.playAudio = Arrays.asList(playAudios);
            return this;
        }

        /**
         * <i>(optional)</i> Using the PlayAudio inside the Gather verb will play the media until a digit is received.
         * @param playAudios
         * @return GatherBuilder
         */
        public GatherBuilder playAudio(List<PlayAudio> playAudios){
            this.playAudio = playAudios;
            return this;
        }

    }

}
