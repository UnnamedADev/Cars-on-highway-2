function initTable(){
    pssd = [];
    pssd[0] = 0;
    pssd[1] = 0;
    pssd[2] = 0;
    pssd[3] = 0;
    pssd[4] = 0;
    
    tbpssd = [];
    tbpssd[0] = document.getElementById("UItbnormal");
    tbpssd[1] = document.getElementById("UItbpremium");
    tbpssd[2] = document.getElementById("UItbsport");
    tbpssd[3] = document.getElementById("UItbtruck");
    tbpssd[4] = document.getElementById("UItbbike");
    tableSummary = document.getElementById("UItbsummary");
}

function refreshTable(){
    tbpssd[0].innerHTML = pssd[0];
    tbpssd[1].innerHTML = pssd[1];
    tbpssd[2].innerHTML = pssd[2];
    tbpssd[3].innerHTML = pssd[3];
    tbpssd[4].innerHTML = pssd[4];
    
    var pssdSum = 0;
    for(var i=0;i<pssd.length;i++){
        pssdSum += pssd[i];
    }
    
    tableSummary.innerHTML = pssdSum;
}

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