document.addEventListener("DOMContentLoaded", function(){
    
    // # FIND MENU
    var menuEl = document.getElementById("myMenu");
    var menuBtns = menuEl.getElementsByTagName("a");
    
    addMenuEvt(menuBtns);
    
});

// # FUNCTIONS
// # ADD MENU EVENTS
function addMenuEvt(btnsArray){
    
    btnsArray[0].addEventListener("click",function(){
        console.log("#play");
        destroyUI();
        constructCanvas();
    });
    
    btnsArray[1].addEventListener("click",function(){
        console.log("#cars");
    });
    
    btnsArray[2].addEventListener("click",function(){
        console.log("#stages");
    });
    
    btnsArray[3].addEventListener("click",function(){
        console.log("#games history");
    });
    
    btnsArray[4].addEventListener("click",function(){
        console.log("#options");
    });
}

// # DESTROY MENU
function destroyUI(){
    var ui = document.getElementById("myUI");
    ui.style.display = "none";
}
// # CONTSTRUCT CANVAS
function constructCanvas(){
    var canvas = document.getElementById("myCanvas");
    canvas.style.display = "block";
    // # "game.js" function init
    gameplay(canvas);
}