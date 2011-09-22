var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

exports.Clan = mongoose.model('clan', new Schema({
    name: { type: String, unique: true },
    skills: [ObjectId],
    attrs: {
        hp: { type: String, enum: [ 'low', 'medium', 'high' ] },
        nin: { type: String, enum: [ 'low', 'medium', 'high' ] },
        gen: { type: String, enum: [ 'low', 'medium', 'high' ] },
        tai: { type: String, enum: [ 'low', 'medium', 'high' ] },
        agi: { type: String, enum: [ 'low', 'medium', 'high' ] },
        con: { type: String, enum: [ 'low', 'medium', 'high' ] },
        str: { type: String, enum: [ 'low', 'medium', 'high' ] },
        def: { type: String, enum: [ 'low', 'medium', 'high' ] },
        cog: { type: String, enum: [ 'low', 'medium', 'high' ] },
        intel: { type: String, enum: [ 'low', 'medium', 'high' ] },
        chk: { type: String, enum: [ 'low', 'medium', 'high' ] },
        stm: { type: String, enum: [ 'low', 'medium', 'high' ] }
    }
}));
