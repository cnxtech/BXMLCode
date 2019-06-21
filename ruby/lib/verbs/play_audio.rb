require_relative 'xml_verb'

module RubyBandwidthBxml
  # The PlayAudio verb is used to play an audio file in the call
  class PlayAudio
    include XmlVerb

    def to_xml(xml)
      xml.PlayAudio(url)
    end
  end
end
