var count = 0 // global so it never repeats

function Battle(players) {
    this.id = count++
    this.turn = 0
    this.turn_duration = 12 // seconds
    this.winner = null
    this.players = players
}

Battle.prototype.start = function() {
    players.forEach(function(p) { p.reset_status() })
    this.reset_timer()
}

Battle.prototype.end_turn = function() {
    this.turn = (this.turn + 1) % this.players.length
    if (this.turn == 0) this.end_round()
    this.reset_timer()
}

Battle.prototype.end_round = function() {
    this.players.forEach(function(p) { p.effects_decay() })
}

Battle.prototype.end = function(winner) {
    this.winner = winner
    
    var loser = players[0]._id == winner._id ? players[1] : players[0]
    if (winner.set_victory(loser))
        winner.add_message('server', 'Você avançou para o nível ' + winner.level + '.')
    loser.set_defeat(winner)
}

Battle.prototype.reset_timer = function() {
    clearTimeout(this.turn_timer)
    this.turn_timer = setTimeout(this.end_turn, this.turn_duration * 1000)
}

Battle.prototype.validate_turn = function(player) {
    return this.players[this.turn]._id == player._id
}

exports.Battle = Battle
