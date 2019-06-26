"""
sample_script.py

A script that represents how to use Bandwidth's BXML builder in Python

@author Jacob Mulford
@copyright Bandwidth INC
"""

import python_bandwidth_bxml

### Make a hangup response ###

response = python_bandwidth_bxml.response.Response()
hangup = python_bandwidth_bxml.verbs.hangup.Hangup()

response.add_verb(hangup)
print(response.to_xml())

### Make a send dtmf response ###

response = python_bandwidth_bxml.response.Response()
send_dtmf = python_bandwidth_bxml.verbs.send_dtmf.SendDtmf("123")

response.add_verb(send_dtmf)
print(response.to_xml())

### Make a pause response ###

response = python_bandwidth_bxml.response.Response()
pause = python_bandwidth_bxml.verbs.pause.Pause(3)

response.add_verb(pause)
print(response.to_xml())

### Make a redirect response ###

response = python_bandwidth_bxml.response.Response()
redirect = python_bandwidth_bxml.verbs.redirect.Redirect(
    redirect_url="https://test.com",
    redirect_method="GET",
    tag="tag"
)

response.add_verb(redirect)
print(response.to_xml())

### Make a play audio response ###

response = python_bandwidth_bxml.response.Response()
play_audio = python_bandwidth_bxml.verbs.play_audio.PlayAudio(
    url="https://test.com",
    username="user",
    password="pass"
)

response.add_verb(play_audio)
print(response.to_xml())

### Make a speak sentence response ###

response = python_bandwidth_bxml.response.Response()
speak_sentence = python_bandwidth_bxml.verbs.speak_sentence.SpeakSentence(
    sentence="Test",
    voice="susan",
    locale="en_US"
)

response.add_verb(speak_sentence)
print(response.to_xml())

### Make a forward response ###

response = python_bandwidth_bxml.response.Response()
forward = python_bandwidth_bxml.verbs.forward.Forward(
    to="+19999999999",
    from_="+19998888888", #Note the underscore since from is a keyword in python
    call_timeout=3,
    diversion_treatment="none", 
    diversion_reason="away", 
)

response.add_verb(forward)
print(response.to_xml())

### Make a transfer response ###

response = python_bandwidth_bxml.response.Response()

#Phone numbers are required for the transfer verb
phone_number_1 = python_bandwidth_bxml.verbs.phone_number.PhoneNumber(
    number="+18888888888",
    transfer_answer_url="https://test.com",
    transfer_answer_method="GET",
    username="user",
    password="pass",
    tag="tag"
)
phone_number_2 = python_bandwidth_bxml.verbs.phone_number.PhoneNumber(
    number="+18888888889",
    transfer_answer_url="https://test2.com",
    transfer_answer_method="GET",
    username="user2",
    password="pass2",
    tag="tag2"
)
transfer = python_bandwidth_bxml.verbs.transfer.Transfer(
    transfer_caller_id="+17777777777",
    call_timeout=3,
    tag="tag",
    transfer_complete_url="https://test.com",
    transfer_complete_method="GET",
    username="user",
    password="pass",
    diversion_treatment="none",
    diversion_reason="away",
    phone_numbers=[phone_number_1, phone_number_2]
)

response.add_verb(transfer)
print(response.to_xml())

### Make a gather response ###

response = python_bandwidth_bxml.response.Response()

gather = python_bandwidth_bxml.verbs.gather.Gather(
    gather_url="https://test.com",
    gather_method="GET",
    terminating_digits="123",
    tag="tag",
    max_digits=3,
    inter_digit_timeout=3,
    username="user",
    password="pass",
    first_digit_timeout=3
)

#Gathers can be optionally nested with one of the PlayAudio or SpeakSentence verbs
speak_sentence = python_bandwidth_bxml.verbs.speak_sentence.SpeakSentence(
    sentence="Test",
    voice="susan",
    locale="en_US"
)
gather_nested_speak_sentence = python_bandwidth_bxml.verbs.gather.Gather(
    gather_url="https://test.com",
    gather_method="GET",
    terminating_digits="123",
    tag="tag",
    max_digits=3,
    inter_digit_timeout=3,
    username="user",
    password="pass",
    first_digit_timeout=3,
    speak_sentence=speak_sentence
)

play_audio = python_bandwidth_bxml.verbs.play_audio.PlayAudio(
    url="https://test.com",
    username="user",
    password="pass"
)
gather_nested_play_audio = python_bandwidth_bxml.verbs.gather.Gather(
    gather_url="https://test.com",
    gather_method="GET",
    terminating_digits="123",
    tag="tag",
    max_digits=3,
    inter_digit_timeout=3,
    username="user",
    password="pass",
    first_digit_timeout=3,
    play_audio=play_audio
)

response.add_verb(gather)
response.add_verb(gather_nested_speak_sentence)
response.add_verb(gather_nested_play_audio)
print(response.to_xml())
