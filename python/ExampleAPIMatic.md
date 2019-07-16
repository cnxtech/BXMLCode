```
from bandwidth.bandwidthv2voice.bandwidth_bxml import Pause, Response #other needed verbs

response = Response()
pause = Pause(3)

response.add_verb(pause)
print(response.to_xml())
```
