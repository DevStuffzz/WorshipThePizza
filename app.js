var clicks = 0;

var level = 0;

var levelName = "Beginner Worshiper"

var testing = false;
var testingAmmount = 10000;

function onClick() {
    if(testing) {
        clicks += testingAmmount;   
    } else {
        clicks += 1;
    }
    document.getElementById("time").innerHTML = clicks;
    checkLevels();
}   

function checkLevels() {
    level = clicks;
    
    if(level >= 10){
        levelName = "Worshiper";   
    }
    if(level >= 25){
        levelName = "Nun";   
    }
    if(level >= 50){
        levelName = "Bishop";   
    }
    if(level >= 200){
        levelName = "Priest";   
    }
    if(level >= 500){
        levelName = "Pizza-Cult Applicant";   
    }
    if(level >= 1000) {
        levelName = "Pizza-Cult Class-E";
    }
    if(level >= 2000) {
        levelName = "Pizza-Cult Class-D";   
    }
    if(level >= 5000) {
        levelName = "Pizza-Cult Class-C";   
    }
    if(level >= 10000) {
        levelName = "Pizza-Cult Class-B";   
    }
    if(level >= 15000) {
        levelName = "Pizza-Cult Class-A";   
    }
    if(level >= 100000) {
        levelName = "Pizza-Cult Board-Applicant";   
    }
    if(level >= 150000) {
        levelName = "Pizza-Cult Board-Member";   
    }
    if(level >= 1000000) {
        levelName = "Pizza-Cult President";   
    }
    document.getElementById("head_title").innerHTML = levelName;
}