module RubyBandwidthBxml
    module Verbs
      # The PlayAudio verb is used to play an audio file in the call
      class PlayAudio
        include XmlVerb

        def to_xml(xml)
          xml.PlayAudio(url)
        end
      end
    end
end
