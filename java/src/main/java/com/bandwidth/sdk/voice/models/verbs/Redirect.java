package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Redirect.TYPE_NAME)
public class Redirect implements Verb {

    public static final String TYPE_NAME = "Redirect";

    @XmlAttribute
    private URI redirectUrl;

    @XmlAttribute
    private Method redirectMethod;

    @XmlAttribute
    private String tag;

    @XmlAttribute
    protected String username;

    @XmlAttribute
    protected String password;

    public Redirect withRedirectUrl(String url) {
        return withRedirectUrl(URI.create(url));
    }

    public Redirect withRedirectUrl(URI uri) {
        this.redirectUrl = uri;
        return this;
    }

    public Redirect withRedirectMethod(Method method) {
        this.redirectMethod = method;
        return this;
    }

    public Redirect withRedirectMethod(String method) {
        return withRedirectMethod(Method.fromValue(method));
    }

    public Redirect withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public Redirect withCredentials(String username, String password) {
        this.username = username;
        this.password = password;
        return this;
    }

}
