var ko = require("knockout");

module.exports = function() {
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