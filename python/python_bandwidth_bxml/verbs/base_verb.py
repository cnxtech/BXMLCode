"""
abstract_bxml_verb.py

Defines the abstract class for all BXML verbs

@author Jacob Mulford
@copyright Bandwidth INC
"""

from abc import ABC, abstractmethod


class AbstractBxmlVerb(ABC):

    def __init__(self, values={}):
        """
        Initializes the values attribute to build the BXML

        :param dict values: The values to build the BXML
        """
        self.values = values

    @abstractmethod
    def to_xml(self):
        """
        Converts the class into its xml representation

        :return str: The string xml representation
        """
        pass
