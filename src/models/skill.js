var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    name: String,
    description: String,
    min_level: { type: Number, min: 0, max: 50 },
    precision: Number,
    critical: Number,
    strength: Number,
    type: String,
    activation: Number,
    duration: Number,
    fatigue: Number,
    bonus: {
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
        stm: Number
    },
    cost: {
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
        stm: Number
    },
    damage: {
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
        stm: Number
    }
});

var Skill = mongoose.model('skill', SkillSchema);

Skill.prototype.compute_damage = function(attacker, attacked) {
    if (this.blocked) return null;

    var attacker_st = attacker.get_combat_st(attacker.status);
    var attacked_st = attacked.get_combat_st(attacked.status);
    var damage = (attacker.status[this.type] + attacker.status.str / 3) * this.strength;
    var defense = (attacked.status.def + attacked.status[this.type]) / 2;

    var success_prob = (this.precision + attacker_st.precision + attacker.status[this.type]) / 3 - attacked_st.dodge;
    var critical_prob = (this.critical + attacker_st.critical / 3) * attacker.status[this.type];
    var success = success_prob > Math.random() * 100;
    var critical = critical_prob > Math.random() * 100;

    var final_damage = 0;
    if (success) {
        final_damage = damage - defense;
        if (final_damage < 0) final_damage = 0;
        if (critical) final_damage *= 2;

        attacked.status.hp -= final_damage;
        if (attacked.status.hp < 0) {
            final_damage -= attacked.status.hp;
            attacked.status.hp = 0;
        }
    }

    this.blocked = true;
    setTimeout(function() { this.blocked = false; }, this.fatigue * 1000);

    return {
        damage: final_damage,
        success: success,
        critical: critical
    };
};

exports.Skill = Skill;
