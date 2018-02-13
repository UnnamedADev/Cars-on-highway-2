function gameplay(myCanvas) {
// !!! BLOCK START !!!
    
    // # USER CONFIGURATION
    UCdefaultfps = 30;
    UCfps = 30;
    UCspeedmodifier = UCdefaultfps/UCfps;
    
    
    // # DOM ACTIONS
    ctx = myCanvas.getContext("2d");
    document.addEventListener("keydown", keyPush);
    document.addEventListener("keyup", keyRelease);
        
    gInterval = window.setInterval(game, 1000/UCfps);
    
    // # CONFIGURATION
        // # player
        px=py=100;
        pxv=pyv=0;
        pWidth = 50;
        pHeight = 100;
        pSpeedx = 0.12*100;
        pSpeedy = 0.18*100;
    
    // # GAME
    function game(){
        console.log("It works!");
        // # PLAY POSITION
        px += pxv*pSpeedx*UCspeedmodifier;
        py += pyv*pSpeedy*UCspeedmodifier;
        
        // # DRAW BACKGROUND AND ASPHALT
        ctx.fillStyle = "#137a21";
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
        ctx.fillStyle = "#1a231b";
        ctx.fillRect(200,0,myCanvas.width-400,myCanvas.height);
        
        // # DRAW PLAYER
        ctx.fillStyle = "#c41f7a";
        ctx.fillRect(px,py,pWidth,pHeight);
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