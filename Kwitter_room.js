var firebaseConfig = {
    apiKey: "AIzaSyAPs3D_bgxUJWMza7f1Ex0PgFnU4eQEWMk",
    authDomain: "project-93-17a19.firebaseapp.com",
    databaseURL: "https://project-93-17a19-default-rtdb.firebaseio.com",
    projectId: "project-93-17a19",
    storageBucket: "project-93-17a19.appspot.com",
    messagingSenderId: "991655793590",
    appId: "1:991655793590:web:2741435793c61c9c44a717"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;
function addroom(){
    addRoom = document.getElementById("addRoom").value;
          firebase.database().ref("/").child(addRoom).update({
                purpose: "Adding room name"
          });
          localStorage.setItem("addRoom",addRoom);
          window.location = "kwitter_page.html";
}