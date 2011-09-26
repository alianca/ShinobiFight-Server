var models = [ 
    'clan',
    'skill',
    'player'
]

for (i in models) require('./' + models[i])
