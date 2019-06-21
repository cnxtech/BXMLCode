require_relative 'xml_verb'

module RubyBandwidthBxml
  class Forward
    include XmlVerb

    def to_xml(xml)
      xml.Forward(compact_hash({
       'to' => to,
       'from' => from,
       'callTimeout' => call_timeout,
       'diversionTreatment' => diversion_treatment,
       'diversionReason' => diversion_reason
      }))
    end
  end
end
