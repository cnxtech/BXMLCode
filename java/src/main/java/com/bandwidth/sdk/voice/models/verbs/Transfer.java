package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Transfer.TYPE_NAME) @Builder
public class Transfer implements Verb {

    public static final String TYPE_NAME = "Transfer";

    @XmlElement(name = PhoneNumber.TYPE_NAME)
    private final List<PhoneNumber> phoneNumbers;

    @XmlAttribute
    private String transferCallerId;

    @XmlAttribute
    private Double callTimeout;

    @XmlAttribute
    private URI transferCompleteUrl;

    @XmlAttribute
    private Method transferCompleteMethod;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    @XmlAttribute
    private String tag;

    public static class TransferBuilder {

        public TransferBuilder transferCompleteUrl(URI uri){
            this.transferCompleteUrl = uri;
            return this;
        }

        public TransferBuilder transferCompleteUrl(String uri){
            return transferCompleteUrl(URI.create(uri));
        }

        public TransferBuilder transferCompleteMethod(Method method){
            this.transferCompleteMethod = method;
            return this;
        }

        public TransferBuilder transferCompleteMethod(String method){
            return transferCompleteMethod(Method.fromValue(method));
        }

    }


}
