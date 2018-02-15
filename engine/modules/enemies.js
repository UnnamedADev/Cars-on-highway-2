// # INIT ARRAY
enemy = [];

// # ENEMY TYPES
types = [
    {name: "normal",
     width: 45,
     height: 90,
     natspeed: 1
    },
    {name: "premium",
     width: 45,
     height: 115,
     natspeed: 0.9
    },
    {name: "sport",
     width: 45,
     height: 105,
     natspeed: 0.8
    },
    {name: "truck",
     width: 50,
     height: 150,
     natspeed: 1.1
    },
    {name: "bike",
     width: 25,
     height: 50,
     natspeed: 0.8
    }
];

// # ADDING SINGLE ENEMY
function addEnemy(){
    var tp = Math.floor(Math.random()*eRange);
    
    switch(types[tp].name){
        case "normal":
            var wmod = resComputerNormal[Math.floor(Math.random()*resComputerNormal.length)];
            break;
        case "premium":
            var wmod = resComputerPremium[Math.floor(Math.random()*resComputerPremium.length)];
            break;
        case "sport":
            var wmod = resComputerSport[Math.floor(Math.random()*resComputerSport.length)];
            break;
        case "truck":
            var wmod = resComputerTruck[Math.floor(Math.random()*resComputerTruck.length)];
            break;
        case "bike":
            var wmod = resComputerBike[Math.floor(Math.random()*resComputerBike.length)];
            break;
    }
    
    enemy.push({
        x:400+Math.floor(Math.random()*12)*lWidth+((lWidth-types[tp].width)/2),
        y:0-types[tp].height,
        width: types[tp].width,
        height: types[tp].height,
        speed: 0.15*100*types[tp].natspeed,
        
        type: types[tp].name,
        model: wmod
    });
}
// # REMOVING SINGLE ENEMY
function removeEnemy(){
    enemy.shift();
    addEnemy();
    
    if(enemy.length<eActive){
        createEnemies(eActive-enemy.length);
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