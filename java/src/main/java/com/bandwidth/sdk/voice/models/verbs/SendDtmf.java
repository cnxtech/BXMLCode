package com.bandwidth.sdk.voice.models.verbs;

import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;

@XmlType(name = SendDtmf.TYPE_NAME)
public class SendDtmf implements Verb {

    public static final String TYPE_NAME = "SendDtmf";

    @XmlValue
    private String digits;

    public SendDtmf(String digits) {
        this.digits = digits;
    }
}
