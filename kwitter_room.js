var firebaseConfig = {
      apiKey: "AIzaSyBt2AmljC34_Vt8NkPUo2ineJUC-EjH5m4",
      authDomain: "snapper-11717.firebaseapp.com",
      databaseURL: "https://snapper-11717-default-rtdb.firebaseio.com",
      projectId: "snapper-11717",
      storageBucket: "snapper-11717.appspot.com",
      messagingSenderId: "245552567927",
      appId: "1:245552567927:web:c74a680fba9afbff4b9872"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
