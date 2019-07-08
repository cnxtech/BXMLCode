/**
 * redirect.js
 *
 * BXML generator for the Redirect verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Redirect = function() {

    this.username = null;
    this.password = null;
    this.redirectUrl = null;
    this.redirectMethod = null;
    this.tag = null;

    /**
     * Sets the username attribute
     *
     * @param {String} username The value to set username to
     */
    this.setUsername = function(username, callback) {
        this.username = username;
    }

    /**
     * Sets the password attribute
     *
     * @param {String} password The value to set password to
     */
    this.setPassword = function(password, callback) {
        this.password = password;
    }
    
    /**
     * Sets the redirectUrl attribute
     *
     * @param {String} redirectUrl The value to set redirectUrl to
     */
    this.setRedirectUrl = function(redirectUrl, callback) {
        this.redirectUrl = redirectUrl;
    }
    
    /**
     * Sets the redirectMethod attribute
     *
     * @param {String} redirectMethod The value to set redirectMethod to
     */
    this.setRedirectMethod = function(redirectMethod, callback) {
        this.redirectMethod = redirectMethod;
    }

    /**
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    this.setTag = function(tag, callback) {
        this.tag = tag;
    }

    this.addXml = function(xmlDocument, callback) {
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

//Sets that Redirect inherits from BaseVerb
util.inherits(Redirect, BaseVerb);

module.exports = Redirect;
