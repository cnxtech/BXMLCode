package com.bandwidth.sdk.voice.models.verbs.adapter;

import com.bandwidth.sdk.voice.models.verbs.Method;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class MethodAdapter extends XmlAdapter<String, Method> {

    @Override
    public Method unmarshal(String v) throws Exception {
        return Method.fromValue(v);
    }

    @Override
    public String marshal(Method v) throws Exception {
        return v == null ? null : v.toString();
    }
}
