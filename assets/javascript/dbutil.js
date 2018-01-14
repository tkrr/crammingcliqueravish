function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function Database() {
    this.firebaseConfig = {
            apiKey: "AIzaSyCxL4l6YBouk-C92wcTeZ_sZbzQDcR00hE",
            authDomain: "crammingclique.firebaseapp.com",
            databaseURL: "https://crammingclique.firebaseio.com",
            projectId: "crammingclique",
            storageBucket: "crammingclique.appspot.com",
            messagingSenderId: "321767599885"
    },
    this.firebaseDB = null,
    this.initialize = function() {
        firebase.initializeApp(firebaseConfig);
        this.firebaseDB = firebase.database();
        console.log("connected to firebase");
    },
    this.getUserByEmail = async function(email) {
        this.database.ref("/crammingUsers").orderByChild("email").equalTo(email).once("child_added", function(snapshot) {
            await sleep(10000);
            console.log(snapshot.val());
            if (snapshot.val() === null) {
                console.log("Error!! record not found: ");
                return null;
            } else {
                console.log("user found" + snapshot.val().name);
                return snapshot.val();
            }
        }
    }
};