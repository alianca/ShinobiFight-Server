var sessions = {};

exports.get = function(player_id) {
    return sessions[player_id];
};

exports.create = function(player) {
    sessions[player._id] = player;
};

exports.destroy = function(player_id) {
    delete sessions[player_id];
};
