package com.bandwidth.sdk.voice.models.verbs;

import com.bandwidth.sdk.voice.models.verbs.adapter.FileFormatAdapter;
import java.util.Arrays;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

@XmlJavaTypeAdapter(FileFormatAdapter.class)
public enum FileFormat {
    MP3("mp3"), WAV("wav");

    private final String name;

    FileFormat(String name) {
        this.name = name;
    }

    public static FileFormat fromValue(String value) {
        return Arrays.asList(FileFormat.values()).stream().filter(e -> e.name().equalsIgnoreCase(value)).findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported file format '%s'", value)));
    }

    @Override
    public String toString() {
        return name;
    }
}
