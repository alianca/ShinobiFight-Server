[
    'players',
    'battles',
    'authentication',
    'chat',
    'clans'
]
.forEach(function(c) { exports[c] = require('./' + c).controller })
