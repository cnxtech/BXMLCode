package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = PhoneNumber.TYPE_NAME) @Builder
public class PhoneNumber {
    public static final String TYPE_NAME = "PhoneNumber";

    @XmlValue
    private String value;

    @XmlAttribute
    private URI transferAnswerUrl;

    @XmlAttribute
    private Method transferAnswerMethod;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    @XmlAttribute
    private String tag;

    public static class PhoneNumberBuilder{

        public PhoneNumberBuilder transferAnswerUrl(String uri){ return this.transferAnswerUrl(URI.create(uri)); }

        public PhoneNumberBuilder transferAnswerUrl(URI uri){
            this.transferAnswerUrl = uri;
            return this;
        }

        public PhoneNumberBuilder transferAnswerMethod(String method){ return this.transferAnswerMethod(Method.fromValue(method)); }

        public PhoneNumberBuilder transferAnswerMethod(Method method){
            this.transferAnswerMethod = method;
            return this;
        }

    }

}
