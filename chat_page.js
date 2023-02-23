const firebaseConfig = {
    apiKey: "AIzaSyA6lGvKKfWBDFEWDZ6ivMopiKkslfyCHDA",
    authDomain: "xatkwitter.firebaseapp.com",
    projectId: "xatkwitter",
    storageBucket: "xatkwitter.appspot.com",
    messagingSenderId: "737022624856",
    appId: "1:737022624856:web:d91110b6e03c45a915762d"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   localStorage.setItem("user_name");

   window.location = "chat_room.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");

  location = "chat_page.html"
}


