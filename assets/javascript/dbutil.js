firebaseConfig = {
    apiKey: "AIzaSyCxL4l6YBouk-C92wcTeZ_sZbzQDcR00hE",
    authDomain: "crammingclique.firebaseapp.com",
    databaseURL: "https://crammingclique.firebaseio.com",
    projectId: "crammingclique",
    storageBucket: "crammingclique.appspot.com",
    messagingSenderId: "321767599885"
};
firebase.initializeApp(firebaseConfig);


// Create a variable to reference the database
var database = firebase.database();

function getUserDetailsByEmail(email) {
    console.log("I am at 2");

    return (database.ref("/crammingUsers").orderByChild("email").equalTo(email).once("value", function(snapshot) {
        console.log(snapshot.val());
        var users = [];
        if (snapshot.val() === null) {
            console.log("Error!! record not found: " + snapshot);
            return null;
        } else {
            console.log("user found");
            snapshot.forEach(function(child){
                console.log(child.val());
                users.push(child.val());
            });
            console.log(users);
            return users;
        }

    }));
};