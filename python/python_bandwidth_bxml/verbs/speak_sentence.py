"""
speak_sentence.py

Representation of Bandwidth's speak sentence BXML verb

@author Jacob Mulford
@copyright Bandwidth INC
"""

from lxml import etree

from .base_verb import AbstractBxmlVerb

SPEAK_SENTENCE_TAG = "SpeakSentence"


class SpeakSentence(AbstractBxmlVerb):

    def __init__(self, sentence=None, voice=None, locale=None):
        """
        Initializes the SpeakSentence class with the following parameters

        :param str sentence: The sentence to speak 
        :param str voice: The voice to speak the sentence
        :param str locale: The locale of the voice
        """
        self.sentence = sentence
        self.voice = voice
        self.locale = locale

    def to_xml(self):
        root = etree.Element(SPEAK_SENTENCE_TAG)
        if self.sentence is not None:
            root.text = self.sentence
        if self.voice is not None:
            root.set("voice", self.voice)
        if self.locale is not None:
            root.set("locale", self.locale)
        return etree.tostring(root).decode()
