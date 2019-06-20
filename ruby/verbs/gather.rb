module Bandwidth
  module Xml
    module Verbs
      # The Gather verb is used to collect digits for some period of time
      class Gather
        include XmlVerb

        def to_xml(xml)
          xml.Gather(compact_hash({
           'gatherUrl' => gather_url,
           'gatherMethod' => gather_method,
           'terminatingDigits' => terminating_digits,
           'tag' => tag,
           'maxDigits' => max_digits,
           'interDigitTimeout' => inter_digit_timeout,
           'timeout' => timeout,
           'username' => username,
           'password' => password,
           'firstDigitTimeout' => first_digit_timeout
          })) do
            def embedded_xml(xml, property, type)
              if property
                s = if property.is_a?(type)
                    then property
                    else type.new(property)
                    end
                s.to_xml(xml)
              end
            end
            embedded_xml(xml, speak_sentence, SpeakSentence)
            embedded_xml(xml, play_audio, PlayAudio)
          end
        end
      end
    end
  end
end
