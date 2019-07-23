using System;
using Xunit;
using BandwidthBXML;

namespace BandwidthBXML.Tests
{
    public class BandwidthBXMLTests
    {
        /**
         * Test that Response is built properly
         */
        [Fact]
        public void TestEmptyResponse()
        {
            Response response = new Response();
            string responseXml = response.ToXml();
            string expectedXml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response />";

            Assert.Equal(responseXml, expectedXml);
        }

        /**
         * Test for Hangup verb
         */
        [Fact]
        public void TestHangupResponse()
        {
            Response response = new Response(new Hangup());
            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Hangup /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for Pause verb
         */
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

        /**
         * Test for Pause verb with default Duration value
         */
        [Fact]
        public void TestPauseResponseDefaultDuration()
        {
            Pause pause = new Pause();
            Response response = new Response(pause);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Pause duration=\"1\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for PlayAudio
         */
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

        /**
         * Test for SpeakSentence
         */
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

        /**
         * Test for SendDtmf
         */
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

        /**
         * Test for Forward
         */
        [Fact]
        public void TestForwardResponse()
        {
            Forward forward = new Forward();
            forward.To = "+18888888888";
            forward.From = "+17777777777";
            forward.DiversionTreatment = "none";
            forward.DiversionReason = "away";
            forward.CallTimeout = 3;
            Response response = new Response(forward);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Forward to=\"+18888888888\" from=\"+17777777777\" callTimeout=\"3\" diversionTreatment=\"none\" diversionReason=\"away\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for Forward with default CallTimeout value
         */
        [Fact]
        public void TestForwardResponseDefaultCallTimeout()
        {
            Forward forward = new Forward();
            forward.To = "+18888888888";
            forward.From = "+17777777777";
            forward.DiversionTreatment = "none";
            forward.DiversionReason = "away";
            Response response = new Response(forward);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Forward to=\"+18888888888\" from=\"+17777777777\" callTimeout=\"30\" diversionTreatment=\"none\" diversionReason=\"away\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for Transfer
         */
        [Fact]
        public void TestTransferResponse()
        {
            Transfer transfer = new Transfer();
            transfer.TransferCallerId = "+17777777777";
            transfer.CallTimeout = 3;
            transfer.Tag = "tag";
            transfer.TransferCompleteUrl = "https://test.com";
            transfer.TransferCompleteMethod = "GET";
            transfer.Username = "user";
            transfer.Password = "pass";
            transfer.DiversionTreatment = "none";
            transfer.DiversionReason = "away";
            PhoneNumber phoneNumber1 = new PhoneNumber();
            phoneNumber1.Number = "+18888888888";
            phoneNumber1.TransferAnswerUrl = "https://test.com";
            phoneNumber1.TransferAnswerMethod = "POST";
            phoneNumber1.Username = "user";
            phoneNumber1.Password = "pass";
            phoneNumber1.Tag = "tag";
            PhoneNumber phoneNumber2 = new PhoneNumber();
            phoneNumber2.Number = "+18888888888";
            phoneNumber2.TransferAnswerUrl = "https://test.com";
            phoneNumber2.TransferAnswerMethod = "POST";
            phoneNumber2.Username = "user";
            phoneNumber2.Password = "pass";
            phoneNumber2.Tag = "tag";
            transfer.PhoneNumbers = new PhoneNumber[] {phoneNumber1, phoneNumber2};
            Response response = new Response(transfer);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Transfer transferCallerId=\"+17777777777\" callTimeout=\"3\" tag=\"tag\" transferCompleteUrl=\"https://test.com\" transferCompleteMethod=\"GET\" username=\"user\" password=\"pass\" diversionTreatment=\"none\" diversionReason=\"away\">    <PhoneNumber tag=\"tag\" username=\"user\" password=\"pass\" transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"POST\">+18888888888</PhoneNumber>    <PhoneNumber tag=\"tag\" username=\"user\" password=\"pass\" transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"POST\">+18888888888</PhoneNumber>  </Transfer></Response>";

            Assert.Equal(response_xml,expected_xml);
        }
        
        /**
         * Test for Transfer with default CallTimeout value
         */
        [Fact]
        public void TestTransferResponseDefaultCallTimeout()
        {
            Transfer transfer = new Transfer();
            transfer.TransferCallerId = "+17777777777";
            transfer.Tag = "tag";
            transfer.TransferCompleteUrl = "https://test.com";
            transfer.TransferCompleteMethod = "GET";
            transfer.Username = "user";
            transfer.Password = "pass";
            transfer.DiversionTreatment = "none";
            transfer.DiversionReason = "away";
            PhoneNumber phoneNumber1 = new PhoneNumber();
            phoneNumber1.Number = "+18888888888";
            phoneNumber1.TransferAnswerUrl = "https://test.com";
            phoneNumber1.TransferAnswerMethod = "POST";
            phoneNumber1.Username = "user";
            phoneNumber1.Password = "pass";
            phoneNumber1.Tag = "tag";
            PhoneNumber phoneNumber2 = new PhoneNumber();
            phoneNumber2.Number = "+18888888888";
            phoneNumber2.TransferAnswerUrl = "https://test.com";
            phoneNumber2.TransferAnswerMethod = "POST";
            phoneNumber2.Username = "user";
            phoneNumber2.Password = "pass";
            phoneNumber2.Tag = "tag";
            transfer.PhoneNumbers = new PhoneNumber[] {phoneNumber1, phoneNumber2};
            Response response = new Response(transfer);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Transfer transferCallerId=\"+17777777777\" callTimeout=\"30\" tag=\"tag\" transferCompleteUrl=\"https://test.com\" transferCompleteMethod=\"GET\" username=\"user\" password=\"pass\" diversionTreatment=\"none\" diversionReason=\"away\">    <PhoneNumber tag=\"tag\" username=\"user\" password=\"pass\" transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"POST\">+18888888888</PhoneNumber>    <PhoneNumber tag=\"tag\" username=\"user\" password=\"pass\" transferAnswerUrl=\"https://test.com\" transferAnswerMethod=\"POST\">+18888888888</PhoneNumber>  </Transfer></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for Gather with no nested verbs
         */
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

        /**
         * Test for Gather with default max digits and timeout values
         */
        [Fact]
        public void TestGatherResponseDefaultValues()
        {
            Gather gather = new Gather();
            gather.GatherUrl = "https://test.com";
            gather.GatherMethod = "POST";
            gather.TerminatingDigits = "123";
            gather.Tag = "tag";
            gather.Username = "user";
            gather.Password = "pass";
            Response response = new Response(gather);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Gather gatherUrl=\"https://test.com\" gatherMethod=\"POST\" terminatingDigits=\"123\" tag=\"tag\" maxDigits=\"50\" interDigitTimeout=\"5\" username=\"user\" password=\"pass\" firstDigitTimeout=\"5\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for Gather with a nested SpeakSentence tag
         */
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

        /**
         * Test for Gather with a nested PlayAudio tag
         */
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

        /**
         * Test for Redirect
         */
        [Fact]
        public void TestRedirectResponse()
        {
            Redirect redirect = new Redirect();
            redirect.RedirectUrl = "https://test.com";
            redirect.RedirectMethod = "GET";
            redirect.Tag = "Tag";
            redirect.Username = "user";
            redirect.Password = "pass";

            Response response = new Response(redirect);

            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <Redirect redirectUrl=\"https://test.com\" redirectMethod=\"GET\" tag=\"Tag\" username=\"user\" password=\"pass\" /></Response>";

            Assert.Equal(response_xml,expected_xml);
        }

        /**
         * Test for SpeakSentence and PlayAudio
         */
        [Fact]
        public void TestSpeakSentencePlayAudioResponse()
        {
            SpeakSentence speakSentence = new SpeakSentence();
            speakSentence.Sentence = "test";
            speakSentence.Locale = "en_US";
            speakSentence.Voice = "susan";
            speakSentence.Gender = "female";

            PlayAudio playAudio = new PlayAudio();
            playAudio.Url = "https://test.com";
            playAudio.Username = "user";
            playAudio.Password = "pass";

            Response response = new Response();
            response.Add(speakSentence);
            response.Add(playAudio);


            string response_xml = response.ToXml();
            string expected_xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Response>  <SpeakSentence gender=\"female\" locale=\"en_US\" voice=\"susan\">test</SpeakSentence>  <PlayAudio username=\"user\" password=\"pass\">https://test.com</PlayAudio></Response>";

            Assert.Equal(response_xml,expected_xml);
        }
    }
}
