module RubyBandwidthBxml
    module Verbs
      # The Redirect verb is used to redirect the current XML execution to another URL
      class Redirect
        include XmlVerb

        def to_xml(xml)
          xml.Redirect(compact_hash({
           'redirectUrl' => redirect_url,
           'redirectMethod' => redirect_method,
           'tag' => tag
          }))
        end
      end
    end
end
