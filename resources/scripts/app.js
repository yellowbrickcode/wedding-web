global.jQuery = require("jquery");
var ko = require("knockout");
var Guest = require("./Guest");
var ViewModel = require("./ViewModel");

if(window.location.href.indexOf("rsvp") !== -1) {
    // We're on the RSVP page so go Knockout (not a nice way of doing this I know)
    ko.applyBindings(new ViewModel());
}