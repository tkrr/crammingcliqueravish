$(function() {
    if (sessionStorage.getItem("userSessionEntity") === null) {
        window.location.href = "index.html";
        return;
    }

    //get the current user from session 
    var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    console.log("email from session: " + userSessionEntity.email);
    //get connection to database

    //get the user details stored in database
    database.ref("/crammingUsers").orderByChild("email").equalTo(userSessionEntity.email).once("child_added", function(snapshot) {
        console.log(snapshot.val());
        if (snapshot.val() === null) {
            console.log("Error!! record not found: " + snapshot);
            return;
        } else {
            console.log("user found" + snapshot.val().name);
            //prepopulate the profile fields from data pulled from the table                   
            $("#validationName").val(snapshot.val().name);
            $("#userImg").attr("src", snapshot.val().imageUrl);
            $("#phoneNum").val(snapshot.val().phone);
            //$("#customCheck1").attr("src",snapshot.val().imageUrl);

        }

    });


    //save button clink event
    $(document).on("click", "#saveProfileButton", function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        database.ref("/crammingUsers").orderByChild("email").equalTo(userSessionEntity.email).once("child_added", function(snapshot) {
        console.log(snapshot.val());
        if (snapshot.val() === null) {
            console.log("Error!! record not found: " + snapshot);
                    var crammingUser = {
                        "id": userSessionEntity.id,
                        "name": $("#validationName").val(),
                        "imageUrl": userSessionEntity.imageUrl,
                        "email": userSessionEntity.email,
                        "phone": $("#phoneNum").val(),
                        "receiveTextNotification": true
                    };
                    database.ref("/crammingUsers").push(crammingUser);
        } else {
            console.log("user found" + snapshot.val().name);
            snapshot.ref.update({ name: $("#validationName").val()  });
        }

    });

        //redirect the feed page	        
    });


});