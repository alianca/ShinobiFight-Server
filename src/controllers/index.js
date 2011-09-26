var controllers = [
    'players',
    'battles',
    'authentication',
    'clans'
]

for (i in controllers) 
    exports[controllers[i]] = require('./' + controllers[i]).controller