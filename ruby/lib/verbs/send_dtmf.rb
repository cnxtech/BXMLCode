require_relative 'xml_verb'

module RubyBandwidthBxml
  class SendDtmf
    include XmlVerb

    def to_xml(xml)
      xml.SendDtmf(dtmf)
    end
  end
end
