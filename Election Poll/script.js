//if user already have voted and loads the page again it will hide the voting options and show the results only
if (document.cookie !== "") {
    Voted()
}

//Load all radio button variables
RadioCongress = document.getElementById("RadioCongress")
RadioCPM = document.getElementById("RadioCPM")
RadioBJP = document.getElementById("RadioBJP")

//connection buttons to variables from html
BtnSubmitVote = document.getElementById("SubmitVoteBtn")



//adding event listeners to funciton when user clicks the button
BtnSubmitVote.addEventListener("click", SubmitVote)




//Find checked radio butotn and submit vote
function SubmitVote() {
    if (RadioCongress.checked == true) {
        VoteCongress()
    } else if (RadioCPM.checked == true) {
        VoteCPM()
    } else if (RadioBJP.checked == true) {
        VoteBJP()
    } else {
        alert("Choose a party to vote")
    }

}

//hide voting optons(buttons) and show voting percentage
function Voted() {
    document.getElementById("CongressSymbol").style.display = "none"
    document.getElementById("CPMSymbol").style.display = "none"
    document.getElementById("BJPSymbol").style.display = "none"

    RadioCongress.style.display = "none"
    RadioCPM.style.display = "none"
    RadioBJP.style.display = "none"
    document.getElementById("SubmitVoteBtn").style.display = "none"

    document.getElementById("Results").style.display = "block"


}

// Add value to Congress in database
function VoteCongress() {
    if (document.cookie === "") {
        dbCongress.push(navigator.appCodeName)
        setBars()
        document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    } else {
        console.log("already voted")
    }
    setTimeout(Voted, 150)
}

function VoteCPM() {
    if (document.cookie === "") {
        dbCPM.push(navigator.appCodeName)
        setBars()
        document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    } else {
        console.log("already voted")
    }
    setTimeout(Voted, 150)
}

function VoteBJP() {
    if (document.cookie === "") {
        dbBJP.push(navigator.appCodeName)
        setBars()
        document.cookie = "chance=completed; expires=Thu, 18 Dec 2020 12:00:00 UTC";
    } else {
        console.log("already voted")
    }
    setTimeout(Voted, 150)
}



//sets cookie to restrict users from voting multiple times from same device
function setCookie() {
    document.cookie = "chance" + "=" + "completed" + ";" + "expires=Tue, 30 Jul 2019 07:44:32 GMT" + ";path=/";
}

//disable restriction and allow user to vote one more time
function deleteCookie() {
    document.cookie = "chance=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//sets diagram
