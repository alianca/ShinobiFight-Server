var count = 0 // global so it never repeats

function Battle(players) {
    this.id = count++
    this.turn = 0
    this.winner = null
    this.players = players
    this.round_progress = 0
}

Battle.prototype.start = function() {
    players.forEach(function(p) { p.reset() })
}

Battle.prototype.get_next = function() {
    // calculates the needed advance for the next turn
}

Battle.prototype.end_turn = function(id) {
    this.turn = this.get_next()
    this.round_progress |= 1 << id
    if (this.round_progress == (1 << this.players.count) - 1)
        this.end_round()
}

Battle.prototype.end_round = function() {
    this.players.forEach(function(p) { p.tick() })
}

Battle.prototype.end = function(winner) {
    this.winner = winner
    
    var loser = players[0]._id == winner._id ? players[1] : players[0]
    if (winner.set_victory(loser))
        winner.tell('special', 'level_up:' + winner.level)
    loser.set_defeat(winner)
}

Battle.prototype.validate_turn = function(player) {
    return this.players[this.turn]._id == player._id
}

exports.Battle = Battle
