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

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestSendDtmfResponse()
        {
            SendDtmf sendDtmf = new SendDtmf();
            sendDtmf.Digits = "123";
            Response response = new Response(sendDtmf);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <SendDtmf>123</SendDtmf></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestForwardResponse()
        {
            Forward forward = new Forward();
            forward.To = "+18888888888";
            forward.From = "+17777777777";
            forward.DiversionTreatment = "none";
            forward.DiversionReason = "away";
            Response response = new Response(forward);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Forward to=\"+18888888888\" from=\"+17777777777\" callTimeout=\"0\" diversionTreatment=\"none\" diversionReason=\"away\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestTransferResponse()
        {
            Forward forward = new Forward();
            forward.To = "+18888888888";
            forward.From = "+17777777777";
            forward.DiversionTreatment = "none";
            forward.DiversionReason = "away";
            Response response = new Response(forward);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Forward to=\"+18888888888\" from=\"+17777777777\" callTimeout=\"0\" diversionTreatment=\"none\" diversionReason=\"away\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestGatherResponseNoNestedVerb()
        {
            Gather gather = new Gather();
            gather.GatherUrl = "https://test.com";
            gather.GatherMethod = "POST";
            gather.TerminatingDigits = "123";
            gather.Tag = "tag";
            gather.MaxDigits = 3;
            gather.InterDigitTimeout = 3;
            gather.Username = "user";
            gather.Password = "pass";
            gather.FirstDigitTimeout = 3;
            Response response = new Response(gather);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Gather gatherUrl=\"https://test.com\" gatherMethod=\"POST\" terminatingDigits=\"123\" tag=\"tag\" maxDigits=\"3\" interDigitTimeout=\"3\" username=\"user\" password=\"pass\" firstDigitTimeout=\"3\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestGatherResponseNestedSpeakSentence()
        {
            Gather gather = new Gather();
            gather.GatherUrl = "https://test.com";
            gather.GatherMethod = "POST";
            gather.TerminatingDigits = "123";
            gather.Tag = "tag";
            gather.MaxDigits = 3;
            gather.InterDigitTimeout = 3;
            gather.Username = "user";
            gather.Password = "pass";
            gather.FirstDigitTimeout = 3;
            SpeakSentence speakSentence = new SpeakSentence();
            speakSentence.Sentence = "Test";
            gather.SpeakSentence = speakSentence;
            Response response = new Response(gather);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Gather gatherUrl=\"https://test.com\" gatherMethod=\"POST\" terminatingDigits=\"123\" tag=\"tag\" maxDigits=\"3\" interDigitTimeout=\"3\" username=\"user\" password=\"pass\" firstDigitTimeout=\"3\">    <SpeakSentence>Test</SpeakSentence>  </Gather></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        [Fact]
        public void TestGatherResponseNestedPlayAudio()
        {
            Gather gather = new Gather();
            gather.GatherUrl = "https://test.com";
            gather.GatherMethod = "POST";
            gather.TerminatingDigits = "123";
            gather.Tag = "tag";
            gather.MaxDigits = 3;
            gather.InterDigitTimeout = 3;
            gather.Username = "user";
            gather.Password = "pass";
            gather.FirstDigitTimeout = 3;
            PlayAudio playAudio = new PlayAudio();
            playAudio.Url = "https://test.com";
            gather.PlayAudio = playAudio;
            Response response = new Response(gather);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Gather gatherUrl=\"https://test.com\" gatherMethod=\"POST\" terminatingDigits=\"123\" tag=\"tag\" maxDigits=\"3\" interDigitTimeout=\"3\" username=\"user\" password=\"pass\" firstDigitTimeout=\"3\">    <PlayAudio>https://test.com</PlayAudio>  </Gather></Response>";

            Assert.Equal(response_xml,expected_xml);
        }
    }
}
