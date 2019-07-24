package com.bandwidth.sdk.voice.models.verbs;

import com.bandwidth.sdk.voice.models.verbs.adapter.VoiceAdapter;

import java.util.Arrays;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

/**
 * The list of names that can be used in the SpeakSentence Verb
 */
@XmlJavaTypeAdapter(VoiceAdapter.class)
public enum Voice {
    EMILY("Emily"), ETHAN("Ethan"), MARIANA("Mariana"), MATEO("Mateo"), JANE("Jane"), JAMES("James"), MILA("Mila"),
    MAX("Max"), ELLA("Ella"), CHLOE("Chloe"), CHRISTOPHE("Christophe"), SOPHIA("Sophia"), STEFANO("Stefano"),
    ELAINE("Elaine");

    private final String name;

    Voice(String name) {
        this.name = name;
    }

    /**
     * Translates a string into a Voice Enum
     * @param value String value
     * @return
     */
    public static Voice fromValue(String value) {
        return Arrays.stream(Voice.values())
                .filter(e -> e.name().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(String.format("Unsupported voice '%s'", value)));
    }

    @Override
    public String toString() {
        return name;
    }
}
