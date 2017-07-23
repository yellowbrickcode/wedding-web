var $ = require("jquery");
var ko = require("knockout");
var Guest = require("./Guest");
var Rsvp = require("./Rsvp");
var Config = require("./Config");

module.exports = function() {
    var self = this;

    this.rsvp = new Rsvp();

    this.answer = ko.observable("");
    this.result = ko.observable("");

    this.validation = ko.observableArray([]);

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

    this.sendRsvp = (data, event) => {
        self.validation.removeAll();
        
        if(!self.rsvp.leadGuestEmail()) {
            self.validation.push("Please provide an email address");
        }

        if(self.rsvp.guests().length === 0) {
            self.validation.push("Please add at least 1 guest");
        }

        ko.utils.arrayForEach(self.rsvp.guests(), (item, index) => {
            if(!item.name()) {
                self.validation.push(`Please provide a name for Guest ${index + 1}`);
            }
            if(!item.isAttending() && !item.isNotAttending()) {
                self.validation.push(`Please select if Guest ${index + 1} is planning to attend or not`);
            }
        });
        
        var data = ko.toJSON(self.rsvp);

        if(self.validation().length === 0) {
            var sendBtn = $("#sendRsvp");
            sendBtn.text("Sending...");
            sendBtn.attr("disabled", "disabled");

            $.post(Config.functionUrl, data)
            .done(() => {
                self.result("success");
            })
            .fail((error) => {
                self.result("failed");
                sendBtn.removeAttr("disabled");
            });
        }
    }
};