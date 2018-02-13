enemy = [];

function addEnemy(){
    enemy.push({
        x:200+Math.floor(Math.random()*10)*50,
        y:0,
        width: 50,
        height: 100,
        speed: 0.15*100
    });
}

function removeEnemy(){
    enemy.shift();
}
function removeAllEnemies(){
    enemy = [];
}