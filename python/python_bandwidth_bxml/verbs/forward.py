"""
forward.py

Representation of Bandwidth's forward BXML verb

@author Jacob Mulford
@copyright Bandwidth INC
"""

from lxml import etree

from .base_verb import AbstractBxmlVerb

FORWARD_TAG = "Forward"


class Forward(AbstractBxmlVerb):

    def __init__(self, to=None, from_=None, call_timeout=None, diversion_treatment=None, diversion_reason=None):
        """
        Initializes the Forward class with the following parameters

        :param str to: The phone number destination of the call
        :param str from_: The phone number that the recipient will receive the call from
        :param int call_timeout: The number of seconds to wait before timing out the call
        :param str diversion_treatment: The diversion treatment for the call
        :param str diversion_reason: The diversion reason for the call
        """
        self.to = to
        self.from_ = from_
        self.call_timeout = str(call_timeout)
        self.diversion_treatment = diversion_treatment
        self.diversion_reason = diversion_reason

    def to_xml(self):
        root = etree.Element(FORWARD_TAG, to=self.to, callTimeout=self.call_timeout,
                            diversionTreatment=self.diversion_treatment, diversionReason=self.diversion_reason)
        root.set("from", self.from_) # Workaround since `from` is a keyword in Python and needs to be declared as an attribute separately
        return etree.tostring(root).decode()
