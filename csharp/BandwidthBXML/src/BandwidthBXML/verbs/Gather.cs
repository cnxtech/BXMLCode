using System.ComponentModel;
using System.Xml.Serialization;

namespace BandwidthBXML
{
  /// <summary>
  ///   The Gather verb is used to collect digits for some period of time.
  /// </summary>
  /// <seealso href="http://ap.bandwidth.com/docs/xml/gather/" />
  public class Gather : IVerb
  {
    /// <summary>
    ///   Constructor
    /// </summary>
    public Gather()
    {
    }

    /// <summary>
    ///   Relative or absolute URL to send event to and request
    /// </summary>
    [XmlAttribute("gatherUrl")]
    public string GatherUrl { get; set; }

    /// <summary>
    /// HTTP method used to send the gather callback
    /// </summary>
    [XmlAttribute("gatherMethod")]
    public string GatherMethod { get; set; }

    /// <summary>
    /// String of digits to terminate the gather
    /// </summary>
    [XmlAttribute("terminatingDigits")]
    public string TerminatingDigits { get; set; }

    /// <summary>
    /// Optional string to be included in callbacks
    /// </summary>
    [XmlAttribute("tag")]
    public string Tag { get; set; }

    /// <summary>
    ///   Quantity of digits to collect
    /// </summary>
    [XmlAttribute("maxDigits")]
    public int MaxDigits { get; set; }

    /// <summary>
    ///   Integer time indicating the timeout between digits
    /// </summary>
    [XmlAttribute("interDigitTimeout")]
    public int InterDigitTimeout { get; set; }

    /// <summary>
    /// Username for http authentication
    /// </summary>
    [XmlAttribute("username")]
    public string Username { get; set; }

    /// <summary>
    /// Password for http authentication
    /// </summary>
    [XmlAttribute("password")]
    public string Password { get; set; }

    /// <summary>
    /// Timeout in secods for first digit press
    /// </summary>
    [XmlAttribute("firstDigitTimeout")]
    public int FirstDigitTimeout { get; set; }

    /// <summary>
    ///  Using the SpeakSentence inside the Gather verb will speak the text to the callee.
    /// </summary>
    public SpeakSentence SpeakSentence { get; set; }

    /// <summary>
    /// Using the PlayAudio inside the Gather verb will play the media to the callee.
    /// </summary>
    public PlayAudio PlayAudio { get; set; }
  }
}
