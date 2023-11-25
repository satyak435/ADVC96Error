const firebaseConfig = {
      apiKey: "AIzaSyBuZFEKjo55fzH8fXaYdsOhv8-kAzDQ6g8",
      authDomain: "kwitter-9e07e.firebaseapp.com",
      databaseURL: "https://kwitter-9e07e-default-rtdb.firebaseio.com",
      projectId: "kwitter-9e07e",
      storageBucket: "kwitter-9e07e.appspot.com",
      messagingSenderId: "364720862101",
      appId: "1:364720862101:web:00335f0d20e54551e27c9c",
      measurementId: "G-Q8BR4XZF8G"
    };
    firebase.initializeApp(firebaseConfig)
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
