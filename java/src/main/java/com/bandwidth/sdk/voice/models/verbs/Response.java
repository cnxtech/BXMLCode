package com.bandwidth.sdk.voice.models.verbs;

import lombok.Builder;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.lang.reflect.Array;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.crypto.dsig.TransformService;

@Builder
@XmlRootElement(name = Response.TYPE_NAME)
public class Response {
    public static final String TYPE_NAME = "Response";

    private static JAXBContext jaxbContext;

    private final List<Verb> verbs = new ArrayList<>();

    public Response(){
    }

    @XmlElements({
            @XmlElement(name = Gather.TYPE_NAME, type = Gather.class),
            @XmlElement(name = Hangup.TYPE_NAME, type = Hangup.class),
            @XmlElement(name = Record.TYPE_NAME, type = Record.class),
            @XmlElement(name = Redirect.TYPE_NAME, type = Redirect.class),
            @XmlElement(name = PlayAudio.TYPE_NAME, type = PlayAudio.class),
            @XmlElement(name = SpeakSentence.TYPE_NAME, type = SpeakSentence.class),
            @XmlElement(name = Transfer.TYPE_NAME, type = Transfer.class),
            @XmlElement(name = Pause.TYPE_NAME, type = Pause.class),
            @XmlElement(name = Forward.TYPE_NAME, type = Forward.class),
            @XmlElement(name = SendDtmf.TYPE_NAME, type = SendDtmf.class)
    })


    /**
     * Returns list of verbs in this Response
     */
    public List<Verb> getVerbs() {
        return verbs;
    }

    /**
     * Adds a Verb to the list of Verbs in this Response
     * @param verb
     * @return Response (this)
     */
    public Response add(Verb verb) {
        this.verbs.add(verb);
        return this;
    }

    /**
     * Adds Verbs to the list of Verbs in this Response
     * @param verbs
     * @return This Response
     */
    public Response addAll(Verb... verbs) {
        this.verbs.addAll(Arrays.asList(verbs));
        return this;
    }

    /**
     * Convert this Response and its verbs into their corresponding XML and get the result as a String
     *
     * @return This Response and its children in XML form
     */
    public String toXml() {
        OutputStream outputStream = new ByteArrayOutputStream();
        try {
            getMarshaller().marshal(this, outputStream);
        } catch (JAXBException e) {
            throw new RuntimeException("Error creating BXML marshaller", e);
        }
        return outputStream.toString();
    }

    private Marshaller getMarshaller() {
        try {
            // This isn't thread-unsafe, it's just expensive to create. So no locking necessary.
            if (jaxbContext == null) {
                jaxbContext = JAXBContext.newInstance(Response.class);
            }
            Marshaller marshaller = jaxbContext.createMarshaller();
            // omits <?xml version="1.0" encoding="UTF-8"?>
            marshaller.setProperty(Marshaller.JAXB_FRAGMENT, true);

            return marshaller;
        } catch (JAXBException e) {
            throw new RuntimeException("Error creating JAXB context for BXML serialization", e);
        }
    }
}
