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
    stm: Number
}

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
    bonus: Attributes,
    cost: Attributes,
    damage: Attributes
})

SkillSchema.method('get_damage', function(attacker, attacked) {
    if (this.blocked) return null;
    
    var damage = ( attacker.attributes[this.type]
                 + attacker.attributes.str / 3 )
                 * this.strength
                 
    var defense = ( attacked.attributes.def
                  + attacked.attributes[this.type] ) / 2
                  
    var success_chance = ( this.precision
                         + attacker.precision
                         + attacker.attributes[this.type] ) / 3
                         - attacked.dodge
                         
    var critical_chance = ( this.critical
                          + attacker.critical / 3 )
                          * attacker.attributes[this.type]
    
    var success = success_chance > Math.random() * 100
    var critical = critical_chance > Math.random() * 100
    
    var final_damage = 0
    if (success) {
        this.set_effects(attacker, attacked)
        
        final_damage = damage - defense
        if (final_damage < 0) final_damage = 0
        if (critical) final_damage *= 2
        
        attacked.set('hp', attacked.attributes.hp - final_damage)
        if (attacked.attributes.hp < 0) {
            final_damage -= attacked.attributes.hp
            attacked.set('hp', 0)
        }
    }
    
    this.blocked = true
    setTimeout(function() { this.blocked = false }, this.fatigue * 1000)
    
    return {
        damage: final_damage,
        success: success,
        critical: critical
    }
})

SkillSchema.method('set_effects', function(attacker, attacked) {
    attacker.status.effects.push({
        duration: this.duration,
        bonus: this.bonus
    })
    
    for (var type in this.cost) attacker.attributes[type] -= cost
    
    attacked.status.effects.push({
        duration: this.duration,
        damage: this.damage
    })
})

mongoose.model('skill', SkillSchema)
