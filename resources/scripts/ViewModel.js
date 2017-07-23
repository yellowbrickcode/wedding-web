var ko = require("knockout");
var Guest = require("./Guest");
var Rsvp = require("./Rsvp");
var $ = require("jquery");

module.exports = function() {
    var self = this;

    this.rsvp = new Rsvp();

    this.answer = ko.observable("");
    this.result = ko.observable("");

    this.isHuman = ko.computed(() => {
        if(self.answer().toLowerCase() === "abba") {
            return true;
        }
        return false;
    }, self);

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

        // TODO: Function link is sensitive info. Can't put this in source control...
    }
};