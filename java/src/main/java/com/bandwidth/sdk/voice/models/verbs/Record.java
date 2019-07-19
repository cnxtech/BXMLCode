package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.net.URI;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = Record.TYPE_NAME) @Builder
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

    public static class RecordBuilder {

        public RecordBuilder recordCompleteUrl(URI uri ){
            this.recordCompleteUrl = uri;
            return this;
        }

        public RecordBuilder recordCompleteUrl(String uri){
            return recordCompleteUrl(URI.create(uri));
        }

        public RecordBuilder recordCompleteMethod(Method method){
            this.recordCompleteMethod = method;
            return this;
        }

        public RecordBuilder recordCompleteMethod(String method){
            return recordCompleteMethod(Method.fromValue(method));
        }

        public RecordBuilder recordingAvailableUrl(URI uri){
            this.recordingAvailableUrl = uri;
            return this;
        }

        public RecordBuilder recordingAvailableUrl(String uri){ return recordingAvailableUrl(URI.create(uri));}

        public RecordBuilder recordingAvailableMethod(Method method){
            this.recordingAvailableMethod = method;
            return this;
        }

        public RecordBuilder recordingAvailableMethod(String method){return recordingAvailableMethod(Method.fromValue(method));}


        public RecordBuilder transcriptionAvailableUrl(URI uri) {
            this.transcriptionAvailableUrl =  uri;
            return this;
        }

        public RecordBuilder transcriptionAvailableUrl(String uri){return transcriptionAvailableUrl(URI.create(uri));}

        public RecordBuilder transcriptionAvailableMethod(Method method){
            this.transcriptionAvailableMethod = method;
            return this;
        }

        public RecordBuilder transcriptionAvailableMethod(String method){
            return transcriptionAvailableMethod(Method.fromValue(method));
        }


    }


}
