/**
 * transfer.js
 *
 * BXML generator for the Transfer verb
 *
 * @author Jacob Mulford
 * @copyright Bandwidth INC
 */

var BaseVerb = require("./baseVerb");
var util = require("util");

var Transfer = function() {

    this.transferCallerId = null;
    this.callTimeout = null;
    this.tag = null;
    this.transferCompleteUrl = null;
    this.transferCompleteMethod = null;
    this.username = null;
    this.password = null;
    this.diversionTreatment = null;
    this.diversionReason = null;
    this.phoneNumbers = [];

    /**
     * Sets the transferCallerId attribute
     *
     * @param {String} transferCallerId The value to set transferCallerId to
     */
    this.setTransferCallerId = function(transferCallerId, callback) {
        this.transferCallerId = transferCallerId;
    }

    /**
     * Sets the callTimeout attribute
     *
     * @param {int} callTimeout The value to set callTimeout to
     */
    this.setCallTimeout = function(callTimeout, callback) {
        this.callTimeout = callTimeout;
    }

    /**
     * Sets the tag attribute
     *
     * @param {String} tag The value to set tag to
     */
    this.setTag = function(tag, callback) {
        this.tag = tag;
    }

    /**
     * Sets the transferCompleteUrl attribute
     *
     * @param {String} transferCompleteUrl The value to set transferCompleteUrl to
     */
    this.setTransferCompleteUrl = function(transferCompleteUrl, callback) {
        this.transferCompleteUrl = transferCompleteUrl;
    }

    /**
     * Sets the transferCompleteMethod attribute
     *
     * @param {String} transferCompleteMethod The value to set transferCompleteMethod to
     */
    this.setTransferCompleteMethod = function(transferCompleteMethod, callback) {
        this.transferCompleteMethod = transferCompleteMethod;
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
     * Sets the diversionTreatment attribute
     *
     * @param {String} diversionTreatment The value to set diversionTreatment to
     */
    this.setDiversionTreatment = function(diversionTreatment, callback) {
        this.diversionTreatment = diversionTreatment;
    }

    /**
     * Sets the diversionReason attribute
     *
     * @param {String} diversionReason The value to set diversionReason to
     */
    this.setDiversionReason = function(diversionReason, callback) {
        this.diversionReason = diversionReason;
    }

    /**
     * Adds a PhoneNumber tag to the list of phone numbers
     *
     * @param {PhoneNumber} phoneNumber The PhoneNumber to add to the verb
     */
    this.addPhoneNumber = function(phoneNumber, callback) {
        this.phoneNumbers.push(phoneNumber);
    }

    this.addXml = function(xmlDocument, callback) {
        var attributes = {};

        if (this.transferCallerId !== null) {
            attributes["transferCallerId"] = this.transferCallerId;
        }

        if (this.callTimeout !== null) {
            attributes["callTimeout"] = this.callTimeout;
        }

        if (this.tag !== null) {
            attributes["tag"] = this.tag;
        }

        if (this.transferCompleteUrl !== null) {
            attributes["transferCompleteUrl"] = this.transferCompleteUrl;
        }

        if (this.transferCompleteMethod !== null) {
            attributes["transferCompleteMethod"] = this.transferCompleteMethod;
        }

        if (this.username !== null) {
            attributes["username"] = this.username;
        }

        if (this.password !== null) {
            attributes["password"] = this.password;
        }

        if (this.diversionTreatment !== null) {
            attributes["diversionTreatment"] = this.diversionTreatment;
        }

        if (this.diversionReason !== null) {
            attributes["diversionReason"] = this.diversionReason;
        }

        //Generating the element allows the PhoneNumber tags
        //to be added easily
        var ele = xmlDocument.ele("Transfer", attributes);

        for (i = 0; i < this.phoneNumbers.length; i++) {
            this.phoneNumbers[i].addXml(ele);
        }

        return xmlDocument;
    }
}

//Sets that Transfer inherits from BaseVerb
util.inherits(Transfer, BaseVerb);

module.exports = Transfer;
