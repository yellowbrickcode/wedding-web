var ko = require("knockout");
var Guest = require("./Guest");

module.exports = function() {
    var self = this;

    this.type = ko.observable("");
    this.leadGuestEmail = ko.observable("");

    this.guests = ko.observableArray();
    this.guests.push(new Guest());
}