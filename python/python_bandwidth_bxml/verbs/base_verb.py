"""
abstract_bxml_verb.py

Defines the abstract class for all BXML verbs

@author Jacob Mulford
@copyright Bandwidth INC
"""

from abc import ABC, abstractmethod

class AbstractBxmlVerb(ABC):

    def __init__(self, values):
        """
        Initializes the values attribute to build the BXML

        @param values [dict]: The
