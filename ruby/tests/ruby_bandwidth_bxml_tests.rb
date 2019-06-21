require 'test/unit'

require_relative '../lib/ruby_bandwidth_bxml'

class RubyBandwidthBxmlTest < Test::Unit::TestCase
  def setup()
    @response_class = RubyBandwidthBxml::Response.new()
  end

  #def teardown()
  #  @str = ""
  #end

  def test_to_xml_no_verbs()
    expected_xml = '<?xml version="1.0" encoding="UTF-8"?><Response></Response>'
    assert_equal(expected_xml, @response_class.to_xml())
  end

  def test_to_xml_all_verbs()
    expected_xml = '<?xml version="1.0" encoding="UTF-8"?><Response><Redirect redirectUrl="redirect url" redirectMethod="redirect method" tag="tag"/><Hangup/><PlayAudio>url</PlayAudio><SpeakSentence voice="voice" locale="locale" gender="gender">hi</SpeakSentence><Gather gatherUrl="gather url" gatherMethod="gather method" terminatingDigits="terminating digits" tag="tag" timeout="timeout" username="username" password="password"><SpeakSentence voice="voice" locale="locale" gender="gender">hi</SpeakSentence><PlayAudio>url</PlayAudio></Gather><SendDtmf>dtmf</SendDtmf><Pause duration="duration"/><Forward to="to" from="from" callTimeout="calltimeout" diversionTreatment="diversion treatment" diversionReason="diversion reason"/><Transfer transferCallerId="transfer caller id" callTimeout="call timeout" tag="tag" transferCompleteUrl="transfer complete url" transferCompleteMethod="transfer complete method" username="username" password="password" diversionTreatment="diversion treatment" diversionReason="diversion reason"><PhoneNumber transferAnswerUrl="transfer answer url 1" transferAnswerMethod="transfer answer method 1" username="username 1" password="password 1" tag="tag 1">number 1</PhoneNumber><PhoneNumber transferAnswerUrl="transfer answer url 2" transferAnswerMethod="transfer answer method 2" username="username 2" password="password 2" tag="tag 2">number 2</PhoneNumber></Transfer></Response>'
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
        :maxDigits => "max digits",
        :interDigitTimeout => "inter_digit_timeout",
        :timeout => "timeout",
        :username => "username",
        :password => "password",
        :firstDigitTimeout => "first_digit_timeout",
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
end
