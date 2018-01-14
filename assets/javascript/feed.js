if (!checkIfLoggedIn()) {
    window.location.href = "index.html";
}


$(function() {
//get the current user from session
	//if user not found, then redirect to index.html
//get connection to database
//get all events from database
//prepopulate all feed data pulled from the table
//for events for which user is the owner, remove the register button
//for events for which user is already attending, remove the register button and replace it with derister button

//setup the click event handler on register button
	//validate again to make sure user us not already marked to register
	//update database table with users attending the event info
	//remove the register button and replace it with deregister button

//setup the click event handler on deregister button
	//validate again to make sure user is already marked as register
	//update database table by removing the users attending the event info
	//remove the deregister button and replace it with register button

//have a database event handler for new events
	//add a new event dynamically to the page

//have a database event handler for register/deregister events
	//add or remove attendees dynamically to the page

});