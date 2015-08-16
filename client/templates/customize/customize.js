if (Meteor.isClient) {
    
    var tags = ["Health", "Spell Damage", "Armor", "Damage", "Life Steal", "Attack Speed", "Critical Strike", "Movement", "Active", "Trinket", "Spell Block", "Health Regen", "Jungle", "Mana Regen", "On Hit", "Cooldown Reduction", "Aura", "Armor Penetration", "Boots", "Stealth", "Vision", "Magic Penetration", "Mana", "Consumable", "Lane", "GoldPer", "Slow", "Tenacity", "SpellVamp"];
    
    Session.set('selectedTag', 'empty');
    
    Template.customize.rendered = function () {
        
    }

    Template.customize.helpers({
        'champions': function () {
            return champions.find({}, { sort: { name: 1 } });
        },

        'itemTypes': function () {
            return tags;
        },
        
        'listItems': function () {
            var selectedTag = Session.get('selectedTag');
            return items.find({tags: selectedTag});
        }
    });
    
    Template.customize.events({
        'change #itemTypes': function (e, t) {
            Session.set('selectedTag', t.find('#itemTypes').value.replace(/\s+/g, ''));
        }
    });
}