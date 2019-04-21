//if user already have voted and loads the page again it will hide the voting options and show the results only
if(document.cookie !== ""){
    Voted()
}

//connection buttons to variables from html
BtnCongress = document.getElementById("BtnCongress")
BtnCPM = document.getElementById("BtnCPM")
BtnBJP = document.getElementById("BtnBJP")

//adding event listeners to funciton when user clicks the button
BtnCongress.addEventListener("click", VoteCongress)
BtnCPM.addEventListener("click", VoteCPM)
BtnBJP.addEventListener("click", VoteBJP)

//hide voting optons(buttons) and show voting percentage
function Voted() {
    document.getElementById("BtnCongress").style.display = "none"
    document.getElementById("BtnCPM").style.display = "none"
    document.getElementById("BtnBJP").style.display = "none"
    
    document.getElementById("Results").style.display = "block"
 
    
}

// Add value to Congress in database
function VoteCongress() {
    if(document.cookie === ""){
    dbCongress.push(navigator.appCodeName)
    document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";}
    else {
       console.log("already voted")
    }
    setTimeout(Voted,150)
}

function VoteCPM() {
    if(document.cookie === ""){
    dbCPM.push(navigator.appCodeName)
    document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";}
    else {
        console.log("already voted")
    }
    setTimeout(Voted,150)
}

function VoteBJP() {
    if(document.cookie === "") {
    dbBJP.push(navigator.appCodeName)
    document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";}
    else {
        console.log("already voted")
    }
    setTimeout(Voted,150)
}



//sets cookie to restrict users from voting multiple times from same device
function setCookie() {
  document.cookie = "chance" + "=" + "completed" + ";" + "expires=Tue, 30 Jul 2019 07:44:32 GMT" + ";path=/";
}

//disable restriction and allow user to vote one more time
function deleteCookie(){
document.cookie = "chance=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//sets diagram
