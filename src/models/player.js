var crypto = require('crypto')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var config = require('../../config')
var base = config.base_values
var exp_rate = config.exp_rate

var Clan = mongoose.model('clan')
var Skill = mongoose.model('skill')

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
    return Math.ceil((this.experience / exp_rate - 1) / 5) + 1
})

PlayerSchema.virtual('attributes').get(function() {
    if (this.clan) {
        var attributes = {}
        for (key in Clan.schema.attributes)
            attributes[key] = attribute_convert(this.get_level(), key, this.clan.attributes[key])
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

PlayerSchema.virtual('precision').get(function() {
    return (this.bonus.nin + this.bonus.con + this.bonus.str + this.bonus.chk) / 4
})

PlayerSchema.virtual('dodge').get(function() {
    return (this.bonus.hp / 10 + this.bonus.stm + this.bonus.def + this.bonus.gen) / 4
})

PlayerSchema.virtual('critical').get(function() {
    return (this.bonus.tai + this.bonus.agi + this.bonus.cog + this.bonus.intel) / 4
})

PlayerSchema.virtual('messages').get(function() {
    return this.status.messages
})

PlayerSchema.method('reset_status', function() {
    this._status = new PlayerMetadata()
})

PlayerSchema.method('cleanup', function() {
    delete this._status
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

PlayerSchema.method('exp_for_level', function(level) {
    return ((level - 1) * 5 + 1) * exp_rate
})

PlayerSchema.method('set_victory', function(opponent) {
    // store old level to detect level ups
    var old_level = this.level
    
    // gains more experience for defeating higher levels
    var diff = opponent.level - this.level
    var modifier = diff * exp_rate * 0.2
    this.experience += exp_rate + modifier
    
    // returns true if leveled up
    return this.level > old_level
})

PlayerSchema.method('set_defeat', function(opponent) {
    // Calculate experience loss
    var exp_loss = (this.exp_for_level(this.level + 1) -
                    this.exp_for_level(this.level)) * 0.1
    // TODO get real formula
        
    this.experience -= exp_loss
})

PlayerSchema.method('add_message', function(type, message) {
    this.status.messages.push({ type: type, content: message })
})

PlayerSchema.method('cleanly_save', function() {
    this.cleanup()
    this.save()
})

PlayerSchema.method('effects_decay', function() {
    for (var i in this.status.effects)
        if (--this.status.effects[i].duration <= 0)
            this.status.effects.splice(i, 1)
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

function is_integer(num) {
    return (num == parseInt(num) && !isNaN(num))
}

function attribute_convert(level, type, reference) {
    var value = (type == 'hp' ? base.hp : base.attributes)[level]
    
    if (reference[0] == 'm') value += value * 0.25
    else if (reference[0] == 'h') value += value * 0.5

    return Math.round(value);
}
