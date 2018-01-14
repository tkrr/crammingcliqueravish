

$(function() {
	var database = new Database();
	database.initialize();

	if (sessionStorage.getItem("userSessionEntity") === null) {
    	window.location.href = "index.html";
    	return;
	}

    //get the current user from session 
    var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));
    console.log("email from session: " + userSessionEntity.email);
    //get connection to database
	
    //get the user details stored in database
    var ccUser = database.getUserByEmail("userSessionEntity.email");
    console.log("DB response received:" + ccUser);
            //prepopulate the profile fields from data pulled from the table                   
        	//$("#validationName").val(snapshot.val().name);
        	//$("#userImg").attr("src",snapshot.val().imageUrl);
        	//$("#phoneNum").val(snapshot.val().phone);
        	//$("#customCheck1").attr("src",snapshot.val().imageUrl);

    
    //save button clink event
    $(document).on("click", "#saveProfileButton", function(event) {
        event.preventDefault();
        //validate the data
        //if error throw error back
        //update the database with details
        //redirect the feed page	        
    });


});