
  var firebaseConfig = {
    apiKey: "AIzaSyACvKLuD1-s8Nh-CH0tFmjNh36IujgCU30",
    authDomain: "project-93-1161e.firebaseapp.com",
    databaseURL: "https://project-93-1161e-default-rtdb.firebaseio.com",
    projectId: "project-93-1161e",
    storageBucket: "project-93-1161e.appspot.com",
    messagingSenderId: "788653247590",
    appId: "1:788653247590:web:df4be804d41fb25097b1a7",
    measurementId: "G-9ZKV8RR6XQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function addusrname(){
  anyname=document.getElementById("lbl1").value;
  firebase.database().ref("/").child(anyname).update({
      purpose:"adding user"
  });
}