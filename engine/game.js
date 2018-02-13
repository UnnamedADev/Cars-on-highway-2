function gameplay(myCanvas) {
// !!! BLOCK START !!!
    
    // # USER CONFIGURATION
    UCdefaultfps = 30;
    UCfps = 60;
    UCspeedmodifier = UCdefaultfps/UCfps;
    
    
    // # DOM ACTIONS
    ctx = myCanvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    document.addEventListener("keyup", keyRelease);
        
    gInterval = window.setInterval(game, 1000/UCfps);
    
    // # CONFIGURATION
        // # player
        pWidth = 50;
        pHeight = 100;
        pSpeedx = (0.12*100)*UCspeedmodifier;
        pSpeedy = (0.18*100)*UCspeedmodifier;
    
        pdx=450; pdy=myCanvas.height-pHeight-20;
        px=pdx; py=pdy;
        pxv=pyv=0;
        
    
    // # GAME
    addEnemy();addEnemy();
    function game(){
        
        // # PLAYER POSITION
        px += pxv*pSpeedx;
        py += pyv*pSpeedy;
            // X border pass detection
            if(px<200){
                px=200;
            }
            if(px+pWidth>myCanvas.width-200){
                px=myCanvas.width-200-pWidth;
            }
            // # Y border pass detection
            if(py<0){
                py=0;
            }
            if(py+pHeight>myCanvas.height){
                py=myCanvas.height-pHeight;
            }
            // # ENEMY crash detection
            for(var l=0;l<enemy.length;l++){
                // # ENEMY Y detection
                if(py<enemy[l].y+enemy[l].height && py>enemy[l].y){
                   if(px>enemy[l].x && px<enemy[l].x+enemy[l].width || px+pWidth>enemy[l].x && px+pWidth<enemy[l].x+enemy[l].width){
                       console.log("Crash...");
                       px=pdx; py=pdy;
                       removeAllEnemies();
                   }
                }
            }
  
        // # DRAW BACKGROUND AND ASPHALT
        ctx.fillStyle = "#137a21";
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
        ctx.fillStyle = "#1a231b";
        ctx.fillRect(200,0,myCanvas.width-400,myCanvas.height);
        
        // # DRAW LINES
            // # white lines
            for(var i=0;i<7;i++){
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.moveTo(200+i*100,0);
                ctx.lineTo(200+i*100,myCanvas.height);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "white";
                ctx.stroke();
                ctx.closePath();
            }
            for(var j=0;j<6;j++){
                ctx.beginPath();
                ctx.setLineDash([40, 80]);
                ctx.moveTo(250+j*100,0);
                ctx.lineTo(250+j*100,myCanvas.height);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "yellow";
                ctx.stroke();
                ctx.closePath();
            }
        
        // # DRAW PLAYER
        ctx.fillStyle = "#c41f7a";
        ctx.fillRect(px,py,pWidth,pHeight);
        
        // # DRAW ENEMIES
        for(var k=0;k<enemy.length;k++){
            // # enemy drawing and moving
            ctx.fillStyle = "#c41f1f";
            enemy[k].y += enemy[k].speed*UCspeedmodifier;
            ctx.fillRect(enemy[k].x,enemy[k].y,enemy[k].width,enemy[k].height);
            
            // # enemy out of map detection
            if(enemy[k].y>myCanvas.height){
                removeEnemy();
            }
        }
    }
    
    // # FUNCTIONS
    
    // # PUSH KEY
    function keyPush(evt){
        
        switch(evt.keyCode){
            case 37:
                pxv=-1;
                break;
            case 38:
                pyv=-1;
                break;
            case 39:
                pxv=1;
                break;
            case 40:
                pyv=1;
                break;
        }
    }
    // # RELEASE KEY
    function keyRelease(evt){
        switch(evt.keyCode){
            case 37:
                pxv=0;
                break;
            case 38:
                pyv=0;
                break;
            case 39:
                pxv=0;
                break;
            case 40:
                pyv=0;
                break;
        }
    }
// !!! BLOCK END !!!
}