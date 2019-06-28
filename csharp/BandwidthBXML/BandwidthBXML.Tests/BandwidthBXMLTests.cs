using System;
using Xunit;
using BandwidthBXML;

namespace BandwidthBXML.Tests
{
    public class BandwidthBXMLTests
    {
        [Fact]
        public void TestEmptyResponse()
        {
            Response response = new Response();
            string responseXml = response.ToXml();
            string expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response />";

            Assert.Equal(responseXml, expectedXml);
        }

        [Fact]
        public void TestHangupResponse()
        {
            Response response = new Response(new Hangup());
            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Hangup /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestPauseResponse()
        {
            Pause pause = new Pause();
            pause.Duration = 3;
            Response response = new Response(pause);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Pause duration=\"3\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestPlayAudioResponse()
        {
            PlayAudio playAudio = new PlayAudio();
            playAudio.Url = "https://test.com";
            playAudio.Username = "user";
            playAudio.Password = "pass";
            Response response = new Response(playAudio);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Response>";

            //Console.WriteLine(response_xml);

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestSpeakSentenceResponse()
        {
            SpeakSentence speakSentence = new SpeakSentence();
            speakSentence.Sentence = "test";
            speakSentence.Locale = "en_US";
            speakSentence.Voice = "susan";
            speakSentence.Gender = "female";
            Response response = new Response(speakSentence);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <SpeakSentence gender=\"female\" locale=\"en_US\" voice=\"susan\">test</SpeakSentence></Response>";

            Console.WriteLine(response_xml);

            Assert.Equal(response_xml,expected_xml);
        }
    }
}
