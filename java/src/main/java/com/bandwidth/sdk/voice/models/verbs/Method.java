package com.bandwidth.sdk.voice.models.verbs;

import com.bandwidth.sdk.voice.models.verbs.adapter.MethodAdapter;
import java.util.Arrays;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

@XmlJavaTypeAdapter(MethodAdapter.class)
public enum Method {
    POST("POST"), GET("GET");

    private String name;

    Method(String name) {
        this.name = name;
    }

    public static Method fromValue(String value) {
        return Arrays.stream(Method.values())
                .filter(e -> e.name().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported HTTP method '%s'", value)));
    }

    @Override
    public String toString() {
        return name;
    }
}
