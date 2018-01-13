if (!checkIfLoggedIn()) {
    window.location.href = "index.html";
}


$(function() {
    //get the current user from session 
    var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    console.log("email from session: " + userSessionEntity.email);
    //get connection to database
    // Initialize Firebase
    /*var firebaseConfig = {
        apiKey: "AIzaSyCxL4l6YBouk-C92wcTeZ_sZbzQDcR00hE",
        authDomain: "crammingclique.firebaseapp.com",
        databaseURL: "https://crammingclique.firebaseio.com",
        projectId: "crammingclique",
        storageBucket: "crammingclique.appspot.com",
        messagingSenderId: "321767599885"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    console.log("connected to firebase");
	*/
    //get the user details stored in database
    database.ref("/crammingUsers").orderByChild("email").equalTo(userSessionEntity.email).once("value", function(snapshot) {
        console.log("Read database");
        if (snapshot.val() === null) {
            console.log("Error!! record not found: " + snapshot);
            return;
        } else {
            console.log("user found");
            //prepopulate the profile fields from data pulled from the table                   
        	$("#validationName").text(snapshot.val().name);
        	$("#userImg").attr("src",snapshot.val().imageUrl);
        	$("#phoneNum").text(snapshot.val().phone);
        	//$("#customCheck1").attr("src",snapshot.val().imageUrl);

        }

    });


    //save button clink event
    $(document).on("click", "#saveProfileButton", function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        //redirect the feed page	        
    });


});