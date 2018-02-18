// # INIT ARRAY
enemy = [];

// # ENEMY TYPES
types = [
    {name: "normal",
     width: 45,
     height: 90,
     natspeed: 1,
     experience: 5,
    },
    {name: "premium",
     width: 45,
     height: 115,
     natspeed: 0.9,
     experience: 8
    },
    {name: "sport",
     width: 45,
     height: 105,
     natspeed: 0.8,
     experience: 12
    },
    {name: "truck",
     width: 50,
     height: 150,
     natspeed: 1.1,
     experience: 10
    },
    {name: "bike",
     width: 25,
     height: 50,
     natspeed: 0.8,
     experience: 5
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
        model: wmod,
        experience: types[tp].experience
    });
}
// # REMOVING SINGLE ENEMY
function removeEnemy(){
    pExperience += enemy[0].experience;
    provideLvl();
    saveAllData();
    enemy.shift();
    addEnemy();
    
    if(enemy.length<eActive){
        setTimeout(function(){
            createEnemies(eActive-enemy.length);
        },Math.floor(Math.random()*200+80)*10);
    }
}
// # REMOVING ALL ENEMIES
function removeAllEnemies(){
    enemy = [];
    provideLvl();
    saveAllData();
}
// # ADDING X ENEMIES WITH Y DELAY BETWEEN
function createEnemies(nmr){
    addEnemy();
    
    for(var i=1;i<Math.abs(nmr);i++){
        var randomized = Math.floor(Math.random()*200+80)*10;
        setTimeout(createEnemies, randomized*i);
    }
}