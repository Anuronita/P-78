//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBSwfoYMn5oMoTMvPsO5D-vSi2HogNpECo",
      authDomain: "kwitter-4173f.firebaseapp.com",
      databaseURL: "https://kwitter-4173f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4173f",
      storageBucket: "kwitter-4173f.appspot.com",
      messagingSenderId: "166173574954",
      appId: "1:166173574954:web:8fe57c24e8dc2589c30053",
      measurementId: "G-F3HBEF402P"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send(){
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();
