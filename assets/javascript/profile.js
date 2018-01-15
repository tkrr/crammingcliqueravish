$(function() {

    //get the current user from session 
    var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    console.log("email from session: ");
    //get connection to database

    //get the user details stored in database
    async function loadProfileData() {
        var users = await getUserDetailsByEmail(userSessionEntity.email);
        console.log(users);
        //prepopulate the profile fields from data pulled from the table                   
        $("#validationName").val(users[0].name);
        $("#userImg").attr("src", users[0].imageUrl);
        $("#phoneNum").val(users[0].phone);
        $("#customCheck1").attr("checked", (users[0].receiveTextNotification === true ? "checked" : "unchecked"));
    };
    loadProfileData();




    //save button clink event
    $(document).on("click", "#saveProfileButton", function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        console.log("on click event");

        database.ref("/crammingUsers").orderByChild("email").equalTo(userSessionEntity.email).once("value", function(snapshot) {
            console.log(snapshot.val());
            if (snapshot.val() === null) {
                console.log("Error!! record not found: " + snapshot);
                var crammingUser = {
                    "id": userSessionEntity.id,
                    "name": $("#validationName").val(),
                    "imageUrl": userSessionEntity.imageUrl,
                    "email": userSessionEntity.email,
                    "phone": $("#phoneNum").val(),
                    "receiveTextNotification": $("#customCheck1").is(":checked")
                };
                database.ref("/crammingUsers").push(crammingUser);
            } else {
                console.log("user found" + snapshot.val().name);
                snapshot.forEach(function(child) {
                    child.ref.update({
                        "name": $("#validationName").val(),
                        "phone": $("#phoneNum").val(),
                        "receiveTextNotification": $("#customCheck1").is(":checked")
                    });
                })
                console.log("DB updated");
            }
            //redirect the feed page
            window.location.href = "feed.html";
        }, function(error) {
            console.log("error reading DB");
        });


    });


});