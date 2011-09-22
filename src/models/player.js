var crypto = require('crypto');
var convert = require('../helpers/attr_convert').convert;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Clan = mongoose.model('clan');
var Skill = mongoose.model('skill');

var PlayerSchema = new Schema({
    name: { type: String, match: /^[a-zA-Z0-9 _]{5,}$/, unique: true },
    password: { type: String, set: encrypt },
    experience: { type: Number, default: 0 },
});

var Player = mongoose.model('player', PlayerSchema);

Player.prototype.get_level = function() {
    return Math.ceil((this.experience / 200 - 1) / 5) + 1;
};

Player.prototype.get_combat_stats = function(status) {
    return {
        precision: (status.nin + status.con + status.str + status.chk) / 4,
        dodge: (status.hp / 10 + status.stm + status.def + status.gen) / 4,
        critical: (status.tai + status.agi + status.cog + status.intel) / 4
    };
};

Player.prototype.get_attributes = function() {
    if (this.clan) {
        var attributes = {};
        var keys = [ 'stm', 'chk', 'intel', 'cog', 'def', 'str', 'con', 'agi', 'tai', 'gen', 'nin', 'hp' ];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            attributes[key] = convert(this.get_level(), key, this.clan.attrs[key]);
        }
        return attributes;
    } else {
        return null;
    }
};

Player.prototype.get_skills = function(callback) {
    if (this.clan) {
        Skill.
        where('_id').in(this.clan.skills).
        where('min_level').lte(this.get_level()).
        exec(function(err, docs) {
            if (err) {
                callback(null);
            } else {
                callback(docs);
            }
        });
    } else {
        callback(null);
    }
};

Player.prototype.get_skill = function(id, callback) {
    this.get_skills(function(skills) {
        var skill = null;
        for (var i = 0; i < skills.length && !skill; i++) {
            if (skills[i]._id == id) skill = skills[i];
        }
        callback(skill);
    });
};

Player.prototype.set_clan = function(clan_id) {
    var player = this;
    Clan.find({ _id: clan_id }, function(err, docs) {
        if (!err) {
            player.clan = docs[0];
        }
    });
};

Player.prototype.validate_password = function(password) {
    return this.password == encrypt(password);
};

function encrypt(data) {
    return crypto.createHash('sha512').update(data).digest('hex');
}

exports.Player = Player;
