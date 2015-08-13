if (Meteor.isClient) {
    Template.items.rendered = function () {

    }

    Template.items.helpers({
        'items' : function() {
            return items.find({});
        },
    });
}