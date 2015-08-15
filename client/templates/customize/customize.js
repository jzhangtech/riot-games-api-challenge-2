if (Meteor.isClient) {
    

    Template.customize.rendered = function () {
    }

    Template.customize.helpers({
        'champions' : function() {
            return champions.find({}, {sort: {name: 1}});
        },
    });

    


}