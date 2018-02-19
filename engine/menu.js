document.addEventListener("DOMContentLoaded", function(){
    
    // # FIND MENU
    var menuEl = document.getElementById("menuHolder");
    var menuBtns = menuEl.getElementsByTagName("a");
    
    addMenuEvt(menuBtns);
    
    // # DISPLAY GAME VERSION
    rdVersion();
    rdModifiedTime();
});

// # FUNCTIONS
// # ADD MENU EVENTS
function addMenuEvt(btnsArray){
    
    btnsArray[0].addEventListener("click",function(){
        console.log("#play");
        constructCanvas();
    });
    
    btnsArray[1].addEventListener("click",function(){
        console.log("#progress");
    });
    
    btnsArray[2].addEventListener("click",function(){
        console.log("#cars");
    });
    
    btnsArray[3].addEventListener("click",function(){
        console.log("#stages");
    });
    
    btnsArray[4].addEventListener("click",function(){
        console.log("#games history");
    });
    
    btnsArray[5].addEventListener("click",function(){
        console.log("#settings");
        document.getElementById("settingsHolder").style.display = "block";
    });
}

// # DESTROY MENU
function destroyMenu(){
    var ui = document.getElementById("menuHolder");
    ui.style.display = "none";
}
// # DRAW MENU
function drawMenu(){
    var ui = document.getElementById("menuHolder");
    ui.style.display = "block";
}
// # CONTSTRUCT CANVAS
function constructCanvas(){
    var canvas = document.getElementById("myCanvas");
    canvas.style.display = "block";
    // # "game.js" function init
    gameplay(canvas);
}
// HIDE CANVAS
function hideCanvas(){
    var canvas = document.getElementById("myCanvas");
    canvas.style.display = "none";
}
// # READ AND DISPLAY GAME VERSION
function rdVersion(){
    var ttlVal = document.getElementsByTagName("title")[0].innerHTML;
    var validVal = ttlVal.slice(0,ttlVal.indexOf(" -"));
    document.getElementById("gameVERSION").innerHTML = "Recent version: "+validVal;
}
// # READ AND DISPLAY MODIFIED TIME
function rdModifiedTime(){
    document.getElementById("gameMODIFIED").innerHTML = "Last update: "+document.lastModified;
}