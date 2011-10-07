var crypto = require('crypto')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var config = require('../../config')
var exp_rate = config.exp_rate

var Clan = mongoose.model('clan')

var PlayerMetadata = require('../dynamic/player_metadata').PlayerMetadata

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

// Metadata accessors

PlayerSchema.virtual('meta').get(function() {
    return this._metadata
})

PlayerSchema.virtual('precision').get(function() {
    return ( this.attributes.nin
           + this.attributes.con
           + this.attributes.str
           + this.attributes.chk ) / 4
})

PlayerSchema.virtual('dodge').get(function() {
    return ( this.attributes.hp / 10
           + this.attributes.stm
           + this.attributes.def
           + this.attributes.gen ) / 4
})

PlayerSchema.virtual('critical').get(function() {
    return ( this.attributes.tai
           + this.attributes.agi
           + this.attributes.cog
           + this.attributes.intel ) / 4
})

PlayerSchema.virtual('attributes').get(function() {
    if (this.meta) return this.meta.get_attributes(this.level)
    return null
})

PlayerSchema.virtual('clan')
    .get(function() {
        if (this.meta) return this.meta.clan
        return null
    })
    .set(function(id) {
        var metadata = new PlayerMetadata()
        metadata.set_clan(id, function(success) {
            if (success) this._metadata = metadata
        })
    })

PlayerSchema.virtual('skills').get(function() {
    if (this.meta) return this.meta.skills
    return null
})

PlayerSchema.virtual('messages').get(function() {
    if (this.meta) return this.meta.get_messages()
    return null
})

PlayerSchema.virtual('effects').get(function() {
    if (this.meta) return this.meta.effects
    return null
})

PlayerSchema.method('reset', function() {
    if (this.meta) this.meta.reset()
})

PlayerSchema.method('set', function(attribute, value) {
    if (this.meta) this.meta.set(attribute, value)
})

PlayerSchema.method('cleanup', function() {
    delete this._metadata
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
    var exp_loss = ( this.exp_for_level(this.level + 1)
                   - this.exp_for_level(this.level) ) * 0.1
    // TODO get real formula
        
    this.experience -= exp_loss
})

PlayerSchema.method('cleanly_save', function() {
    this.cleanup()
    this.save()
})

PlayerSchema.method('tell', function(type, message) {
    if (this.meta) this.meta.messages.push({ type: type, message: message })
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

// Helper Functions

function encrypt_password(data) {
    if (data.length < 4) return null
    return crypto.createHash('sha512').update(data).digest('hex')
}
