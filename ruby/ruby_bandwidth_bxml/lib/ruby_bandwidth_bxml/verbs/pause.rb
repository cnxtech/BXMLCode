module RubyBandwidthBxml
    module Verbs
      class SendDtmf
        include XmlVerb

        def to_xml(xml)
          xml.Pause(compact_hash({
           'duration' => duration
        }))
        end
      end
    end
end
