enemy = [];

function addEnemy(){
    enemy.push({
        x:200+Math.floor(Math.random()*10)*50,
        y:0,
        speed: 0.20*100
    });
}

function removeEnemy(){
    enemy.shift();
}