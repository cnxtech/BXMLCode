=begin
sample_script.rb

A script that shows how to use the RubyBandwidthBxml package to create BXML

@author Jacob Mulford
@copyright Bandwidth INC
=end
require_relative "lib/ruby_bandwidth_bxml"

### Create a hangup response ###
response = RubyBandwidthBxml::Response.new()
hangup = RubyBandwidthBxml::Hangup.new()

response.push(hangup)
puts response.to_xml()

### Create a forward response ###
response = RubyBandwidthBxml::Response.new()
forward = RubyBandwidthBxml::Forward.new({
    :to => "+19999999999",
    :from => "+19999999999",
    :call_timeout => "3",
    :diversion_treatment => "none",
    :diversion_reason => "away"
})

response.push(forward)
puts response.to_xml()

### Create a pause response ###
response = RubyBandwidthBxml::Response.new()
pause = RubyBandwidthBxml::Pause.new({
    :duration => 3
})

response.push(pause)
puts response.to_xml()

### Create a redirect response ###
response = RubyBandwidthBxml::Response.new()
redirect = RubyBandwidthBxml::Redirect.new({
    :redirect_url => "https://test.com",
    :redirect_method => "GET",
    :tag => "tag",
    :username => "user",
    :password => "pass"
})

response.push(redirect)
puts response.to_xml()

### Create a transfer response ###
response = RubyBandwidthBxml::Response.new()
phone_number = RubyBandwidthBxml::PhoneNumber.new({
    :number => "+19999999999",
    :transfer_answer_url => "https://test.com",
    :transfer_answer_method => "GET",
    :username => "user",
    :password => "pass"
})
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
    :phone_numbers => [phone_number]
})

response.push(transfer)
puts response.to_xml()

### Create a speak sentence response ###
response = RubyBandwidthBxml::Response.new()
speak_sentence = RubyBandwidthBxml::SpeakSentence.new({
    :sentence => "Test",
    :voice => "susan",
    :locale => "en_US",
    :gender => "female"
})

response.push(speak_sentence)
puts response.to_xml()

### Create a play audio response ###
response = RubyBandwidthBxml::Response.new()
play_audio = RubyBandwidthBxml::PlayAudio.new({
    :url => "https://test.mp3",
    :username => "user",
    :password => "pass"
})

response.push(play_audio)
puts response.to_xml()

### Create a gather response ###
response = RubyBandwidthBxml::Response.new()
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
    :repeat_count => "4"
})

#Gathers can be optionally nested with one of the PlayAudio or SpeakSentence verbs
speak_sentence = RubyBandwidthBxml::SpeakSentence.new({
    :sentence => "Test",
    :voice => "susan",
    :locale => "en_US"
})
gather_nested_speak_sentence = RubyBandwidthBxml::Gather.new({
    :gather_url => "https://test.com",
    :gather_method => "GET",
    :terminating_digits => "1",
    :tag => "tag",
    :max_digits => "3",
    :inter_digit_timeout => "3",
    :username => "username",
    :password => "password",
    :first_digit_timeout => "3",
    :speak_sentence => speak_sentence
})

play_audio = RubyBandwidthBxml::PlayAudio.new({
    :url => "https://test.mp3",
    :username => "user",
    :password => "pass"
})
gather_nested_play_audio = RubyBandwidthBxml::Gather.new({
    :gather_url => "https://test.com",
    :gather_method => "GET",
    :terminating_digits => "1",
    :tag => "tag",
    :max_digits => "3",
    :inter_digit_timeout => "3",
    :username => "username",
    :password => "password",
    :first_digit_timeout => "3",
    :play_audio => play_audio
})

response.push(gather)
response.push(gather_nested_speak_sentence)
response.push(gather_nested_play_audio)
puts response.to_xml()

### Create a send dtmf response ###
response = RubyBandwidthBxml::Response.new()
send_dtmf = RubyBandwidthBxml::SendDtmf.new({
    :dtmf => "123"
})

response.push(send_dtmf)
puts response.to_xml()

### Create a response that has speak sentence and play audio tags ###
response = RubyBandwidthBxml::Response.new()
speak_sentence = RubyBandwidthBxml::SpeakSentence.new({
    :sentence => "Test",
    :voice => "susan",
    :locale => "en_US",
    :gender => "female"
})

play_audio = RubyBandwidthBxml::PlayAudio.new({
    :url => "https://test.mp3",
    :username => "user",
    :password => "pass"
})

response.push(speak_sentence)
response.push(play_audio)
puts response.to_xml()
