var mongoose = require('mongoose')

var base = require('../../config').base_values

var Clan = mongoose.model('clan')
var Skill = mongoose.model('skill')

function PlayerMetadata() {
    this.modified = {}
    this.clan = null
    this.skills = null
    this.turn = 0
    this.messages = []
    this.effects = []
}

exports.PlayerMetadata = PlayerMetadata

PlayerMetadata.prototype.set_clan = function(clan_id, callback) {
    var ref = this
    Clan.findOne({ _id: clan_id }, function(err, clan) {
        if (err) return callback(false)
        ref.clan = clan
        Skill.where('_id').in(clan.skills)
             .where('min_level').lte(ref.level)
             .find(function(err, skills) {
            if (err) return callback(false)
            ref.skills = skills
            callback(true)
        })
    })
}

PlayerMetadata.prototype.get_messages = function() {
    var messages = this.messages
    this.messages = []
    return messages
}

PlayerMetadata.prototype.tick = function() {
    for (var i in this.effects) {
        // Reduce HP
        if (this.effects[i].damage) this.hp -= this.effects[i].damage.hp
        // Decay
        if (--this.effects[i].duration <= 0) this.effects.splice(i, 1)
    }
}

PlayerMetadata.prototype.get_attributes = function(level) {
    var attributes = {}
    for (var name in clan.attributes) {
        var final_value = this.modified[name]
                          || attribute_convert(level, name, clan.attributes[i])
        effects.forEach(function(e) {
            if (e.bonus) {
                var value = e.bonus[name]
                if (is_float(value)) value *= this[name]
                final_value += value
            }
        })
        attributes[name] = final_value
    }
    return attributes
}

PlayerMetadata.prototype.set = function(attribute, value) {
    this.modified[attribute] = value
}

PlayerMetadata.prototype.reset = function() {
    this.modified = {}
    this.effects = []
    this.messages = []
}

// Helper Functions

function is_float(num) { return num != parseInt(num) && !isNaN(num) }

function attribute_convert(level, type, reference) {
    var value = (type == 'hp' ? base.hp : base.attributes)[level]
    
    if (reference[0] == 'm') value += value * 0.25
    else if (reference[0] == 'h') value += value * 0.5

    return Math.round(value)
}
