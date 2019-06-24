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
        """
        self.response_class.add_verb(hangup.Hangup())
        etree.fromstring(self.response_class.to_xml().encode('utf-8'), PARSER)


if __name__ == '__main__':
    unittest.main()
