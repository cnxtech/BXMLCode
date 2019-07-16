```
//new namespace for BXML nested under BandwidthV2Voice
using Bandwidth.Standard.BandwidthV2Voice.BandwidthBXML;

Pause pause = new Pause();
pause.Duration = 3;

Response response = new Response();
response.Add(pause);
```
