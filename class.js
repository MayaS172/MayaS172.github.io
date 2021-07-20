class Mission {
    //states first
    constructor(
        fuelLevel,
        oxygenLevel,
        foodLevel,
        spaceCraft,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts
    ) {     //sustaniate states
        this.fuelLevel = fuelLevel;
        this.oxygenLevel = oxygenLevel;
        this.foodLevel = foodLevel;
        this.spaceCraft = spaceCraft;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }
    //list methods
    launch(){
        //code for launch goes here
        alert("we are taking off");
    }

    disMissionLaunchDate(){
        alert("This mission launches on "+ this.launchDateMonth + " " + this.launchDateDay + ". " + this.launchDateYear);
    }
}



function displayFall(){
    console.log("DisplayFall() running");
    fallLaunch.disMissionLaunchDate();
}