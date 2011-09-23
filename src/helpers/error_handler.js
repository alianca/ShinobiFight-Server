exports.handle = function(err, respond) {
    var errors = {};
    if (err.forEach) {
        err.forEach(function(value) {
            errors[value] = '';
        });
    } else {
        var desc = [];
        for (i in err) errors[i] = err[i].messages;
        console.log(desc);
    }
    
    respond({ status: 'error', reason: errors });
};
