// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3MlbpSv4nE3UpQ7_ZPhwygrssI-rfu5k",
  authDomain: "jobwebsite-806d0.firebaseapp.com",
  databaseURL: "https://jobwebsite-806d0.firebaseio.com",
  projectId: "jobwebsite-806d0",
  storageBucket: "jobwebsite-806d0.appspot.com",
  messagingSenderId: "549870088835",
  appId: "1:549870088835:web:e7c272a7f7fb99cf92a1b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){

var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));

alert("Signed Up");
}



function signIn(){

var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.catch(e => alert(e.message));




}


function signOut(){

auth.signOut();
alert("Signed Out");
window.location.href = "login.html";

}

;
