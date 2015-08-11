if (Meteor.isClient) {
    Template.champions.rendered = function () {

    }

    Template.helpers({
        'matches' : function() {
            return matches.find({});
        },
    });
}