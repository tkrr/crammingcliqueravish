if (!checkIfLoggedIn()) {
    window.location.href = "index.html";
}


$(function() {
//get the current user from session 
	var userSessionEntity = JSON.parse(sessionStorage.getItem("userSessionEntity"));

//get connection to database
//get the user details stored in database
//prepopulate the profile fields from data pulled from the table
//save button clink event
	//validate the data
		//if error throw error back
	//update the database with details
		//redirect the feed page		

});