package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Redirect.TYPE_NAME) @Builder
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

    public static class RedirectBuilder {

        public RedirectBuilder redirectUrl(URI uri ){
            this.redirectUrl = uri;
            return this;
        }

        public RedirectBuilder redirectUrl(String uri){
            return redirectUrl(URI.create(uri));
        }

        public RedirectBuilder redirectMethod(Method method){
            this.redirectMethod = method;
            return this;
        }

        public RedirectBuilder redirectMethod(String method){
            return redirectMethod(Method.fromValue(method));
        }

    }

}
