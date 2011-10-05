var crypto = require('crypto')
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
    this._status = this.attributes
    this._status.effects = []
    this._status.messages = []
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
    return ((level - 1) * 5 + 1) * EXP_RATE
})

PlayerSchema.method('set_victory', function(opponent) {
    // store old level to detect level ups
    var old_level = this.level
    
    // gains more experience for defeating higher levels
    var diff = opponent.level - this.level
    var modifier = diff * EXP_FACTOR * 0.2
    this.experience += EXP_RATE + modifier
    
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

function attribute_convert(level, type, reference) {
    var value = (type == 'hp'
        ? [60, 70, 80, 90, 105, 115, 130, 145, 155, 170,
           185, 200, 215, 230, 250, 265, 280, 300, 315, 335,
           355, 375, 395, 415, 435, 455, 475, 495, 520, 540,
           565, 590, 610, 635, 660, 685, 710, 735, 765, 790,
           815, 845, 870, 900, 930, 960, 990, 1020, 1050, 1080]
        : [12, 14, 16, 18, 21, 23, 26, 29, 31, 34,
           37, 40, 43, 46, 50, 53, 56, 60, 63, 67,
           71, 75, 79, 83, 87, 91, 95, 99, 104, 108,
           113, 118, 122, 127, 132, 137, 142, 147, 153, 158,
           163, 169, 174, 180, 186, 192, 198, 204, 210, 216]) [level]
    
    if (reference[0] == 'm') value += value * 0.25
    else if (reference[0] == 'h') value += value * 0.5

    return Math.round(value);
}
