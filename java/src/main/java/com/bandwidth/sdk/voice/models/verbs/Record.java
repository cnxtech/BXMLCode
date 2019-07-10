package com.bandwidth.sdk.voice.models.verbs;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Record.TYPE_NAME)
public class Record implements Verb {

    public static final String TYPE_NAME = "Record";

    @XmlAttribute
    private URI recordCompleteUrl;

    @XmlAttribute
    private Method recordCompleteMethod;

    @XmlAttribute
    private String tag;

    @XmlAttribute
    private FileFormat fileFormat;

    @XmlAttribute
    private String terminatingDigits;

    @XmlAttribute
    private Integer maxDuration;

    @XmlAttribute
    private URI recordingAvailableUrl;

    @XmlAttribute
    private Method recordingAvailableMethod;

    @XmlAttribute
    private Boolean transcribe;

    @XmlAttribute
    private URI transcriptionAvailableUrl;

    @XmlAttribute
    private Method transcriptionAvailableMethod;

    public Record withRecordCompleteUrl(String url) {
        return withRecordCompleteUrl(URI.create(url));
    }

    public Record withRecordCompleteUrl(URI url) {
        this.recordCompleteUrl = url;
        return this;
    }

    public Record withRecordCompleteMethod(Method method) {
        this.recordCompleteMethod = method;
        return this;
    }

    public Record withRecordCompleteMethod(String method) {
        return withRecordCompleteMethod(Method.fromValue(method));
    }

    public Record withTag(String tag) {
        this.tag = tag;
        return this;
    }

    public Record withTerminatingDigits(String terminatingDigits) {
        this.terminatingDigits = terminatingDigits;
        return this;
    }

    public Record withFileFormat(FileFormat fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }

    public Record withFileFormat(String fileFormat) {
        return withFileFormat(FileFormat.fromValue(fileFormat));
    }

    public Record withMaxDuration(Integer maxDuration) {
        this.maxDuration = maxDuration;
        return this;
    }

    public Record withRecordingAvailableUrl(String url) {
        return withRecordingAvailableUrl(URI.create(url));
    }

    public Record withRecordingAvailableUrl(URI url) {
        this.recordingAvailableUrl = url;
        return this;
    }

    public Record withRecordingAvailableMethod(Method method) {
        this.recordingAvailableMethod = method;
        return this;
    }

    public Record withRecordingAvailableMethod(String method) {
        return withRecordingAvailableMethod(Method.fromValue(method));
    }

    public Record withSubscribe(boolean transcribe) {
        this.transcribe = transcribe;
        return this;
    }

    public Record withTranscriptionAvailableUrl(String uri) {
        return withTranscriptionAvailableUrl(URI.create(uri));
    }

    public Record withTranscriptionAvailableUrl(URI uri) {
        this.transcriptionAvailableUrl = uri;
        return this;
    }

    public Record withTranscriptionAvailableMethod(Method method) {
        this.transcriptionAvailableMethod = method;
        return this;
    }

    public Record withTranscriptionAvailableMethod(String method) {
        return withTranscriptionAvailableMethod(Method.fromValue(method));
    }
}
