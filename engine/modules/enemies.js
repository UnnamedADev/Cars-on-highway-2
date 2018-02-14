// # INIT ARRAY
enemy = [];

// # ADDING SINGLE ENEMY
function addEnemy(){
    enemy.push({
        x:200+Math.floor(Math.random()*10)*50,
        y:0,
        width: 50,
        height: 100,
        speed: 0.15*100
    });
}
// # ADDING X ENEMIES WITH Y DELAY BETWEEN
function createEnemies(nmr){
    addEnemy();
    var randomized = Math.floor(Math.random()*100+30)*10;
    for(var i=1;i<Math.abs(nmr);i++){
        setTimeout(createEnemies, randomized*i);
    }
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
    console.log();
}
