function gameplay(myCanvas) {
// !!! BLOCK START !!!
    
    // # USER CONFIGURATION
    UCfps = 30;
    
    // # DOM ACTIONS
    ctx = myCanvas.getContext("2d");
    document.addEventListener("keydown", pushKey);
    document.addEventListener("keyup", releaseKey);
        
    gInterval = window.setInterval(game, 1000/UCfps);
    
    // # CONFIGURATION
    
    // # GAME
    function game(){
        console.log("hehe");
    }
    
    // # FUNCTIONS
    
    // # PUSH KEY
    function pushKey(evt){
        
    }
    // # RELEASE KEY
    function releaseKey(evt){
        
    }
// !!! BLOCK END !!!
}