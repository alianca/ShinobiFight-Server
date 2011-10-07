var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Attributes = {
    hp: Number,
    nin: Number,
    gen: Number,
    tai: Number,
    agi: Number,
    con: Number,
    str: Number,
    def: Number,
    cog: Number,
    intel: Number,
    chk: Number,
    stm: Number,
    crt: Number,
    esq: Number,
    pre: Number
}

var ItemSchema = new Schema({
    name: String,
    type: String,
    description: String,
    min_level: Number,
    precision: Number,
    critical: Number,
    strength: Number,
    duration: Number,
    fatigue: Number,
    coins: Number,
    gold: Number,
    effects: {
        own: Attributes,
        enemy: Attributes,
        cost: Attributes
    }
})

mongoose.model('item', ItemSchema)
