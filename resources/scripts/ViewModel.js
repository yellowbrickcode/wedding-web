var ko = require("knockout");
var Guest = require("./Guest");
var Rsvp = require("./Rsvp");
var $ = require("jquery");

module.exports = function() {
    var self = this;

    this.rsvp = new Rsvp();

    this.result = ko.observable("");

    this.setRsvpType = (data, event) => {
        self.rsvp.type(event.currentTarget.id);
    }

    this.addGuest = () => {
        self.rsvp.guests.push(new Guest());
    }

    this.removeGuest = (guest) => {
        self.rsvp.guests.remove(guest);
    };

    this.sendRsvp = () => {
        var data = ko.toJSON(self.rsvp);
        console.log(data);

        self.result("success");
    }
};