function checkCreds(){
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    console.log("Full nam is: " + fullName + ", and the Badge ID is: "+ badgeNumb);

    if(fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStaus").innerHTML = "Invalid Full name! Please ry again"
    }else if (badgeNumb > 999 || badgeNumb < -999){
        document.getElementById("loginStaus").innerHTML = "Invalid Badge number, please re enter"
    } else {
        alert("Access granted, welcome " + fullName);
        location.replace("UATSpacePage.html");
    }
}