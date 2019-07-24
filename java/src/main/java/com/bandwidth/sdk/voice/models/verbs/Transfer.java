package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * The Transfer verb is used to bridge another party onto the current call.
 */
@Builder
@XmlType(name = Transfer.TYPE_NAME)
public class Transfer implements Verb {

    public static final String TYPE_NAME = "Transfer";

    /**
     * A collection of phone numbers to transfer the call to. The first to answer will be transferred.
     * @param phoneNumbers List of PhoneNumbers
     */
    @XmlElement(name = PhoneNumber.TYPE_NAME)
    private final List<PhoneNumber> phoneNumbers;

    /**
     * 	(optional) The caller ID to use when the call is transferred, if different. Must be in E.164 format (e.g. +15555555555).
     * <br/>
     * Note: Leave blank to pass along the number of the remote party
     * @param transferCallerId String
     */
    @XmlAttribute
    private String transferCallerId;

    /**
     * <i>(optional)</i> This is the timeout (in seconds) for the callee to answer the call. Range: decimal values between 1 - 300
     * @param callTimeout Double
     */
    @XmlAttribute
    private Double callTimeout;

    /**
     * <i>(optional)</i> URL to send the Transfer Complete event to and request new BXML.
     * @param transferCompleteUrl
     */
    @XmlAttribute
    private URI transferCompleteUrl;

    /**
     * <i>(optional)</i> The HTTP method to use for the request to transferCompleteUrl. GET or POST. Default value is POST.
     * @param transferCompleteMethod Method
     */
    @XmlAttribute
    private Method transferCompleteMethod;

    /**
     * <i>(optional)</i> The username to send in the HTTP request to transferCompleteUrl.
     * @param username String
     */
    @XmlAttribute
    protected String username;

    /**
     * <i>(optional)</i> The password to send in the HTTP request to transferCompleteUrl.
     * @param password String
     */
    @XmlAttribute
    protected String password;


    /**
     * <i>(optional)</i> A custom string that will be sent with this and all future callbacks unless overwritten by a future tag attribute or cleared.
     * <br/>
     * May be cleared by setting tag=""
     * <br/>
     * Max length 256 characters.
     * @param tag String
     */
    @XmlAttribute
    private String tag;

    /**
     * <i>(optional)</i> Can be any of the following:
     * <br/>
     * <b>none</b>: No diversion headers are sent on the outbound leg of the transferred call.
     * <br/>
     * <b>propagate</b>: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg.
     * <br/>
     * <b>stack</b>: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call.
     *
     * @param diversionTreatment String either: "none", "propagate", or "stack"
     */
    @XmlAttribute
    private String diversionTreatment;

    /**
     * <i>(optional)</i> This parameter is considered only when diversionTreatment is set to stack.
     *<br/>
     * Can be any of the following Strings:
     * <br/>
     * unknown
     * <br/>
     * user-busy
     * <br/>
     * no-answer
     * <br/>
     * unavailable
     * <br/>
     * unconditional
     * <br/>
     * time-of-day
     * <br/>
     * do-not-disturb
     * <br/>
     * deflection
     * <br/>
     * follow-me
     * <br/>
     * out-of-service
     * <br/>
     * away
     *
     * @param diversionReason String matching one of the options
     */
    @XmlAttribute
    private String diversionReason;

    public static class TransferBuilder {

        /**
         * <i>(optional)</i> URL to send the Transfer Complete event to and request new BXML.
         * @param uri URI
         */
        public TransferBuilder transferCompleteUrl(URI uri){
            this.transferCompleteUrl = uri;
            return this;
        }

        /**
         * <i>(optional)</i> URL to send the Transfer Complete event to and request new BXML. Converts String using URI.create(uri)
         * @param uri String
         */
        public TransferBuilder transferCompleteUrl(String uri){
            return transferCompleteUrl(URI.create(uri));
        }

        /**
         * <i>(optional)</i> The HTTP method to use for the request to transferCompleteUrl. GET or POST. Default value is POST.
         * @param method Method
         */
        public TransferBuilder transferCompleteMethod(Method method){
            this.transferCompleteMethod = method;
            return this;
        }

        /**
         * <i>(optional)</i> The HTTP method to use for the request to transferCompleteUrl. GET or POST. Default value is POST. Converts from String using Method.fromValue(method)
         * @param method String
         */
        public TransferBuilder transferCompleteMethod(String method){
            return transferCompleteMethod(Method.fromValue(method));
        }


        /**
         * A collection of phone numbers to transfer the call to. The first to answer will be transferred.
         * @param phoneNumbers the phonenumbers to include
         * @return TransferBuilder
         */
        public TransferBuilder phoneNumbers(PhoneNumber ... phoneNumbers){
            this.phoneNumbers = Arrays.asList(phoneNumbers);
            return this;
        }

        /**
         * A collection of phone numbers to transfer the call to. The first to answer will be transferred.
         * @param phoneNumbers List of phonenumbers
         * @return TransferBuilder
         */
        public TransferBuilder phoneNumbers(List<PhoneNumber> phoneNumbers){
            this.phoneNumbers = phoneNumbers;
            return this;
        }



    }


}
