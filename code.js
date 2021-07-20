function start() {
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

function stop(){
    console.log("stop function started");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function countdowmTimer() {
    console.log("countdownTimer Working");
    var currTime = 15;
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime - 5;

    //Timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //Timer for 40
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 15000);
}

function playCraps(){
    console.log("Craps game initated");
    var wins;
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You lose!!";
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! You win";
        wins++;
    }else{
        document.getElementById("crapsStatus").innerHTML = "You did not lose and you did not win. Please try again.";
    }
    document.getElementById("winStatus").innerHTML = wins;
}

function btrCountdownTimer(){
    //increase speed by 10, please decrease by final product
    console.log("btrCountdownTimer() started");
    var currTime = 50;
    for(var i = 0; i < 10; i++){
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = currTime;
            currTime = currTime - 5;
        },500 * i);
    }
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!";
    }, 5000);
}

function btrCountdownTimer(){
    //increase speed by 10, please decrease by final product
    console.log("btrCountdownTimer() started");
    var currTime = 50;
    for(var i = 0; i < 11; i++){
        if(i == 10){
            setTimeout(function(){
                    document.getElementById("countdownStatus").innerHTML = "Blastoff!!";
                    currTime = currTime - 5;
                },5000 * i);
        } else if (i > 4){
            setTimeout(function(){
                    document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
                    currTime = currTime - 5;
                },5000 * i);
        } else {
            setTimeout(function(){
                document.getElementById("countdownStatus").innerHTML = currTime;
                currTime = currTime - 5;
            },5000 * i);
        }


        // setTimeout(function(){
        //     document.getElementById("countdownStatus").innerHTML = currTime;
        //     currTime = currTime - 5;
        // },500 * i);
    }
}

function sandBoxRun(){
    console.log("SandboxRun started");
    var a = 7;
    if(a==5){
        document.getElementById("sandboxArea").innerHTML = "a does in fact equal 5";
    }else{
        document.getElementById("sandboxArea").innerHTML = "a does not in fact equal 5";
    }
}

function launchFall(){
    console.log("DlaunchFall() running");
    fallLaunch.launch();
}

function playStation(){
    console.log("play space station sounds");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magnetX = magnetX;
        this.magnetY = magnetY;
        this.magnetZ = magnetZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goUATSpace(){
    console.log("goUATSpace() started");
    location.replace("UATSpacePage.html");
}

function goLandingPage(){
    console.log("goLandingPage() started");
    location.replace("index.html");
}

function goBoards(){
    console.log("goBoards() started");
    location.replace("boards.html");
}

function goLogin(){
    console.log("goLogin started");
    location.replace("login.html");
}