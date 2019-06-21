require_relative 'xml_verb'

module RubyBandwidthBxml  
  # The Hangup verb is used to hangup current call
  class Hangup
    include XmlVerb

    def to_xml(xml)
      xml.Hangup()
    end
  end
end
