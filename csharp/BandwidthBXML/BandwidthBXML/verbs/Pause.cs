using System.ComponentModel;
using System.Xml.Serialization;

namespace BandwidthBXML
{
  /// <summary>
  ///   Pause the execution of an ongoing BXML document
  /// </summary>
  /// <seealso href="http://ap.bandwidth.com/docs/xml/pause/" />
  public class Pause : IVerb
  {
    /// <summary>
    ///  How many seconds Bandwidth will wait silently before continuing on.
    /// </summary>
    [XmlAttribute("duration")]
    public int Duration { get; set; }
  }
}
