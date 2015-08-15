Template.polltemplate.helpers({
  
  polls: function() {
    return Polls.find();
  }
  
});

    
Template.poll.events({

  'click .vote': function(event) {
    event.preventDefault();
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;
    
  
    Polls.update(
      { _id: pollID }, 
      { $inc: action }
    );

  }

});


    UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});