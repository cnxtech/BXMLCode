"""
python_bandwidh_bxml_tests.py

Unit tests for the BXML generator

@author Jacob Mulford
@copyright Bandwidth INC
"""

import unittest

import python_bandwidth_bxml.response as response


class TestPythonBandwidthBxml(unittest.TestCase):

    def setUp(self):
        self.response_class = response.Response()

    def tearDown(self):
        pass

    def test_response_no_verbs(self):
        """
        Test case for a Response object with no verbs

        """
        expected_xml = '<?xml version="1.0" encoding="UTF-8"?><Response></Response>'
        self.assertEqual(expected_xml, self.response_class.to_xml())


if __name__ == '__main__':
    unittest.main()
