// # REFRESH ALL UI COMPONTENTS
function refreshUI(isTable, isStagebar,isNextstage){
    
    if(isTable==true){
        refreshTable();
    }
    
    if(isStagebar==true){
        refreshStage();
    }
    if(isNextstage==true){
        refreshNextstage();
    }
}
// # INIT PASSED CARS TABLE
function initTable(){
    pssd = [];
    pssd[0] = 0;
    pssd[1] = 0;
    pssd[2] = 0;
    pssd[3] = 0;
    pssd[4] = 0;
    passedSummary = 0;
    tbpssd = [];
    tbpssd[0] = document.getElementById("UItbnormal");
    tbpssd[1] = document.getElementById("UItbpremium");
    tbpssd[2] = document.getElementById("UItbsport");
    tbpssd[3] = document.getElementById("UItbtruck");
    tbpssd[4] = document.getElementById("UItbbike");
    tableSummary = document.getElementById("UItbsummary");
}
// # REFRESH PASSED CARS TABLE
function refreshTable(){
    tbpssd[0].innerHTML = pssd[0];
    tbpssd[1].innerHTML = pssd[1];
    tbpssd[2].innerHTML = pssd[2];
    tbpssd[3].innerHTML = pssd[3];
    tbpssd[4].innerHTML = pssd[4];
    
    passedSummary = 0;
    for(var i=0;i<pssd.length;i++){
        passedSummary += pssd[i];
    }
    
    tableSummary.innerHTML = passedSummary;
    cpSummary = passedSummary;
}
// # CHECK AND COUNT PASSED CAR
function carPassed(car){
    switch(car.type){
        case "normal":
            pssd[0]++;
            break;
        case "premium":
            pssd[1]++;
            break;
        case "sport":
            pssd[2]++;
            break;
        case "truck":
            pssd[3]++;
            break;
        case "bike":
            pssd[4]++;
            break;
    }
    
}
// # CLEAR PASSED CARS TABLE SCORE
function clearSummary(){
    for(var i=0;i<pssd.length;i++){
        pssd[i] = 0;
    }
    passedSummary = 0;
    cpSummary = 0;
    sActual = 0;
}

// # CHECK AND REFRESH STAGE POINTER
function refreshStage(){
    var stholder = document.getElementById("UIstagebar");
    var stages = stholder.getElementsByTagName("div");
    
    if(sActual!=0){
        stages[sActual-1].style.background ="none";
    }
    stages[sActual].style.background ="#f4c542";
}

// # REFRESH NEXT STAGE COUNTER
function refreshNextstage(){
    
    if(cpSummary>=stages[sActual+1].requireCars){
        sActual++;
        pExperience += sActual*100;
        pMoney += sActual*1000;
        saveAllData();
    }
    
    eActive = stages[sActual].carsActive;
    eRange = stages[sActual].modelsRange;
    
    document.getElementById("UInextstagein").innerHTML = stages[sActual+1].requireCars-cpSummary;
    
    if(sActual+1>stages.length){
        document.getElementById("UInextstagein").innerHTML = "!none!";
    }
}
// # REFRESH LVL AND EXPERIENCE BARS
function refreshLvl(){
    
}