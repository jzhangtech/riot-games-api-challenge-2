items = new Mongo.Collection("items");
champions = new Mongo.Collection("champions");
matches = new Mongo.Collection("matches");

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
Houston.add_collection(items);
Houston.add_collection(champions);