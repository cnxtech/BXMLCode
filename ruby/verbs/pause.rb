require_relative 'xml_verb'

module RubyBandwidthBxml
  class Pause
    include XmlVerb

    def to_xml(xml)
      xml.Pause(compact_hash({
       'duration' => duration
    }))
    end
  end
end
