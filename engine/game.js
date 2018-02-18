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
    
    // # LOAD RESOURCES
    loadResources();
    
    // # CONFIGURATION
        // # lines
        lWidth = 50;
        lx = undefined; ly=0;
        lxv=0; lyv=1;
        lSpeedy = (0.20*100)*UCspeedmodifier;
        lSpeedx = undefined;
    
        // # player
        pWidth = 40;
        pHeight = 90;
        pSpeedx = (0.10*100)*UCspeedmodifier;
        pSpeedy = (0.16*100)*UCspeedmodifier;
    
        pdx=200+5*lWidth+((lWidth-pWidth)/2); pdy=myCanvas.height-pHeight-20;
        px=pdx; py=pdy;
        pxv=pyv=0;
    
        pExperience = parseInt(localStorage.getItem("userExperience"));
        pMoney = parseInt(localStorage.getItem("userMoney"));
        pLvl = parseInt(localStorage.getItem("userLvl"));
        // # enemies generator
        eActive = undefined;
        eRange = undefined;
    
        // # cars passed
        cpSummary = 0;
    
        // # stages
        sActual = 0;
        
        // # window
        isPaused = false;
    
    // # GAME
    drawUI();
    initTable();
    refreshUI(true,true,true,true);
    
    createEnemies(eActive);
    function game(){
        // # LINES POSITION
        ly += lyv*lSpeedy;
        if(ly>=80){
           ly=-40
        }
        // # PLAYER POSITION
        px += pxv*pSpeedx;
        py += pyv*pSpeedy;
            // X border pass detection
            if(px<400){
                px=400;
            }
            if(px+pWidth>myCanvas.width-400){
                px=myCanvas.width-400-pWidth;
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
                if(py<=enemy[l].y+enemy[l].height && py>=enemy[l].y || py+pHeight<=enemy[l].y+enemy[l].height && py+pHeight>=enemy[l].y){
                   if(px>=enemy[l].x && px<=enemy[l].x+enemy[l].width || px+pWidth>=enemy[l].x && px+pWidth<=enemy[l].x+enemy[l].width){
                       // # crash
                       px=pdx; py=pdy;
                       removeAllEnemies();
                       createEnemies(eActive);
                       clearSummary();
                       refreshUI(true,true,true,true);
                   }
                }
            }
  
        // # DRAW BACKGROUND AND ASPHALT
        ctx.fillStyle = "#137a21";
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
        ctx.fillStyle = "#1a231b";
        ctx.fillRect(400,0,myCanvas.width-800,myCanvas.height);
        
        // # DRAW LINES
            // # white lines
            for(var i=0;i<7;i++){
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.moveTo(400+i*100,0);
                ctx.lineTo(400+i*100,myCanvas.height);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "white";
                ctx.stroke();
                ctx.closePath();
            }
            // # yellow lines
            for(var j=0;j<6;j++){
                ctx.beginPath();
                ctx.setLineDash([40, 80]);
                ctx.moveTo(450+j*100,ly);
                ctx.lineTo(450+j*100,myCanvas.height);
                ctx.lineWidth = 3;
                ctx.strokeStyle = "yellow";
                ctx.stroke();
                ctx.closePath();
            }
        
        // # DRAW PLAYER
        ctx.drawImage(resPlayer[0],px,py,pWidth,pHeight);
        
        // # DRAW ENEMIES
        for(var k=0;k<enemy.length;k++){
            // # enemy drawing and moving
            enemy[k].y += enemy[k].speed*UCspeedmodifier;
            ctx.drawImage(enemy[k].model,enemy[k].x,enemy[k].y,enemy[k].width,enemy[k].height)
            
            // # enemy out of map detection
            if(enemy[k].y>myCanvas.height){
                carPassed(enemy[0]);
                removeEnemy();
                refreshUI(true,true,true,true);
                
            }
        }
    }
    
    // # FUNCTIONS
    function drawUI() {
        document.getElementById("UIholder").style.display = "block";
        
        var stgb = "";
        for(var i=0;i<stages.length;i++){
            stgb += "<div>"+stages[i].name+"<span> you need "+stages[i].requireCars+" cars</span></div>"
        }
        
        document.getElementById("UIstagebar").innerHTML = stgb;
    }
    
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
            case 27:
                
                switch(isPaused){
                    case true:
                        //unpause
                        gInterval = window.setInterval(game, 1000/UCfps);
                        isPaused = false;
                        break;
                    case false:
                        //pause
                        clearInterval(gInterval);
                        isPaused = true;
                        break;
                }
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