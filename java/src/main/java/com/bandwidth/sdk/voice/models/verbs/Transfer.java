package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Transfer.TYPE_NAME)
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

    public Transfer() {
        phoneNumbers = new ArrayList<>();
    }

    public Transfer(PhoneNumber... phoneNumbers) {
        this();
        withPhoneNumber(phoneNumbers);
    }

    public Transfer withPhoneNumber(PhoneNumber... phoneNumbers) {
        this.phoneNumbers.addAll(Arrays.asList(phoneNumbers));
        return this;
    }

    public Transfer withTransferCompleteUrl(String url) {
        return withTransferCompleteUrl(URI.create(url));
    }

    public Transfer withTransferCompleteUrl(URI url) {
        this.transferCompleteUrl = url;
        return this;
    }

    public Transfer withTransferCompleteMethod(Method method) {
        this.transferCompleteMethod = method;
        return this;
    }

    public Transfer withTransferCompleteMethod(String method) {
        return withTransferCompleteMethod(Method.fromValue(method));
    }

    public Transfer withCredentials(String username, String password) {
        this.username = username;
        this.password = password;
        return this;
    }

    public Transfer withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public Transfer withTransferCallerId(String transferCallerId) {
        this.transferCallerId = transferCallerId;
        return this;
    }

    public Transfer withCallTimeout(Double callTimeout) {
        this.callTimeout = callTimeout;
        return this;
    }

}
