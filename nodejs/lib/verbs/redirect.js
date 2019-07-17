/**
 * redirect.js
 *
 * BXML generator for the Redirect verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");

class Redirect extends BaseVerb {

    constructor() {
        super();
        this.username = null;
        this.password = null;
        this.redirectUrl = null;
        this.redirectMethod = null;
        this.tag = null;
    }

    /**
     * Sets the username attribute
     *
     * @param {String} username The value to set username to
     */
    setUsername(username) {
        this.username = username;
    }

    /**
     * Sets the password attribute
     *
     * @param {String} password The value to set password to
     */
    setPassword(password) {
        this.password = password;
    }
    
    /**
     * Sets the redirectUrl attribute
     *
     * @param {String} redirectUrl The value to set redirectUrl to
     */
    setRedirectUrl(redirectUrl) {
        this.redirectUrl = redirectUrl;
    }
    
    /**
     * Sets the redirectMethod attribute
     *
     * @param {String} redirectMethod The value to set redirectMethod to
     */
    setRedirectMethod(redirectMethod) {
        this.redirectMethod = redirectMethod;
    }

    /**
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    setTag(tag) {
        this.tag = tag;
    }

    addXml(xmlDocument) {
        var attributes = {};

        if (this.username !== null) {
            attributes["username"] = this.username;
        }

        if (this.password !== null) {
            attributes["password"] = this.password;
        }

        if (this.redirectUrl !== null) {
            attributes["redirectUrl"] = this.redirectUrl;
        }

        if (this.redirectMethod !== null) {
            attributes["redirectMethod"] = this.redirectMethod;
        }

        if (this.tag !== null) {
            attributes["tag"] = this.tag;
        }

        xmlDocument.ele("Redirect", attributes);
        return xmlDocument;
    }

}

module.exports = Redirect;
