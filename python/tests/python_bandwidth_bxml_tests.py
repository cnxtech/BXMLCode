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

if __name__ == '__main__':
    unittest.main()
