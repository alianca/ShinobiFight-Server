var crypto = require('crypto')
var convert = require('../helpers/attr_convert').convert
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var Clan = mongoose.model('clan')
var Skill = mongoose.model('skill')

var EXP_RATE = 200

var PlayerSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    birth: { type: String, required: true },
    phone: { type: String, required: false },
    accept_newsletter: Boolean,
    accept_sms: Boolean,
    accept_terms: { type: Boolean, required: true },
    user: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, set: encrypt_password, required: true },
    experience: { type: Number, default: 0 }
})

PlayerSchema.virtual('level').get(function() {
    return Math.ceil((this.experience / EXP_RATE - 1) / 5) + 1
})

PlayerSchema.virtual('attributes').get(function() {
    if (this.clan) {
        var attributes = {}
        for (key in Clan.schema.attributes)
            attributes[key] = convert(this.get_level(), key, this.clan.attributes[key])
        return attributes
    }
    return null
})

PlayerSchema.virtual('clan').get(function() {
    return this._clan
})

PlayerSchema.virtual('clan').set(function(clan_id) {
    var player = this
    Clan.findOne({ _id: clan_id }, function(err, clan) {
        if (err) player._clan = null
        else player._clan = clan
    })
})

PlayerSchema.virtual('status').get(function() {
    return this._status || this.attributes
})

PlayerSchema.virtual('bonus').get(function() {
    var status = clone(this.status)
    status.effects.forEach(function(effect) {
        ['bonus', 'damage'].forEach(function(type) {
            for (var attribute in effect[type]) {
                var value = effect[type][attribute]
                if (!is_integer(value)) value *= status[attribute]
                status[attribute] += value
            }
        })
    })
    return status
})

PlayerSchema.virtual('precision').get(function() {
    return (this.status.nin + this._status.con + this.status.str + this.status.chk) / 4
})

PlayerSchema.virtual('dodge').get(function() {
    return (this.status.hp / 10 + this.status.stm + this.status.def + this.status.gen) / 4
})

PlayerSchema.virtual('critical').get(function() {
    return (this.status.tai + this.status.agi + this.status.cog + this.status.intel) / 4
})

PlayerSchema.method('reset_status', function() {
    this._status = this.attributes
    this._status.effects = []
})

PlayerSchema.method('get_skills', function(callback) {
    if (this.clan) 
        Skill
        .where('_id').in(this.clan.skills)
        .where('min_level').lte(this.level)
        .find(function(err, skills) {
            callback(err ? null : skills)
        })
    else callback(null)
})

PlayerSchema.method('get_skill', function(id, callback) {
    this.get_skills(function(skills) {
        for (i in skills)
            if (skills[i]._id == id) return callback(skills[i])
        callback(null)
    })
})

PlayerSchema.method('test_password', function(password) {
    return this.password == encrypt(password)
})

PlayerSchema.method('set_victory', function(opponent) {
    var old_level = this.level
    var diff = opponent.level - old_level
    if (diff < 0) diff = -1.0 / diff
    this.experience += EXP_RATE + diff * EXP_FACTOR * 0.2
    this.save()
    return this.level > old_level
})

// Validations

PlayerSchema.path('email').validate(function(value) {
    return (/^\w+@\w+\.\w+$/).test(value)
})

PlayerSchema.path('birth').validate(function(value) {
    return (/^\d{2}\/\d{2}\/\d{4}$/).test(value)
})

PlayerSchema.path('user').validate(function(value) {
    return (/^[\w-]{5,15}$/).test(value)
})

PlayerSchema.path('phone').validate(function(value) {
    if (value == '') return true
    return (/^\((10)|([1-9][1-9])\)[6-9][0-9]{7}$/).test(value)
})

PlayerSchema.path('gender').validate(function(value) {
    return (/^[MF]$/).test(value)
})

PlayerSchema.path('accept_terms').validate(function(value) {
    return value
})

mongoose.model('player', PlayerSchema)

function encrypt_password(data) {
    if (data.length < 4) return null
    return crypto.createHash('sha512').update(data).digest('hex')
}

function clone(object) {
    var new_object = object instanceof Array ? [] : {}
    for (var i in object)
        if (object[i] && typeof object[i] == 'object')
            new_object[i] = clone(object[i])
        else new_object[i] = object[i]
    return new_object
}

function is_integer(num) {
    return (num == parseInt(num) && !isNaN(num))
}
