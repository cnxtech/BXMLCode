package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = PhoneNumber.TYPE_NAME)
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

    public PhoneNumber() {
        super();
    }

    public PhoneNumber(String value) {
        this();
        withValue(value);
    }

    public PhoneNumber withValue(String value) {
        this.value = value;
        return this;
    }

    public PhoneNumber withTransferAnswerUrl(String url) {
        return withTransferAnswerUrl(URI.create(url));
    }

    public PhoneNumber withTransferAnswerUrl(URI url) {
        this.transferAnswerUrl = url;
        return this;
    }

    public PhoneNumber withTransferAnswerMethod(Method method) {
        this.transferAnswerMethod = method;
        return this;
    }

    public PhoneNumber withCredentials(String username, String password) {
        this.username = username;
        this.password = password;
        return this;
    }

    public PhoneNumber withTag(String tag) {
        this.tag = tag;
        return this;
    }
}
