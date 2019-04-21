
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCbtFHAFQa99BUqXeb8SDLdm199TboZR04",
    authDomain: "kozhikode-election-poll.firebaseapp.com",
    databaseURL: "https://kozhikode-election-poll.firebaseio.com",
    projectId: "kozhikode-election-poll",
    storageBucket: "kozhikode-election-poll.appspot.com",
    messagingSenderId: "784601722403"
  };
  firebase.initializeApp(config);


dbCongress = firebase.database().ref().child('Congress');
dbCongress.on('value', function(congressVotes) {
  Congress.innerText = congressVotes.numChildren();
    })

//databse location for CPM and setting current value to html
dbCPM = firebase.database().ref().child('CPM');
dbCPM.on('value', function(cpmVotes) {
  CPM.innerText = cpmVotes.numChildren();
    })

//databse location for BJP and setting current value to html
dbBJP = firebase.database().ref().child('BJP');
dbBJP.on('value', function(bjpVotes) {
  BJP.innerText = bjpVotes.numChildren();
    })





