global.jQuery = require("jquery");
var ko = require("knockout");

if(window.location.href.indexOf("rsvp") !== -1) {
    // We're on the RSVP page (not a nice way of doing this I know)
    var guest = function() {
        var self = this;
        this.name = ko.observable("");
        this.isAttending = ko.observable(false);
        this.isNotAttending = ko.observable(false);
        this.isChild = ko.observable(false);
        this.isVegetarian = ko.observable(false);
        this.allergies = ko.observable("");
        this.favouriteSong = ko.observable("");

        this.firstName = ko.computed(() => {
            var spaceIndex = self.name().indexOf(" ") === -1 ? self.name().length : self.name().indexOf(" ");
            return self.name().substring(0, spaceIndex);
        }, self);

        this.isAttending.subscribe((value) => {
            self.isNotAttending(!value);
        });

        this.isNotAttending.subscribe((value) => {
            self.isAttending(!value);
        });

        this.isChildText = ko.computed(() => {
            return `Is ${self.firstName()} under 12?`;
        });

        this.isVeggieText = ko.computed(() => {
            return `Is ${self.firstName()} vegetarian?`;
        });

        this.allergyText = ko.computed(() => {
            return `Does ${self.firstName()} have any allergies?`;
        });

        this.favouriteSongText = ko.computed(() => {
            return `What song will get ${self.firstName()} dancing?`;
        });
    };

    var viewModel = function() {
        var self = this;

        this.rsvpType = ko.observable("");
        this.leadGuestEmail = ko.observable("");

        this.guests = ko.observableArray();
        this.guests.push(new guest());

        this.setRsvpType = (data, event) => {
            self.rsvpType(event.currentTarget.id);
        }

        this.addGuest = () => {
            self.guests.push(new guest());
        }

        this.removeGuest = (guest) => {
            self.guests.remove(guest);
        };

        this.sendRsvp = () => {
            var data = ko.toJSON(self);
            console.log(data);
        }
    };
    
    ko.applyBindings(new viewModel());
}

var allDayGuest = {
    
};

var eveningGuest = {

};



// class ViewModel {
//     constructor() {
//         this.isDayGuest = ko.observable(false);
//         // this.setGuest = function(isDay) {
//         //     ViewModel.isDayGuest(isDay);
//         // };
//     }
// }