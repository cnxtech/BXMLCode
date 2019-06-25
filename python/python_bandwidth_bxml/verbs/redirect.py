"""
redirect.py

Representation of Bandwidth's redirect BXML verb

@author Jacob Mulford
@copyright Bandwidth INC
"""

from lxml import etree

from .base_verb import AbstractBxmlVerb

REDIRECT_TAG = "Redirect"


class Redirect(AbstractBxmlVerb):

    def __init__(self, redirect_url=None, redirect_method=None, tag=None):
        """
        Initializes the Redirect class with the following parameters

        :param str redirect_url: The url to retrieve the next BXML
        :param str redirect_method: The HTTP method used to retrieve the next url
        :param str tag: Optional tag to include in the callback
        """
        self.redirect_url = redirect_url
        self.redirect_method = redirect_method
        self.tag = tag

    def to_xml(self):
        root = etree.Element(REDIRECT_TAG)
        if self.redirect_url is not None:
            root.set("redirectUrl", self.redirect_url)
        if self.redirect_method is not None:
            root.set("redirectMethod", self.redirect_method)
        if self.tag is not None:
            root.set("tag", self.tag)
        return etree.tostring(root).decode()
