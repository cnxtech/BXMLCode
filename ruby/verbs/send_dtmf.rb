module Bandwidth
  module Xml
    module Verbs
      class SendDtmf
        include XmlVerb

        def to_xml(xml)
          xml.SendDtmf(dtmf)
        end
      end
    end
  end
end
