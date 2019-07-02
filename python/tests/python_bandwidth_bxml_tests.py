"""
python_bandwidh_bxml_tests.py

Unit tests for the BXML generator

@author Jacob Mulford
@copyright Bandwidth INC
"""
import unittest

from lxml import etree

import python_bandwidth_bxml.response as response
from python_bandwidth_bxml.verbs import hangup as hangup
from python_bandwidth_bxml.verbs import send_dtmf as send_dtmf
from python_bandwidth_bxml.verbs import forward as forward
from python_bandwidth_bxml.verbs import pause as pause
from python_bandwidth_bxml.verbs import redirect as redirect
from python_bandwidth_bxml.verbs import play_audio as play_audio
from python_bandwidth_bxml.verbs import speak_sentence as speak_sentence
from python_bandwidth_bxml.verbs import phone_number as phone_number
from python_bandwidth_bxml.verbs import transfer as transfer
from python_bandwidth_bxml.verbs import gather as gather

schema_doc = None
with open("schema.xsd", "r") as f:
    schema_doc = etree.parse(f)
schema = etree.XMLSchema(schema_doc)
PARSER = etree.XMLParser(schema=schema)


class TestPythonBandwidthBxml(unittest.TestCase):

    def setUp(self):
        self.response_class = response.Response()

    def tearDown(self):
        self.response_class = None

    def test_response_no_verbs(self):
        """
        Test case for a Response object with no verbs
        """
        expected_xml = '<?xml version="1.0" encoding="UTF-8"?><Response></Response>'
        self.assertEqual(expected_xml, self.response_class.to_xml())

    def test_hangup(self):
        """
        Test case for the hangup verb

        etree.fromstring expects strings to be encoded with utf-8, which is
        why response_class.to_xml() is followed by encode('utf-8').

        Also these tests raise an exception if the parse is incorrect. Python
        does not have a assert_does_not_raise test case, and most Python developers
        tend to just leave the statement as is if an error would be raised.
        """
        self.response_class.add_verb(hangup.Hangup())
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_send_dtmf(self):
        """
        Test case for send_dtmf verb
        """
        self.response_class.add_verb(send_dtmf.SendDtmf("123"))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_forward(self):
        """
        Test case for the forward verb
        """
        self.response_class.add_verb(forward.Forward(
            to="+19999999999",
            from_="+19999999999",
            call_timeout=3,
            diversion_treatment="none",
            diversion_reason="away"
        ))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_pause(self):
        """
        Test case for the pause verb
        """
        self.response_class.add_verb(pause.Pause(3))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_redirect(self):
        """
        Test case for the redirect verb
        """
        self.response_class.add_verb(redirect.Redirect(redirect_url="https://test.com", redirect_method="GET", tag="tag", username="user", password="pass"))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_play_audio(self):
        """
        Test case for the play audio verb
        """
        self.response_class.add_verb(play_audio.PlayAudio(url="https://test.com", username="user", password="pass"))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_speak_sentence(self):
        """
        Test case for the speak sentence verb
        """
        self.response_class.add_verb(speak_sentence.SpeakSentence(sentence="Test", voice="susan", locale="en_US", gender="female"))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_transfer(self):
        """
        Test case for the transfer verb
        """
        phone_number_1 = phone_number.PhoneNumber(number="+18888888888", transfer_answer_url="https://test.com", transfer_answer_method="GET", username="user", password="pass", tag="tag")
        phone_number_2 = phone_number.PhoneNumber(number="+18888888889", transfer_answer_url="https://test.com", transfer_answer_method="GET", username="user", password="pass", tag="tag")

        self.response_class.add_verb(transfer.Transfer(transfer_caller_id="+17777777777", call_timeout=3, tag="tag", transfer_complete_url="https://test.com",
                transfer_complete_method="GET", username="user", password="pass", diversion_treatment="none",
                diversion_reason="away", phone_numbers=[phone_number_1, phone_number_2]))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_gather_no_nested_verbs(self):
        """
        Test case for the gather verb with no nested verbs
        """
        self.response_class.add_verb(gather.Gather(gather_url="https://test.com", gather_method="GET", terminating_digits="123", tag="tag",
                max_digits=3, inter_digit_timeout=3, username="user", password="pass", first_digit_timeout=3))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_gather_nested_speak_sentence(self):
        """
        Test case for the gather verb with a nested SpeakSentence
        """
        speak_sentence_ = speak_sentence.SpeakSentence(sentence="Test", voice="susan", locale="en_US")
        self.response_class.add_verb(gather.Gather(gather_url="https://test.com", gather_method="GET", terminating_digits="123", tag="tag",
                max_digits=3, inter_digit_timeout=3, username="user", password="pass", first_digit_timeout=3,
                speak_sentence=speak_sentence_))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

    def test_gather_nested_play_audio(self):
        """
        Test case for the gather verb with a nested PlayAudio
        """
        play_audio_ = play_audio.PlayAudio(url="https://test.com", username="user", password="pass")
        self.response_class.add_verb(gather.Gather(gather_url="https://test.com", gather_method="GET", terminating_digits="123", tag="tag",
                max_digits=3, inter_digit_timeout=3, username="user", password="pass", first_digit_timeout=3,
                play_audio=play_audio_))
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)

if __name__ == '__main__':
    unittest.main()
