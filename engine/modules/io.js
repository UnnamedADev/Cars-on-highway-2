// # MAIN BLOCK
initUserData();

// # INIT USER DATA
function initUserData(){
    
    var isTrue = localStorage.getItem("generated");
    if(isTrue=="true" || isTrue==true){
        return;
    }
    
    resetUserData();
    localStorage.setItem("generated",true);
}
// # RESET USER DATA
function resetUserData(){
    localStorage.setItem("userExperience",0);
    localStorage.setItem("userMoney",0);
    localStorage.setItem("userLvl",0);
}
// # SAVE X DATA TO STORAGE
function saveData(itm,val){
    localStorage.setItem(itm,val);
}
// # SAVE ALL PLAYER DATA TO STORAGE
function saveAllData(){
    localStorage.setItem("userExperience",pExperience);
    localStorage.setItem("userMoney",pMoney);
    localStorage.setItem("userLvl",pLvl);
}
// # READ ALL LOCAL STORAGE DATA
function readAllData(){
    console.log(localStorage.getItem("userExperience"));
    console.log(localStorage.getItem("userMoney"));
    console.log(localStorage.getItem("userLvl"));
    console.log(localStorage.getItem("generated"));
}
