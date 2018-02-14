// # INIT ARRAY
enemy = [];

// # ENEMY TYPES
types = [
    {name: "normal",
     width: 45,
     height: 90,
     color: "orange",
     natspeed: 1
    },
    {name: "premium",
     width: 45,
     height: 115,
     color: "red",
     natspeed: 1.1
    },
    {name: "sport",
     width: 45,
     height: 105,
     color: "blue",
     natspeed: 1.2
    },
    {name: "truck",
     width: 50,
     height: 150,
     color: "green",
     natspeed: 0.9
    },
    {name: "bike",
     width: 25,
     height: 50,
     color: "grey",
     natspeed: 1.2
    }
];

// # ADDING SINGLE ENEMY
function addEnemy(){
    var tp = Math.floor(Math.random()*eRange);
    enemy.push({
        x:200+Math.floor(Math.random()*10)*lWidth+((lWidth-types[tp].width)/2),
        y:0-types[tp].height,
        width: types[tp].width,
        height: types[tp].height,
        speed: 0.15*100*types[tp].natspeed,
        
        type: types[tp].name,
        color: types[tp].color
    });
}
// # REMOVING SINGLE ENEMY
function removeEnemy(){
    enemy.shift();
    addEnemy();
    
    if(enemy.length<eactive){
        createEnemies(eactive-enemy.length);
    }
}
// # REMOVING ALL ENEMIES
function removeAllEnemies(){
    enemy = [];
}
// # ADDING X ENEMIES WITH Y DELAY BETWEEN
function createEnemies(nmr){
    addEnemy();
    var randomized = Math.floor(Math.random()*100+30)*10;
    for(var i=1;i<Math.abs(nmr);i++){
        setTimeout(createEnemies, randomized*i);
    }
}