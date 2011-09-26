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
    user: { type: String, required: true, unique: true },
    password: { type: String, required: true, set: encrypt },
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
    return this._status
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
})

PlayerSchema.method('get_skills', function(callback) {
    if (this.clan) 
        Skill.where('_id').in(this.clan.skills).where('min_level').lte(this.level).find(function(err, skills) {
            if (err) callback(null)
            else callback(skills)
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

function encrypt(data) {
    return crypto.createHash('sha512').update(data).digest('hex')
}

mongoose.model('player', PlayerSchema)
