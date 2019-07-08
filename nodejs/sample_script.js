var BxmlBuilder = require("bandwidthbxml");

//Hangup response
hangup = new BxmlBuilder.Verbs.Hangup();

response = new BxmlBuilder.Response();
response.addVerb(hangup);

console.log(response.toXml());
