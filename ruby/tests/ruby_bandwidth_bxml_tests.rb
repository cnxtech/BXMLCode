require 'test/unit'
require 'nokogiri'

require_relative '../lib/ruby_bandwidth_bxml'

$XSD_PATH = 'schema.xsd'
$XSD_SCHEMA = Nokogiri::XML::Schema(File.read($XSD_PATH))

class RubyBandwidthBxmlTest < Test::Unit::TestCase
  def setup()
    @response_class = RubyBandwidthBxml::Response.new()
  end

  #def teardown()
  #  @str = ""
  #end

  # Test for no verbs
  def test_to_xml_no_verbs()
    expected_xml = '<?xml version="1.0" encoding="UTF-8"?><Response></Response>'
    assert_equal(expected_xml, @response_class.to_xml())
  end

  # Test that covers all verbs
  def test_to_xml_all_verbs()
    expected_xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Redirect redirectUrl=\"redirect url\" redirectMethod=\"redirect method\" tag=\"tag\"/><Hangup/><PlayAudio>url</PlayAudio><SpeakSentence voice=\"voice\" locale=\"locale\" gender=\"gender\">hi</SpeakSentence><Gather gatherUrl=\"gather url\" gatherMethod=\"gather method\" terminatingDigits=\"terminating digits\" tag=\"tag\" maxDigits=\"max digits\" interDigitTimeout=\"inter_digit_timeout\" username=\"username\" password=\"password\" firstDigitTimeout=\"first_digit_timeout\"><SpeakSentence voice=\"voice\" locale=\"locale\" gender=\"gender\">hi</SpeakSentence><PlayAudio>url</PlayAudio></Gather><SendDtmf>dtmf</SendDtmf><Pause duration=\"duration\"/><Forward to=\"to\" from=\"from\" callTimeout=\"calltimeout\" diversionTreatment=\"diversion treatment\" diversionReason=\"diversion reason\"/><Transfer transferCallerId=\"transfer caller id\" callTimeout=\"call timeout\" tag=\"tag\" transferCompleteUrl=\"transfer complete url\" transferCompleteMethod=\"transfer complete method\" username=\"username\" password=\"password\" diversionTreatment=\"diversion treatment\" diversionReason=\"diversion reason\"><PhoneNumber transferAnswerUrl=\"transfer answer url 1\" transferAnswerMethod=\"transfer answer method 1\" username=\"username 1\" password=\"password 1\" tag=\"tag 1\">number 1</PhoneNumber><PhoneNumber transferAnswerUrl=\"transfer answer url 2\" transferAnswerMethod=\"transfer answer method 2\" username=\"username 2\" password=\"password 2\" tag=\"tag 2\">number 2</PhoneNumber></Transfer></Response>"
    redirect = RubyBandwidthBxml::Redirect.new({
        :redirect_url => "redirect url",
        :redirect_method => "redirect method",
        :tag => "tag"
    })
    hangup = RubyBandwidthBxml::Hangup.new()
    play_audio = RubyBandwidthBxml::PlayAudio.new({
        :url => "url"
    })
    speak_sentence = RubyBandwidthBxml::SpeakSentence.new({
        :sentence => "hi",
        :voice => "voice",
        :locale => "locale",
        :gender => "gender"
    })
    gather = RubyBandwidthBxml::Gather.new({
        :gather_url => "gather url",
        :gather_method => "gather method",
        :terminating_digits => "terminating digits",
        :tag => "tag",
        :max_digits => "max digits",
        :inter_digit_timeout => "inter_digit_timeout",
        :username => "username",
        :password => "password",
        :first_digit_timeout => "first_digit_timeout",
        :speak_sentence => speak_sentence,
        :play_audio => play_audio
    })
    send_dtmf = RubyBandwidthBxml::SendDtmf.new({
        :dtmf => "dtmf"
    })
    pause = RubyBandwidthBxml::Pause.new({
        :duration => "duration"
    })
    forward = RubyBandwidthBxml::Forward.new({
        :to => "to",
        :from => "from",
        :call_timeout => "calltimeout",
        :diversion_treatment => "diversion treatment",
        :diversion_reason => "diversion reason"
    })
    phone_number_1 = RubyBandwidthBxml::PhoneNumber.new({
        :transfer_answer_url => "transfer answer url 1",
        :transfer_answer_method => "transfer answer method 1",
        :username => "username 1",
        :password => "password 1",
        :tag => "tag 1",
        :number => "number 1"
    })
    phone_number_2 = RubyBandwidthBxml::PhoneNumber.new({
        :transfer_answer_url => "transfer answer url 2",
        :transfer_answer_method => "transfer answer method 2",
        :username => "username 2",
        :password => "password 2",
        :tag => "tag 2",
        :number => "number 2"
    })
    transfer = RubyBandwidthBxml::Transfer.new({
        :transfer_caller_id => "transfer caller id",
        :call_timeout => "call timeout",
        :transfer_complete_url => "transfer complete url",
        :transfer_complete_method => "transfer complete method",
        :username => "username",
        :password => "password",
        :tag => "tag",
        :diversion_treatment => "diversion treatment",
        :diversion_reason => "diversion reason",
        :phone_numbers => [phone_number_1, phone_number_2]
    })
    @response_class.push(redirect)
    @response_class.push(hangup)
    @response_class.push(play_audio)
    @response_class.push(speak_sentence)
    @response_class.push(gather)
    @response_class.push(send_dtmf)
    @response_class.push(pause)
    @response_class.push(forward)
    @response_class.push(transfer)

    assert_equal(expected_xml, @response_class.to_xml())
  end

  # Validate forward against xsd
  def test_validate_forward()
    forward = RubyBandwidthBxml::Forward.new({
        :to => "+19999999999",
        :from => "+19999999999",
        :call_timeout => "3",
        :diversion_treatment => "none",
        :diversion_reason => "away"
    })
    @response_class.push(forward)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate pause against xsd
  def test_validate_pause()
    pause = RubyBandwidthBxml::Pause.new({
        :duration => 3
    })
    @response_class.push(pause)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate redirect against xsd
  def test_validate_redirect()
    redirect = RubyBandwidthBxml::Redirect.new({
        :redirect_url => "https://test.com",
        :redirect_method => "GET",
        :tag => "tag"
    })
    @response_class.push(redirect)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate transfer against xsd
  def test_validate_transfer()
    transfer = RubyBandwidthBxml::Transfer.new({
        :transfer_caller_id => "+19999999999",
        :call_timeout => "3",
        :tag => "tag",
        :transfer_complete_url => "https://test.com",
        :transfer_complete_method => "GET",
        :username => "user",
        :password => "pass",
        :diversion_treatment => "none",
        :diversion_reason => "away",
        :phone_numbers => [
            RubyBandwidthBxml::PhoneNumber.new({
                :number => "+19999999999",
                :transfer_answer_url => "https://test.com",
                :transfer_answer_method => "GET",
                :username => "user",
                :password => "pass"
            })
        ]
    })
    @response_class.push(transfer)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate gather against xsd with no children
  def test_validate_gather_no_children()
    gather = RubyBandwidthBxml::Gather.new({
        :gather_url => "https://test.com",
        :gather_method => "GET",
        :terminating_digits => "1",
        :tag => "tag",
        :maxDigits => "3",
        :inter_digit_timeout => "3",
        :username => "username",
        :password => "password",
        :firstDigitTimeout => "3"
    })
    @response_class.push(gather)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate gather against xsd with play audio child
  def test_validate_gather_play_audio()
    gather = RubyBandwidthBxml::Gather.new({
        :gather_url => "https://test.com",
        :gather_method => "GET",
        :terminating_digits => "1",
        :tag => "tag",
        :max_digits => "3",
        :inter_digit_timeout => "3",
        :username => "username",
        :password => "password",
        :first_digit_timeout => "3",
        :play_audio => RubyBandwidthBxml::PlayAudio.new({
            :url => "https://test.mp3"
        })
    })
    @response_class.push(gather)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate gather against xsd with speak sentence child
  def test_validate_gather_speak_sentence()
    gather = RubyBandwidthBxml::Gather.new({
        :gather_url => "https://test.com",
        :gather_method => "GET",
        :terminating_digits => "1",
        :tag => "tag",
        :max_digits => "3",
        :inter_digit_timeout => "3",
        :username => "username",
        :password => "password",
        :first_digit_timeout => "3",
        :speak_sentence => RubyBandwidthBxml::SpeakSentence.new({
            :sentence => "Test",
            :voice => "susan",
            :locale => "en_US"
        })
    })
    @response_class.push(gather)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end
  # Validate send_dtmf against xsd
  def test_validate_send_dtmf()
    send_dtmf = RubyBandwidthBxml::SendDtmf.new({
        :dtmf => "123"
    })
    @response_class.push(send_dtmf)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end
  
  # Validate hangup against xsd
  def test_validate_hangup()
    hangup = RubyBandwidthBxml::Hangup.new()
    @response_class.push(hangup)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate play_audio against xsd
  def test_validate_play_audio()
    play_audio = RubyBandwidthBxml::PlayAudio.new({
        :url => "https://test.mp3",
        :username => "user",
        :password => "pass"
    })
    @response_class.push(play_audio)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

  # Validate speak_sentence against xsd
  def test_validate_speak_sentence()
    speak_sentence = RubyBandwidthBxml::SpeakSentence.new({
        :sentence => "Test",
        :voice => "susan",
        :locale => "en_US"
    })
    @response_class.push(speak_sentence)
    xml_string = @response_class.to_xml()
    xml_object = Nokogiri::XML(xml_string)
    assert_equal(0, $XSD_SCHEMA.validate(xml_object).length)
  end

end
