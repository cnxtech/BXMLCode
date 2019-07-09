/**
 * phoneNumber.js
 *
 * BXML generator for the PhoneNumber tag
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var PhoneNumber = function() {

    this.number = null;
    this.transferAnswerUrl = null;
    this.transferAnswerMethod = null;
    this.username = null;
    this.password = null;
    this.tag = null;

    /**
     * Sets the number attribute
     *
     * @param {String} number The value to set number to
     */
    this.setNumber = function(number, callback) {
        this.number = number;
    }

    /**
     * Sets the transferAnswerUrl attribute
     *
     * @param {String} transferAnswerUrl The value to set transferAnswerUrl to
     */
    this.setTransferAnswerUrl = function(transferAnswerUrl, callback) {
        this.transferAnswerUrl = transferAnswerUrl;
    }

    /**
     * Sets the transferAnswerMethod attribute
     *
     * @param {String} transferAnswerMethod The value to set transferAnswerMethod to
     */
    this.setTransferAnswerMethod = function(transferAnswerMethod, callback) {
        this.transferAnswerMethod = transferAnswerMethod;
    }

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
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    this.setTag = function(tag, callback) {
        this.tag = tag;
    }

    this.addXml = function(xmlDocument, callback) {
        var attributes = {};

        if (this.transferAnswerUrl !== null) {
            attributes["transferAnswerUrl"] = this.transferAnswerUrl;
        }

        if (this.transferAnswerMethod !== null) {
            attributes["transferAnswerMethod"] = this.transferAnswerMethod;
        }

        if (this.username !== null) {
            attributes["username"] = this.username;
        }

        if (this.password !== null) {
            attributes["password"] = this.password;
        }

        if (this.tag !== null) {
            attributes["tag"] = this.tag;
        }

        xmlDocument.ele("PhoneNumber", attributes, this.number);
        return xmlDocument;
    }
}

//Sets that PhoneNumber inherits from BaseVerb
util.inherits(PhoneNumber, BaseVerb);

module.exports = PhoneNumber;
