"""
response.py

Class that allows user to generate BXML programatically in python

@author Jacob Mulford
@copyright Bandwidth INC
"""

class Response():

    response_tag = "Response"
    xml_header = '<?xml version="1.0" encoding="UTF-8"?>'

    def __init__(self, verbs=[]):
        """
        Creates the Response class with an optional list of verbs

        :param list<Verb> verbs: optional ordered list of verbs to build the response
        """
        self.verbs = verbs

    def add_verb(self, verb):
        """
        Adds the Verb to the already existing verbs

        :param Verb verb: The Verb to add
        """
        self.verbs.push(verb)

    def to_xml(self):
        """
        Converts the Response class to its XML representation

        :rtype str: The XML representation of the Response class
        """
        xml_string = Response.xml_header
        xml_string += '<' + Response.response_tag + '>'
        for verb in self.verbs:
            xml_string += verb.to_xml()
        xml_string += '</' + Response.response_tag + '>' 

        return xml_string
